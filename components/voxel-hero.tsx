"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

type VoxelHeroProps = {
  name: string;
  role: string;
};

export function VoxelHero({ name, role }: VoxelHeroProps) {
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 720], [1, 1.08]);
  const imageY = useTransform(scrollY, [0, 720], [0, 52]);
  const imageOpacity = useTransform(scrollY, [0, 490, 830], [1, 0.86, 0]);
  const contentY = useTransform(scrollY, [0, 680], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 420, 700], [1, 0.92, 0]);
  const lineScale = useTransform(scrollY, [0, 680], [1, 0.4]);

  return (
    <section className="voxel-hero relative h-[136svh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ opacity: imageOpacity }}>
          <motion.div className="absolute -inset-[5%]" style={{ scale: imageScale, y: imageY }}>
            <Image
              src="/voxel-mountains-sunset.png"
              alt="Voxel mountains at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="voxel-hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(9,13,30,.12)_58%,rgba(4,7,16,.48)_100%)]" />
        </motion.div>

        <motion.div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-10 pt-32 md:px-10 md:pb-12" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="mb-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-[.12em] text-white/75">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#ffd19c] shadow-[0_0_16px_#ffd19c]" /> Available for opportunities</span>
            <span className="hidden sm:block">Portfolio / 2026</span>
          </div>

          <div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/78 md:mb-7 md:text-base">{role}. Making useful things feel more alive.</p>
            <h1 className="max-w-[1200px] text-[18vw] font-medium leading-[.73] tracking-[-.105em] text-[#fff8ed] sm:text-[15vw] md:text-[10.8vw]">
              {name.split(" ").map((part) => <span key={part} className="block">{part}</span>)}
            </h1>
          </div>

          <motion.div className="mt-10 origin-left border-t border-white/35 pt-4 md:mt-14 md:flex md:items-center md:justify-between" style={{ scaleX: lineScale }}>
            <p className="max-w-md text-sm leading-relaxed text-white/68">Products, experiments, and ideas—built with curiosity and care.</p>
            <a href="#work" className="group mt-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.1em] text-white md:mt-0">
              <span className="grid size-10 place-items-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#ffd19c] group-hover:bg-[#ffd19c] group-hover:text-[#10182a]"><ArrowDownRight size={16} /></span>
              Follow the trail
            </a>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[11px] uppercase tracking-[.12em] text-white/70 md:flex">
          <span className="h-8 w-px bg-white/35" /> Scroll to explore
        </div>
      </div>
    </section>
  );
}
