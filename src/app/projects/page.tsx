"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import NavigationHeader from "@/components/NavigationHeader";

function ProjectsPage() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />
      <main className="max-w-5xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-semibold text-white mb-4">Your Projects</h1>
        <div className="space-y-2">
          {projects?.map((p) => (
            <div
              key={p._id}
              className="p-4 rounded-lg bg-[#1e1e2e] text-gray-300 flex justify-between"
            >
              <span>{p.name}</span>
              <span className="text-sm text-gray-500">{p.language}</span>
            </div>
          ))}
          {projects?.length === 0 && <p className="text-gray-400">No projects yet.</p>}
        </div>
      </main>
    </div>
  );
}
export default ProjectsPage;
