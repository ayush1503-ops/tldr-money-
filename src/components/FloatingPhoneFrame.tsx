import { motion } from 'framer-motion';

interface FloatingPhoneFrameProps {
  imageSrc: string;
  alt: string;
  tagText?: string;
  badgeText?: string;
  dynamicIslandText?: string;
  animationDuration?: number;
  className?: string;
  width?: number | string;
}

export default function FloatingPhoneFrame({
  imageSrc,
  alt,
  tagText = 'Live Screen UI',
  badgeText = '90-Day Backfill',
  dynamicIslandText = 'Live On-Device Parser',
  animationDuration = 7,
  className = '',
  width = 340,
}: FloatingPhoneFrameProps) {
  return (
    <div className={`relative flex justify-center py-6 select-none ${className}`}>
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-tr from-[rgba(13,92,191,0.2)] to-[rgba(227,82,52,0.18)] rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Floating iPhone Chassis */}
      <motion.div
        animate={{ y: [0, -13, 0], rotate: [0, 0.4, 0] }}
        transition={{ duration: animationDuration, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        className="relative rounded-[52px] bg-stone-900 p-2.5 shadow-[var(--shadow-phone-float)] ring-1 ring-white/20"
      >
        {/* Titanium Rim */}
        <div className="absolute inset-0 rounded-[52px] border-2 border-stone-700/60 pointer-events-none" />

        {/* Display Canvas */}
        <div className="w-full h-full rounded-[44px] bg-[var(--color-bg-base)] overflow-hidden flex flex-col relative text-[var(--color-fg-primary)] font-sans">
          
          {/* iOS Status Bar */}
          <div className="pt-3 px-6 flex justify-between items-center z-30 shrink-0">
            <span className="text-xs font-bold font-sans">9:41</span>
            
            {/* Dynamic Island */}
            <div className="bg-black rounded-full px-3 py-1 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{dynamicIslandText}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] font-bold">5G</span>
              <div className="w-5 h-2.5 rounded-sm border border-stone-800 p-0.5 flex items-center">
                <div className="w-full h-full bg-stone-800 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Screenshot Display Area */}
          <div className="flex-1 overflow-hidden p-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-neo-inset-sm)] border border-stone-300/40 relative h-full">
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating Tag Badges */}
              <div className="absolute bottom-3 left-3 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-[var(--shadow-neo-sm)] border border-white/40 text-[var(--color-fg-primary)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{tagText}</span>
              </div>

              {badgeText && (
                <div className="absolute top-3 right-3 bg-[var(--color-bg-base)]/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-extrabold shadow-[var(--shadow-neo-sm)] border border-white/40 text-[var(--color-accent)]">
                  {badgeText}
                </div>
              )}
            </div>
          </div>

          {/* iOS Bottom Home Bar */}
          <div className="pb-1.5 pt-0.5 flex justify-center bg-[var(--color-bg-base)]">
            <div className="w-24 h-1 rounded-full bg-stone-700/60" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
