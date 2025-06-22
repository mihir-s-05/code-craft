"use client";
import { useCodeEditorStore, getExecutionResult } from "@/store/useCodeEditorStore";
import { useEffect, useState } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import { Editor } from "@monaco-editor/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RotateCcwIcon, ShareIcon, TypeIcon, Plus, X, Pencil } from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import useMounted from "@/hooks/useMounted";
import ShareSnippetDialog from "./ShareSnippetDialog";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

function EditorPanel() {
  const clerk = useClerk();
  const { user } = useUser();
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const {
    language,
    theme,
    fontSize,
    editor,
    setFontSize,
    setEditor,
    runCode,
    isRunning,
    files,
    currentFileIndex,
    addFile,
    removeFile,
    renameFile,
    setCurrentFileIndex,
    updateCurrentFileContent,
  } = useCodeEditorStore();

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const submitRename = (index: number) => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== files[index].name) {
      renameFile(index, trimmed);
    }
    setEditingIndex(null);
  };
  const saveExecution = useMutation(api.codeExecutions.saveExecution);

  const mounted = useMounted();

  useEffect(() => {
    if (editor && files.length) {
      editor.setValue(files[currentFileIndex].content);
    }
    // we intentionally omit `files` from dependencies to avoid resetting the editor on every keystroke
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, editor, currentFileIndex]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  // Add keyboard shortcut for running code
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault();
        if (!isRunning) {
          await handleRunCode();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning]);

  const handleRunCode = async () => {
    await runCode();
    const result = getExecutionResult();

    if (user && result) {
      await saveExecution({
        language,
        code: result.code,
        output: result.output || undefined,
        error: result.error || undefined,
      });
    }
  };

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    updateCurrentFileContent(defaultCode);
    if (editor) editor.setValue(defaultCode);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) updateCurrentFileContent(value);
  };

  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 12), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
              <Image src={"/" + language + ".png"} alt="Logo" width={24} height={24} />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white">Code Editor</h2>
              <p className="text-xs text-gray-500">Write and execute your code</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Font Size Slider */}
            <div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5">
              <TypeIcon className="size-4 text-gray-400" />
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
                  {fontSize}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
              aria-label="Reset to default code"
            >
              <RotateCcwIcon className="size-4 text-gray-400" />
            </motion.button>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsShareDialogOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r
               from-blue-500 to-blue-600 opacity-90 hover:opacity-100 transition-opacity"
            >
              <ShareIcon className="size-4 text-white" />
              <span className="text-sm font-medium text-white ">Share</span>
            </motion.button>
          </div>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-2 mb-2">
          {files.map((file, idx) => {
            const isEditing = editingIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setCurrentFileIndex(idx)}
                className={`flex items-center px-2 py-1 rounded cursor-pointer bg-[#1e1e2e] ring-1 ring-white/5 text-sm ${idx === currentFileIndex ? "text-white" : "text-gray-400"}`}
              >
                {isEditing ? (
                  <input
                    className="bg-transparent border-none focus:outline-none w-24 text-white text-sm"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    onBlur={() => submitRename(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        submitRename(idx);
                      } else if (e.key === "Escape") {
                        setEditingIndex(null);
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <>
                    <span>{file.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingIndex(idx);
                        setEditValue(file.name);
                      }}
                      className="ml-1 text-gray-500 hover:text-white"
                      aria-label="Rename file"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                  </>
                )}
                {files.length > 1 && idx !== 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(idx);
                    }}
                    className="ml-1 text-gray-500 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            );
          })}
          <button
            onClick={() => addFile()}
            className="p-1 rounded bg-[#1e1e2e] ring-1 ring-white/5 text-gray-400 hover:text-white"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Editor  */}
        <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
          {clerk.loaded && (
            <Editor
              height="600px"
              language={LANGUAGE_CONFIG[language].monacoLanguage}
              onChange={handleEditorChange}
              theme={theme}
              beforeMount={defineMonacoThemes}
              onMount={(editor) => setEditor(editor)}
              options={{
                minimap: { enabled: false },
                fontSize,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderWhitespace: "selection",
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
                cursorBlinking: "smooth",
                smoothScrolling: true,
                contextmenu: true,
                renderLineHighlight: "all",
                lineHeight: 1.6,
                letterSpacing: 0.5,
                roundedSelection: true,
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8,
                },
              }}
            />
          )}

          {!clerk.loaded && <EditorPanelSkeleton />}
        </div>
      </div>
      {isShareDialogOpen && <ShareSnippetDialog onClose={() => setIsShareDialogOpen(false)} />}
    </div>
  );
}
export default EditorPanel;