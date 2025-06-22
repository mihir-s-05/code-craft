import { create } from "zustand";
import { Monaco } from "@monaco-editor/react";
import { ProjectFile } from "@/types";

interface ProjectEditorState {
  language: string;
  files: ProjectFile[];
  activeFileIndex: number;
  editor: Monaco | null;
  setEditor: (editor: Monaco) => void;
  setLanguage: (lang: string) => void;
  addFile: (name: string) => void;
  setActiveFile: (index: number) => void;
  updateActiveFile: (content: string) => void;
  getFiles: () => ProjectFile[];
}

const getInitialFiles = (): ProjectFile[] => {
  if (typeof window === "undefined") return [{ name: "main", content: "" }];
  const stored = localStorage.getItem("project-files");
  if (stored) return JSON.parse(stored);
  return [{ name: "main", content: "" }];
};

export const useProjectStore = create<ProjectEditorState>((set, get) => ({
  language: "javascript",
  files: getInitialFiles(),
  activeFileIndex: 0,
  editor: null,
  setEditor: (editor: Monaco) => {
    const files = get().files;
    editor.setValue(files[get().activeFileIndex]?.content || "");
    set({ editor });
  },
  setLanguage: (lang: string) => set({ language: lang }),
  addFile: (name: string) => {
    const files = [...get().files, { name, content: "" }];
    set({ files, activeFileIndex: files.length - 1 });
    if (typeof window !== "undefined") {
      localStorage.setItem("project-files", JSON.stringify(files));
    }
  },
  setActiveFile: (index: number) => {
    const editor = get().editor;
    const files = get().files;
    if (editor) editor.setValue(files[index]?.content || "");
    set({ activeFileIndex: index });
  },
  updateActiveFile: (content: string) => {
    const files = [...get().files];
    files[get().activeFileIndex] = {
      ...files[get().activeFileIndex],
      content,
    };
    if (typeof window !== "undefined") {
      localStorage.setItem("project-files", JSON.stringify(files));
    }
    set({ files });
  },
  getFiles: () => get().files,
}));
