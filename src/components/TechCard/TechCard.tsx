import { techStack } from "@/constants/techStack";
import React from "react";
import { motion } from "framer-motion";

const TechCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techStack.map((category: any, i: number) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{category.description}</p>
              
              <div className="flex flex-col gap-4">
                {category.children.map((tech: any) => (
                  <motion.div 
                    key={tech.id}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-colors"
                  >
                    <div className="text-primary">{tech.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{tech.name}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{tech.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
