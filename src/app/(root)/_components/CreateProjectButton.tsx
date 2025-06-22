"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

function CreateProjectButton() {
  const router = useRouter();
  return (
    <motion.button
      onClick={() => router.push("/projects/new")}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center gap-2.5 px-5 py-2.5"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center gap-2.5">
        <PlusCircle className="w-4 h-4 text-white/90" />
        <span className="text-sm font-medium text-white/90 group-hover:text-white">New Project</span>
      </div>
    </motion.button>
  );
}

export default CreateProjectButton;
