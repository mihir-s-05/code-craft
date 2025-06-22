"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import NavigationHeader from "@/components/NavigationHeader";
import Link from "next/link";

export default function ProjectsPage() {
  const { user } = useUser();
  const projects = useQuery(api.projects.getUserProjects, { userId: user?.id ?? "" });

  if (projects === undefined) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl text-white mb-4">Your Projects</h1>
        <div className="space-y-3">
          {projects.map((p) => (
            <Link
              key={p._id}
              href="#"
              className="block px-4 py-2 rounded-lg bg-[#1e1e2e] text-gray-300"
            >
              {p.title}
            </Link>
          ))}
          {projects.length === 0 && (
            <p className="text-gray-400">No projects yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
