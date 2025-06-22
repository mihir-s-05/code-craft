import { LANGUAGE_CONFIG, LANGUAGE_EXTENSIONS } from "@/app/(root)/_constants";
import { create } from "zustand";
import { Monaco } from "@monaco-editor/react";
import { CodeEditorState } from "@/types";


const getInitialState = () => {
    // if we're on the server, return default values
    if (typeof window === "undefined") {
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark",
            files: [
                {
                    name: `main.${LANGUAGE_EXTENSIONS["javascript"]}`,
                    content: LANGUAGE_CONFIG["javascript"].defaultCode,
                },
            ],
            currentFileIndex: 0,
        }
    }
    // if we're on the client, return values from local storage bc localStorrage is browser API.
    const savedLanguage = localStorage.getItem("editor-language") || "javascript";
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || "16";

    const savedFiles = localStorage.getItem(`editor-files-${savedLanguage}`);
    const files = savedFiles
        ? JSON.parse(savedFiles)
        : [{
            name: `main.${LANGUAGE_EXTENSIONS[savedLanguage]}`,
            content: LANGUAGE_CONFIG[savedLanguage].defaultCode,
        }];

    return {
        language: savedLanguage,
        theme: savedTheme,
        fontSize: Number(savedFontSize),
        files,
        currentFileIndex: 0,
    }

}

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
    const initialState = getInitialState();
    return {
        ...initialState,
        output:"",
        isRunning:false,
        error:null,
        editor:null,
        executionResult:null,

        getCode: () => get().files[get().currentFileIndex]?.content || "",
        files: initialState.files,
        currentFileIndex: initialState.currentFileIndex,
        
        setEditor: (editor: Monaco) => {
            const { files, currentFileIndex } = get();
            editor.setValue(files[currentFileIndex].content);
            set({ editor });
        },

        setTheme: (theme: string) => {
            localStorage.setItem("editor-theme", theme);
            set({theme});
        },

        setFontSize: (fontSize: number) => {
            localStorage.setItem("editor-font-size", fontSize.toString());
            set({fontSize});
        },

        setCurrentFileIndex: (index: number) => {
            const { files } = get();
            if (index < 0 || index >= files.length) return;
            set({ currentFileIndex: index });
            const editor = get().editor;
            if (editor) editor.setValue(files[index].content);
        },

        addFile: (name?: string) => {
            const { language, files } = get();
            const extension = LANGUAGE_EXTENSIONS[language];
            const fileName = name || `file${files.length}.${extension}`;
            const newFiles = [...files, { name: fileName, content: "" }];
            localStorage.setItem(`editor-files-${language}`, JSON.stringify(newFiles));
            set({ files: newFiles, currentFileIndex: newFiles.length - 1 });
            const editor = get().editor;
            if (editor) editor.setValue("");
        },

        removeFile: (index: number) => {
            const { files, language, currentFileIndex } = get();
            if (files.length <= 1) return;
            const newFiles = files.filter((_, i) => i !== index);
            let newIndex = currentFileIndex;
            if (index <= currentFileIndex) newIndex = Math.max(0, currentFileIndex - 1);
            localStorage.setItem(`editor-files-${language}`, JSON.stringify(newFiles));
            set({ files: newFiles, currentFileIndex: newIndex });
            const editor = get().editor;
            if (editor) editor.setValue(newFiles[newIndex].content);
        },

        updateCurrentFileContent: (content: string) => {
            const { files, currentFileIndex, language } = get();
            const newFiles = [...files];
            newFiles[currentFileIndex] = { ...newFiles[currentFileIndex], content };
            localStorage.setItem(`editor-files-${language}`, JSON.stringify(newFiles));
            set({ files: newFiles });
        },

        setLanguage: (language: string) => {
            const { language: currentLang, files } = get();
            localStorage.setItem(`editor-files-${currentLang}`, JSON.stringify(files));

            const saved = localStorage.getItem(`editor-files-${language}`);
            const newFiles = saved
                ? JSON.parse(saved)
                : [{
                    name: `main.${LANGUAGE_EXTENSIONS[language]}`,
                    content: LANGUAGE_CONFIG[language].defaultCode,
                }];

            localStorage.setItem("editor-language", language);

            set({
                language,
                files: newFiles,
                currentFileIndex: 0,
                output: "",
                error: null,
            });

            const editor = get().editor;
            if (editor) editor.setValue(newFiles[0].content);
        },
          runCode: async () => {
            const { language, files, currentFileIndex } = get();
            const code = files[currentFileIndex].content;
            if (files.every((f) => !f.content.trim())) {
                set({ error: "Please enter some code" });
                return;
            }

            set({isRunning: true, error: null, output: ""})

            try {
                const runtime = LANGUAGE_CONFIG[language].pistonRuntime;
                const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        language: runtime.language,
                        version: runtime.version,
                        files: files.map(f => ({ name: f.name, content: f.content })),
                    })
                })

                const data = await response.json();

                console.log("data back from piston: ", data);
                // handle API-level erros
                if (data.message) { 
                    set({error: data.message, executionResult: {code, output: "", error: data.message}})
                    return;
                }

                // handle compilation errors
                if (data.compile && data.compile.code !== 0) {
                    const error = data.compile.stderr || data.compile.output;
                    set ( {
                        error,
                        executionResult: {
                            code, 
                            output: "", 
                            error
                        }
                    })
                    return
                }

                if (data.run && data.run.code !== 0) {
                    const error = data.run.stderr || data.run.output;
                    set ({
                        error,
                        executionResult: {
                            code,
                            output: "",
                            error
                        }
                    })
                    return;
                }

                // if we get here, execution was successful
                const output = data.run.output;
                set ({
                    output: output.trim(),
                    error: null,
                    executionResult: {
                        code,
                        output,
                        error: null
                    }
                })
            } catch(error) {
                console.log("Error running code: ", error);
                set({
                    error: "Error running code",
                    executionResult: {
                        code,
                        output: "",
                        error: "Error running code"
                    }
                })
            } finally {
                set({isRunning:false})
            }
        }
    }
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;