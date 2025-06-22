"use client";
import { useEffect, useState } from "react";
import NavigationHeader from "@/components/NavigationHeader";
import { Editor } from "@monaco-editor/react";
import { useProjectStore } from "@/store/useProjectStore";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const { user } = useUser();
  const router = useRouter();
  const convexUser = useQuery(api.users.getUser, { userId: user?.id ?? "" });
  const createProject = useMutation(api.projects.createProject);
  const {
    files,
    activeFileIndex,
    addFile,
    setActiveFile,
    updateActiveFile,
    setEditor,
    language,
    setLanguage,
  } = useProjectStore();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (convexUser && !convexUser.isPro) {
      router.replace("/pricing");
    }
  }, [convexUser, router]);

  if (convexUser === undefined) return null;

  const handleSave = async () => {
    await createProject({ title, language, files });
    router.push("/projects");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <div className="flex flex-col gap-2">
          <input
            className="bg-[#1e1e2e] text-white px-3 py-2 rounded-lg border border-gray-800"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-gray-400 text-sm">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#1e1e2e] text-white px-2 py-1 rounded border border-gray-800"
          >
            {Object.keys(LANGUAGE_CONFIG).map((lang) => (
              <option key={lang} value={lang}>
                {LANGUAGE_CONFIG[lang].label}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-[#12121a]/90 border border-[#1f1f2a] rounded-xl">
          <div className="flex items-center gap-2 p-2 border-b border-[#1f1f2a]">
            {files.map((file, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFile(idx)}
                className={`px-3 py-1.5 rounded text-sm ${activeFileIndex === idx ? "bg-blue-500/20 text-blue-300" : "text-gray-400 hover:text-gray-300"}`}
              >
                {file.name}
              </button>
            ))}
            <button
              onClick={() => addFile(`file${files.length + 1}.txt`)}
              className="px-3 py-1.5 rounded text-sm text-gray-400 hover:text-gray-300"
            >
              + Add File
            </button>
          </div>
          <Editor
            height="600px"
            language={LANGUAGE_CONFIG[language].monacoLanguage}
            theme="vs-dark"
            beforeMount={defineMonacoThemes}
            onMount={(editor) => setEditor(editor)}
            onChange={(val) => val && updateActiveFile(val)}
          />
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Save Project
        </button>
      </div>
    </div>
  );
}
