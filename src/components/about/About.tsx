import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BlurFadeEffectWrapper } from "../ui/BlurFadeEffectWrapper";
import { FlipWords } from "../ui/Flipwords";

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = `[INIT] Loading workspace...
[SUCCESS] Connected to Snowflake
[SUCCESS] Authenticated Meta Graph API
[RUN] Executing build pipeline...

> system.status: ONLINE
> system.role: FULL-STACK & INFRASTRUCTURE ENGINEER
> _`;

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(intervalId);
    }, 30);
    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
      <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-slate-400 font-mono">guest@malekverse:~</div>
      </div>
      <div className="p-4 font-mono text-sm md:text-base text-primary whitespace-pre-wrap min-h-[180px]">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full z-10"
      >
        <Terminal />
      </motion.div>

      <BlurFadeEffectWrapper delay={0.3}>
        <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Architecting Scalable Systems & <br /> High-Performance Infrastructure
        </h1>
      </BlurFadeEffectWrapper>

      <BlurFadeEffectWrapper delay={0.5}>
        <div className="text-center font-mono text-lg md:text-xl text-accent mb-2">
          <FlipWords
            words={[
              "Distributed Monorepos",
              "Data-Intensive APIs",
              "Cloud-Native Architectures",
              "Complex Integrations",
            ]}
          />
        </div>
      </BlurFadeEffectWrapper>

      <BlurFadeEffectWrapper delay={0.7}>
        <p className="text-center md:tracking-wider text-base md:text-lg text-slate-400 max-w-2xl">
          Specializing in building robust engines for data-driven platforms. I transform complex architectural challenges into elegant, high-throughput enterprise applications.
        </p>
      </BlurFadeEffectWrapper>

      <Light />
      <Light left={0} />
    </div>
  );
};

export default About;

const Light = ({ left = 1 }) => {
  return (
    <div
      className={`fixed ${
        left === 1
          ? "-top-12 left-0 -translate-x-1/2 -translate-y-1/2"
          : "-top-10 -right-20"
      } transform pointer-events-none z-0`}
    >
      <div
        className={`w-[500px] h-[500px] rounded-full blur-[120px] ${
          left === 1 ? "opacity-20 bg-primary" : "opacity-10 bg-accent"
        }`}
      ></div>
    </div>
  );
};
