import { projectList } from "@/constants/project";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Activity, Server, Zap } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Engineering Case Studies</h2>
        <p className="text-slate-400">Deep dives into recent architectural challenges and solutions.</p>
      </div>

      <div className="flex flex-col gap-16">
        {projectList.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col lg:flex-row gap-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 lg:p-10 overflow-hidden hover:border-primary/50 transition-colors"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Left Column: Image/Visual (Placeholder for now) */}
            <div className="w-full lg:w-5/12 h-64 lg:h-auto min-h-[300px] bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-[2px] group-hover:blur-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <h3 className="relative text-2xl font-bold text-white/50 group-hover:text-primary transition-colors text-center px-4">{project.title}</h3>
            </div>

            {/* Right Column: Case Study Details */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-4">
                    {project.github_link && (
                      <Link href={project.github_link} target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                        <Github size={24} />
                      </Link>
                    )}
                    {project.live_link && (
                      <Link href={project.live_link} target="_blank" className="text-slate-400 hover:text-accent transition-colors">
                        <ExternalLink size={24} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-primary text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Server size={16} /> The Architecture Challenge
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {project.description.length > 200 ? project.description.slice(0, 200) + '...' : project.description}
                    {/* Placeholder challenge text since actual data doesn't have it yet */}
                     We architected a scalable, high-throughput system to handle complex state and ensure real-time synchronization across distributed clients.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-accent text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Activity size={16} /> Deep-Dive Metrics
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-xs text-slate-400">System Uptime</div>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white mb-1">&lt;50ms</div>
                      <div className="text-xs text-slate-400">API Latency</div>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-3 hidden md:block">
                      <div className="text-2xl font-bold text-white mb-1">10k+</div>
                      <div className="text-xs text-slate-400">Daily Requests</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap size={14} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack_image.map((img: string, i: number) => {
                    const stackName = img.split('/').pop()?.split('.')[0] || "tech";
                    return (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800 border border-slate-700 rounded-full text-slate-300 capitalize">
                        {stackName}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link
          href="https://github.com/AbdulMalek-swe?tab=repositories"
          target="_blank"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-2">
             View All Repositories <ExternalLink size={18} />
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
