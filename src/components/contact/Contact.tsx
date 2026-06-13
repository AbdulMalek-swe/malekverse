import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar,   Code, Server, Database } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState("");

  const handleNext = (selectedIntent: string) => {
    setIntent(selectedIntent);
    setStep(2);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-4"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-center space-y-4 mb-12 max-w-2xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white"
          variants={itemVariants}
        >
          Ready to scale your architecture?
        </motion.h2>
        <motion.p className="text-xl text-slate-400" variants={itemVariants}>
          Let&apos;s discuss how we can engineer a robust solution for your next enterprise application.
        </motion.p>
      </div>

      <motion.div 
        className="w-full max-w-xl bg-slate-800/50 border border-slate-700/80 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">What are you looking to build?</h3>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => handleNext("SaaS Architecture")}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-primary transition-colors text-left group"
                >
                  <Code className="text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-white">SaaS Architecture</div>
                    <div className="text-sm text-slate-400">Full-stack monorepo setups</div>
                  </div>
                </button>
                <button 
                  onClick={() => handleNext("API Integration")}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-primary transition-colors text-left group"
                >
                  <Database className="text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-white">Complex API Integrations</div>
                    <div className="text-sm text-slate-400">Stripe, Meta Graph, Snowflake</div>
                  </div>
                </button>
                <button 
                  onClick={() => handleNext("Infrastructure Scaling")}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-primary transition-colors text-left group"
                >
                  <Server className="text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-white">Infrastructure Scaling</div>
                    <div className="text-sm text-slate-400">Cloud deployments & DevOps</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col h-full justify-center space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Request a Technical Consult</h3>
              <p className="text-slate-400">
                You selected: <span className="text-primary font-semibold">{intent}</span>. Let&apos;s get on a brief call to align on your technical requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="mailto:abdulmalek.swe.585@gmail.com" 
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <Mail size={20} /> Email Me
                </a>
                <button 
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Calendar size={20} /> Book Discovery Call
                </button>
              </div>

              <button 
                onClick={() => setStep(1)}
                className="text-slate-500 hover:text-slate-300 text-sm mt-4 text-center mx-auto inline-block"
              >
                ← Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
