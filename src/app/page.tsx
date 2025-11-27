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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const target = new Date('Dec 5, 2025 23:59:59').getTime();
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

      {/* Navbar - Cleaner, smaller, no borders */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#1a0a2e]/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
          }`}
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex items-center justify-between h-14 lg:h-16"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
          >

            {/* LEFT: LOGO - Strictly constrained size */}
            <div
              className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 relative"
              style={{ width: '48px', height: '48px', position: 'relative' }}
            >
              <a href="#" className="block group w-full h-full">
                <img
                  src="/images/logo.png"
                  alt="CRUD OPS Logo"
                  className="w-full h-full object-contain rounded-full border border-[#FF00FF]/30 group-hover:border-[#FF00FF]/70 transition-all duration-300"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </a>
            </div>

            {/* CENTER: NAV LINKS */}
            <div className="flex-1 flex justify-center">
              <ul
                className="flex items-center gap-8 lg:gap-12 list-none"
                style={{ display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}
              >
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    <a
                      href={link.href}
                      className="font-pixel text-xs lg:text-sm tracking-widest transition-colors duration-300 
                                 hover:!text-[#FF00FF] py-2"
                      style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', padding: '8px 16px' }}
                    >
                      {link.name.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: POWERED BY */}
            <div className="hidden lg:block flex-shrink-0 font-pixel text-[10px] text-cyan-300/70 tracking-[0.2em]">
              POWERED BY <span className="text-[#FF00FF]">BIAS</span>
            </div>
          </div>
        </div>
        <section className="mt-24 min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        </section>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">

          <div className="absolute inset-0 bg-gradient-to-b from-[#060b3b] via-[#040942] to-[#02031d] opacity-90" />

          <h1 className="font-pixel text-5xl md:text-7xl text-3d-pink drop-shadow-[0_0_15px_#FF00FF99]">
            CRUD OPS
          </h1>
          <p className="font-pixel text-base md:text-xl tracking-wide text-[#e0b0ff] drop-shadow-[0_0_8px_rgba(224,176,255,0.6)]">
            Time’s Running Out. Code’s Heating Up
          </p>
          <img
            src="https://em-content.zobj.net/thumbs/240/facebook/355/alien-monster_1f47e.png"
            alt="Buggy Monster"
            className="w-40 md:w-60 animate-float drop-shadow-[0_0_35px_rgba(255,0,255,0.6)]"
          />

          <p className="max-w-2xl text-blue-100/90 text-sm md:text-base leading-relaxed drop-shadow-md">
            Join the ultimate 48-hour coding marathon where creativity meets chaos. Build, break, and
            redefine the future. Compete for epic prizes, meet like-minded innovators, and push the
            limits of what’s possible.
          </p>

          {/* Countdown */}
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
                    <span className="mt-4 font-pixel text-xs md:text-sm text-cyan-300/80 tracking-[0.25em]">
                      {unit.toUpperCase()}
                    </span>
                  </div>

                  {/* Separator */}
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
      <section id="schedule" className="py-28 bg-[#050930]/60 relative overflow-hidden section-visible">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <div className="terminal-header inline-flex items-center justify-center mb-6">
              <h2 className="font-pixel text-2xl md:text-3xl text-white tracking-wider drop-shadow-[0_0_8px_#FF00FF] animate-pulse">cd SCHEDULE</h2>
              <span className="cursor ml-2 text-cyan-300 animate-pulse"></span>
            </div>
            <p className="mt-6 max-w-xl text-center text-xs md:text-sm text-gray-400 leading-relaxed">Key milestones on the road to excellence. Track your progress and prepare your innovation.</p>
          </div>

          {/* Responsive timeline */}
          <div className="relative mt-10">
            {/* Vertical line for larger screens */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF00FF] via-[#00FFFF] to-transparent opacity-40 transform -translate-x-1/2" />

            <ul className="space-y-12 md:space-y-24 relative">
              {[
                { date: 'Apr 15', label: 'Registration Opens', accent: '#FF00FF', icon: '🚀' },
                { date: 'Aug 1', label: 'Registration Closes', accent: '#00FFFF', icon: '🔒' },
                { date: 'Aug 12', label: 'Opening Ceremony', accent: '#FFDD00', icon: '🎉' },
                { date: 'Aug 14', label: 'Hackathon Begins', accent: '#FF6EC7', icon: '💻' },
                { date: 'Aug 15', label: 'Winners Announced', accent: '#7CFFEA', icon: '🏆' },
              ].map((item, idx) => (
                <li
                  key={item.date}
                  className={`group relative flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Content Side */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div
                      className={`relative bg-[#0a0f3d]/70 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-6 flex flex-col gap-3 hover:border-[#00FFFF]/50 hover:shadow-[0_0_18px_#00FFFF55] transition-all duration-300 ${idx % 2 === 0 ? 'items-start' : 'md:items-end items-start'
                        }`}
                    >
                      <h3 className="font-pixel text-xs md:text-sm tracking-widest text-white drop-shadow-[0_0_6px_#FFFFFF55]">
                        {item.date}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed tracking-wide">{item.label}</p>
                      {/* Accent bar */}
                      <div
                        className="h-[3px] w-16 md:w-20 rounded-full mt-1"
                        style={{
                          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                          alignSelf: idx % 2 === 0 ? 'flex-start' : 'flex-end'
                        }}
                      />
                      {/* Mobile-only accent bar adjustment */}
                      <div className="md:hidden h-[3px] w-16 rounded-full mt-1 absolute bottom-6 left-6" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />
                    </div>
                  </div>

                  {/* Center Point / Connector */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 z-20">
                    <div
                      className="schedule-ring w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#030626] border-2 border-white/20 group-hover:border-[var(--accent)] transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      style={{ '--accent': item.accent, borderColor: item.accent } as React.CSSProperties}
                    >
                      <span className="text-lg md:text-2xl select-none filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" aria-hidden="true">{item.icon}</span>
                    </div>
                  </div>

                  {/* Empty space for the other side (desktop only) */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />

                  {/* Connector Line (Horizontal) for Desktop */}
                  <div
                    className={`hidden md:block absolute top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50 w-[40px] ${idx % 2 === 0 ? 'right-1/2 translate-x-[20px]' : 'left-1/2 -translate-x-[60px]'
                      }`}
                    style={{ '--accent': item.accent } as React.CSSProperties}
                  />

                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PRIZES ===== */}
      <section
        id="prizes"
        className="py-32 relative overflow-hidden"
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
              <h2 className="font-pixel text-2xl md:text-3xl text-white tracking-wider drop-shadow-[0_0_8px_#FF00FF] animate-pulse">cd PRIZES</h2>
              <span className="cursor ml-2 text-cyan-300 animate-pulse"></span>
            </div>
            <p className="text-sm md:text-base text-gray-300/80 max-w-2xl leading-relaxed font-light tracking-wide">
              Exceptional rewards for exceptional innovation
            </p>
          </div>

          {/* Prize tiers */}
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
                CRUD OPS
              </h3>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Where innovation thrives and code comes alive.
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
              © 2025 CRUD OPS. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Made with <span className="text-[#FF00FF]">❤️</span> & <span className="text-cyan-400">innovation</span> at <span className="font-pixel text-[#FF00FF]">BIAS</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}