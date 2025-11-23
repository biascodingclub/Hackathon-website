'use client';
import { useEffect, useState } from 'react';
import StarField from '@/components/StarField';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [particles, setParticles] = useState<Array<{
    size: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const target = new Date('Dec 31, 2025 23:59:59').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return clearInterval(timer);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8,
      }))
    );
  }, []);

  const navLinks = [
    { name: 'Schedule', href: '#schedule' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Info', href: '#info' },
  ];

  return (
    <main className="min-h-screen bg-[#030626] text-white overflow-hidden relative font-sans">
      <StarField />

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030739]/90 backdrop-blur-md border-b border-[#FF00FF]/40 shadow-[0_0_15px_#FF00FF33]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
    
    {/* LEFT: LOGO */}
    <h1 className="font-pixel text-2xl sm:text-3xl text-white tracking-[0.25em] drop-shadow-[0_0_6px_#FF00FF,0_0_10px_#00FFFF] select-none">
      404 SUCCESS
    </h1>

    {/* CENTER: NAV LINKS */}
    <ul className="hidden md:flex items-center gap-10 lg:gap-14">
      {[
        { name: 'Schedule', href: '#schedule' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Info', href: '#info' },
      ].map((link) => (
        <li key={link.name} className="relative group">
          <a
            href={link.href}
            className="font-pixel text-sm text-white tracking-widest transition-all duration-300 
                       hover:text-[#FF00FF] hover:drop-shadow-[0_0_10px_#FF00FF]"
          >
            {link.name.toUpperCase()}
          </a>
          {/* Animated underline */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full 
                         transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_12px_#FF00FF]" />
        </li>
      ))}
    </ul>

    {/* RIGHT: POWERED BY */}
    <div className="font-pixel text-xs sm:text-sm text-cyan-300 tracking-[0.2em]">
      POWERED BY <span className="text-[#FF00FF]">BIAS</span>
    </div>
  </div>

  {/* Subtle Neon Line Under Navbar */}
  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] opacity-70 shadow-[0_0_15px_#FF00FF55]" />
</nav>

      {/* ===== HERO SECTION ===== */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b3b] via-[#040942] to-[#02031d] opacity-90" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-10">
          <h1 className="font-pixel text-6xl md:text-8xl text-3d-pink drop-shadow-[0_0_15px_#FF00FF99]">
            404 SUCCESS
          </h1>
          <p className="text-shaded-purple font-pixel text-lg md:text-2xl tracking-wide">
            Time’s Running Out. Code’s Heating Up
          </p>
          <img
            src="https://em-content.zobj.net/thumbs/240/facebook/355/alien-monster_1f47e.png"
            alt="Buggy Monster"
            className="w-52 md:w-80 animate-float drop-shadow-[0_0_25px_#FF00FF80]"
          />

          <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed fade-out-text">
            Join the ultimate 48-hour coding marathon where creativity meets chaos. Build, break, and
            redefine the future. Compete for epic prizes, meet like-minded innovators, and push the
            limits of what’s possible.
          </p>

{/* Countdown (perfect alignment, polished spacing) */}
<div
  className="mt-14 grid items-end justify-center gap-x-10 md:gap-x-14 text-center"
  style={{ gridTemplateColumns: 'auto auto auto auto auto auto auto', gridTemplateRows: 'auto auto' }}
>
  {Object.entries(timeLeft).map(([unit, value], i, arr) => {
    const colStart = i * 2 + 1;       // columns for digits
    const sepColStart = i * 2 + 2;    // columns for colons
    return (
      <div key={unit} className="contents">
        {/* Number (row 1) */}
        <div
          style={{ gridColumnStart: colStart, gridRowStart: 1 }}
          className="min-w-[95px] md:min-w-[130px] flex justify-center"
        >
          <span
            className="font-pixel text-5xl md:text-7xl text-white"
            style={{
              textShadow: `
                0 0 6px #fff,
                0 0 12px #FF00FF,
                0 0 22px #00FFFF,
                0 0 35px #FF00FF
              `,
            }}
          >
            {value}
          </span>
        </div>

        {/* Label (row 2) */}
        <div
          style={{ gridColumnStart: colStart, gridRowStart: 2 }}
          className="flex justify-center"
        >
          <span className="mt-3 font-pixel text-[10px] md:text-sm text-gray-400 tracking-[0.25em]">
            {unit.toUpperCase()}
          </span>
        </div>

        {/* Separator (slightly lower “:” for visual balance) */}
        {i < arr.length - 1 && (
          <div
            style={{
              gridColumnStart: sepColStart,
              gridRowStart: 1,
              transform: 'translateY(14%)',
            }}
            className="self-start"
          >
            <span className="font-pixel text-5xl md:text-6xl text-cyan-400 animate-softPulse select-none">
              :
            </span>
          </div>
        )}
      </div>
    );
  })}
</div>
          <a href="#schedule" className="mt-10 down-arrow">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21Z"
                stroke="#00FFFF"
                strokeWidth="1.5"
              />
              <path
                d="M8 12L12 16L16 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <section id="schedule" className="py-28 bg-[#050930]/60 scroll-mt-20 relative overflow-hidden section-visible">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <div className="terminal-header inline-flex items-center justify-center">
              <h2 className="font-pixel text-2xl md:text-3xl text-white tracking-wider drop-shadow-[0_0_8px_#FF00FF]">cd SCHEDULE</h2>
              <span className="cursor ml-2 text-cyan-300 animate-pulse"></span>
            </div>
            <p className="mt-6 max-w-xl text-center text-xs md:text-sm text-gray-400 leading-relaxed">Key milestones on the road to shipping brilliance. Track the flow and prepare your stack.</p>
          </div>

          {/* Responsive timeline / stacked for mobile, side timeline for larger screens */}
          <div className="relative">
            {/* Vertical line for larger screens */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF00FF] via-[#00FFFF] to-transparent opacity-40" />
            <ul className="space-y-14 md:space-y-0 md:grid md:grid-cols-5 md:gap-12 xl:gap-16">
              {[
                { date: 'Apr 15', label: 'Registration Opens', accent: '#FF00FF', icon: '🚀' },
                { date: 'Aug 1', label: 'Registration Closes', accent: '#00FFFF', icon: '🔒' },
                { date: 'Aug 12', label: 'Opening Ceremony', accent: '#FFDD00', icon: '🎉' },
                { date: 'Aug 14', label: 'Hackathon Begins', accent: '#FF6EC7', icon: '💻' },
                { date: 'Aug 15', label: 'Winners Announced', accent: '#7CFFEA', icon: '🏆' },
              ].map((item, idx) => (
                <li
                  key={item.date}
                  className="group relative md:flex md:flex-col md:items-center md:text-center"
                >
                  {/* Connector node redesigned */}
                  <div className="md:mb-6 md:order-1 relative flex items-center">
                    <div
                      className="schedule-ring"
                      style={{ '--accent': item.accent } as React.CSSProperties}
                    >
                      <div className="schedule-orbit" />
                      <span className="text-lg md:text-xl select-none" aria-hidden="true">{item.icon}</span>
                      {/* <span className="sr-only">{item.label} step icon</span> */}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="relative w-full md:w-auto bg-[#0a0f3d]/70 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-6 md:py-4 flex flex-col gap-3 hover:border-[#00FFFF]/50 hover:shadow-[0_0_18px_#00FFFF55] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between md:justify-center">
                      <h3 className="font-pixel text-[11px] md:text-xs tracking-widest text-white drop-shadow-[0_0_6px_#FFFFFF55]">
                        {item.date}
                      </h3>
                      {/* <span className="md:hidden text-[10px] font-pixel text-[#FF00FF] tracking-[0.25em]">STEP {idx + 1}</span> */}
                    </div>
                    <p className="text-xs md:text-[11px] text-gray-300 leading-relaxed tracking-wide">{item.label}</p>
                    {/* Accent bar */}
                    <div className="h-[3px] w-16 md:w-20 rounded-full mt-1" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />
                  </div>

                  {/* Decorative connector (horizontal for desktop) */}
                  {idx < 4 && (
                    <span className="hidden md:block absolute top-[28px] left-full w-full h-px bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-transparent opacity-25" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* ===== PRIZES ===== */}
      <section
        id="prizes"
        className="py-32 scroll-mt-20 relative overflow-hidden"
        aria-labelledby="prize-pool-heading"
      >
        {/* Elegant layered backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050825]/95 via-[#040620]/90 to-[#030515]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_50%)]" />
        </div>  
        
        {/* Subtle floating particles */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `elegantFloat ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-24 text-center">
            <div className="terminal-header inline-flex items-center justify-center mb-6">
              <h2 className="font-pixel text-2xl md:text-3xl text-white tracking-wider drop-shadow-[0_0_8px_#FF00FF]">cd PRIZES</h2>
              <span className="cursor ml-2 text-cyan-300 animate-pulse"></span>
            </div>
            <p className="text-sm md:text-base text-gray-300/80 max-w-2xl leading-relaxed font-light tracking-wide">
              Exceptional rewards for exceptional innovation
            </p>
          </div>

          {/* Prize tiers - elegant cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {[
              { 
                rank: '1st', 
                title: 'Grand Prize', 
                amount: '$2,500', 
                icon: '👑',
                gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
                border: 'border-violet-500/30',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]',
                accentColor: '#8B5CF6'
              },
              { 
                rank: '2nd', 
                title: 'Runner Up', 
                amount: '$1,500', 
                icon: '⭐',
                gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
                border: 'border-blue-500/30',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]',
                accentColor: '#3B82F6'
              },
              { 
                rank: '3rd', 
                title: 'Third Place', 
                amount: '$1,000', 
                icon: '🎯',
                gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-400/20',
                border: 'border-cyan-500/30',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]',
                accentColor: '#06B6D4'
              },
            ].map((prize, idx) => (
              <article
                key={prize.rank}
                className={`elegant-prize-card group relative backdrop-blur-xl rounded-3xl border ${prize.border} bg-gradient-to-br ${prize.gradient} transition-all duration-700 ${prize.glow}`}
                style={{
                  animationDelay: `${idx * 150}ms`
                }}
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                  {/* Rank badge */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 blur-2xl opacity-50" style={{ background: prize.accentColor }} />
                    <div 
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-white/10"
                      style={{
                        background: `linear-gradient(135deg, ${prize.accentColor}15, ${prize.accentColor}05)`
                      }}
                    >
                      <span className="text-4xl md:text-5xl filter drop-shadow-lg">{prize.icon}</span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-4">
                    <h3 className="font-pixel text-4xl md:text-5xl text-white mb-2" style={{ textShadow: `0 0 30px ${prize.accentColor}80` }}>
                      {prize.amount}
                    </h3>
                    <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </div>

                  {/* Title */}
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-300/90 font-light mb-3">
                    {prize.title}
                  </p>
                  
                  {/* Rank */}
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-wider"
                    style={{
                      borderColor: `${prize.accentColor}40`,
                      background: `${prize.accentColor}10`,
                      color: prize.accentColor
                    }}
                  >
                    {prize.rank} PLACE
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden">
                  <div 
                    className="h-full w-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `linear-gradient(90deg, transparent, ${prize.accentColor}, transparent)` }}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Additional recognition */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-lg md:text-xl text-gray-200 mb-8 font-light tracking-wide">
              Special Recognition Awards
            </h3>
          </div>
        </div>
      </section>





      {/* ===== FOOTER ===== */}
      <footer className="bg-[#020531] py-16 md:py-20 border-t border-[#FF00FF]/40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top section - Brand + Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-pixel text-2xl md:text-3xl text-white tracking-[0.25em] drop-shadow-[0_0_8px_#FF00FF] mb-3">
                404 SUCCESS
              </h3>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Where bugs are friends and caffeine is fuel.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-6">
              {['🌐', '📸', '🐦'].map((icon, i) => (
                <span
                  key={i}
                  className="w-14 h-14 flex items-center justify-center text-2xl rounded-xl bg-white/5 border border-white/10 hover:scale-110 hover:border-[#FF00FF]/50 hover:drop-shadow-[0_0_15px_#00FFFF] transition-all duration-300 cursor-pointer"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF00FF]/30 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2025 404 Success. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Made with <span className="text-[#FF00FF]">❤️</span> & <span className="text-cyan-400">caffeine</span> at <span className="font-pixel text-[#FF00FF]">BIAS</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
