"use client";

import NavigationHeader from "@/components/NavigationHeader";
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

function NewProjectPage() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [files, setFiles] = useState([{ name: `main.${language}`, content: "" }]);
  const [active, setActive] = useState(0);
  const createProject = useMutation(api.projects.createProject);
  const router = useRouter();

  useEffect(() => {
    setFiles([{ name: `main.${language}`, content: "" }]);
    setActive(0);
  }, [language]);

  const addFile = () => {
    const idx = files.length + 1;
    setFiles([...files, { name: `file${idx}.${language}`, content: "" }]);
    setActive(files.length);
  };

  const updateFile = (value?: string) => {
    setFiles(files.map((f, i) => (i === active ? { ...f, content: value || "" } : f)));
  };

  const save = async () => {
    if (!name) return;
    await createProject({ name, language, files });
    router.push("/projects");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />
      <main className="max-w-5xl mx-auto p-4 space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
          className="w-full bg-[#1e1e2e] text-white p-2 rounded"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1e1e2e] text-white p-2 rounded"
        >
          {Object.keys(LANGUAGE_CONFIG).map((lang) => (
            <option key={lang} value={lang}>
              {LANGUAGE_CONFIG[lang].label}
            </option>
          ))}
        </select>
        <div className="flex gap-2 flex-wrap">
          {files.map((file, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-3 py-1 rounded text-sm ${
                i === active ? "bg-blue-600 text-white" : "bg-[#1e1e2e] text-gray-300"
              }`}
            >
              {file.name}
            </button>
          ))}
          <button onClick={addFile} className="px-3 py-1 rounded bg-[#1e1e2e] text-gray-300">
            +
          </button>
        </div>
        <Editor
          key={files[active].name}
          path={files[active].name}
          language={LANGUAGE_CONFIG[language].monacoLanguage}
          value={files[active].content}
          onChange={updateFile}
          theme="vs-dark"
          beforeMount={defineMonacoThemes}
          options={{ minimap: { enabled: false }, automaticLayout: true, fontSize: 16 }}
        />
        <button onClick={save} className="px-5 py-2 bg-blue-600 rounded text-white">
          Save Project
        </button>
      </main>
    </div>
  );
}
export default NewProjectPage;
