'use client'
import { useState, useEffect } from 'react';
import StarField from '@/components/StarField';

// Helper function to parse dates and calculate the difference in days
const getDaysBetween = (dateStr1: string, dateStr2: string) => {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [scheduleIndex, setScheduleIndex] = useState(0); // State for schedule carousel
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // --- Countdown Timer Logic ---
  useEffect(() => {
    const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prizes = [
    { place: '1st RUNNER UP', amount: '$1500', order: 2, image: 'https://imgs.search.brave.com/B7UTLhT3plAlEVht3_2Ie5LM9JBSvAr1Goe0g7n8NNk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy90/aHVtYm5haWwvL3B1/cmVwbmcuY29tLWdv/bGQtY3VwLXRyb3Bo/eWdvbGRlbi1jdXBn/b2xkdHJvcGh5bWVk/YWxhd2FyZC0xNDIx/NTI2NTM0OTIzdHRr/d2sucG5n' },
      { place: 'WINNER', amount: '$2500', order: 1, image: 'https://imgs.search.brave.com/B7UTLhT3plAlEVht3_2Ie5LM9JBSvAr1Goe0g7n8NNk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy90/aHVtYm5haWwvL3B1/cmVwbmcuY29tLWdv/bGQtY3VwLXRyb3Bo/eWdvbGRlbi1jdXBn/b2xkdHJvcGh5bWVk/YWxhd2FyZC0xNDIx/NTI2NTM0OTIzdHRr/d2sucG5n' },
      { place: '2nd RUNNER UP', amount: '$1000', order: 3, image: 'https://imgs.search.brave.com/B7UTLhT3plAlEVht3_2Ie5LM9JBSvAr1Goe0g7n8NNk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy90/aHVtYm5haWwvL3B1/cmVwbmcuY29tLWdv/bGQtY3VwLXRyb3Bo/eWdvbGRlbi1jdXBn/b2xkdHJvcGh5bWVk/YWxhd2FyZC0xNDIx/NTI2NTM0OTIzdHRr/d2sucG5n' }
  ];

  const tracks = [

   
  ];

const scheduleItems = [
  { date: "Apr 15", time: "12:00 AM", event: "Registration\nBegins" },
  { date: "Aug 1", time: "12:00 AM", event: "Registration\nCloses" },
  { date: "Aug 12", time: "10:00 AM", event: "Opening\nCeremony" },
  { date: "Aug 14", time: "07:00 PM", event: "Closing\nCeremony" },
  { date: "Aug 15", time: "12:00 PM", event: "Winners\nAnnounced" }
];


  const faqItems = [
    {
      question: "What does team making look like?",
      answer: "You can form teams of up to 4 members. You can either come with a pre-formed team or find teammates during our team formation event at the start of the hackathon. We'll have dedicated channels for you to connect with others."
    },
    {
      question: "Who can participate?",
      answer: "Everyone is welcome! Students, professionals, designers, and developers from all backgrounds are encouraged to participate. You must be 18 years or older to join."
    },
    {
      question: "How do we participate in this hackathon?",
      answer: "Simply hit the 'JOIN US' button on this page and complete the registration form. Once registered, you'll receive all necessary information via email."
    },
    {
      question: "Are there prerequisites to participate?",
      answer: "No specific prerequisites! We only ask that you come with a passion for learning and building. All skill levels are welcome, from beginners to seasoned experts."
    },
    {
      question: "Is food and accommodation provided free of charge?",
      answer: "Yes, for all in-person participants, we will provide meals, snacks, and a designated resting area throughout the 48-hour event, completely free of charge."
    },
    {
      question: "Can travel costs be covered for selected participants?",
      answer: "We may offer travel reimbursements for a limited number of participants based on distance and need. Please check the official rules page after registration for details on how to apply."
    }
  ];

  return (
    <main className="min-h-screen bg-[#040942] text-white overflow-x-hidden">
      <StarField />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#040942]/90 backdrop-blur-md border-b-2 border-[#FF00FF]/30">
        <div className="w-full px-8 py-6">
          <div className="flex items-center justify-between">
            {/* LEFT - 404 ERROR */}
            <div className="flex-shrink-0 w-1/4">
              <h1 className="text-3xl font-bold text-white tracking-wider neon-text font-pixel">
                404 SUCCESS
              </h1>
            </div>

            {/* CENTER - Navigation Links */}
            <div className="flex flex-auto items-center justify-center gap-x-12">
              <a href="#schedule" className="text-white font-bold text-sm hover:text-pink-400 transition uppercase tracking-widest">
                SCHEDULE
              </a>
              <a href="#tracks" className="text-white font-bold text-sm hover:text-pink-400 transition uppercase tracking-widest">
                TRACKS
              </a>
              <a href="#prize" className="text-white font-bold text-sm hover:text-cyan-400 transition uppercase tracking-widest">
                PRIZE
              </a>
              <a href="#info" className="text-white font-bold text-sm hover:text-purple-400 transition uppercase tracking-widest">
                INFO
              </a>
            </div>

            {/* RIGHT - POWERED BY BIAS */}
            <div className="flex-shrink-0 w-1/4 flex justify-end">
              <span className="text-lg font-bold text-white tracking-wider neon-text">
                POWERED BY BIAS
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Restructured Layout */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-8">
        {/* Top Content */}
        <div className="relative z-10 text-center">
          <h1 className="font-pixel text-8xl mb-4 text-3d-pink">
            404 SUCCESS
          </h1>
          <p className="text-shaded-purple font-pixel text-2xl mb-12">
            Time’s Running Out. Code’s Heating Up
          </p>
        </div>

        {/* Fullscreen Buggy Monster - Made larger and placed in the center */}
        <div className="relative z-10 my-8">
          <img
            src="https://emojigraph.org/media/facebook/alien-monster_1f47e.png" // replace with your custom monster PNG/SVG
            alt="Buggy Monster"
            className="w-full max-w-5xl object-contain animate-pulse"
          />
        </div>

        {/* New Description Section */}
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl text-center">
          <p className="text-lg text-gray-300 font-sans leading-relaxed fade-out-text">
            Dive into a 48-hour coding marathon where innovation meets chaos. Build, break, and redefine the future. Whether you're a seasoned developer or a curious newcomer, join us to tackle real-world challenges, learn new skills, and compete for epic prizes. The only limit is your imagination.
          </p>
          <a href="#schedule" className="down-arrow">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="rgba(var(--neon-blue), 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12L12 16L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bottom Content (Timer) */}
        <div className="relative z-10 w-full mt-16">
          {/* This container now only handles layout, not appearance, and centers its content */}
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Urgent Header with Glitch Effect */}
            <p className="font-pixel text-xl mb-2 text-[#FF00FF] glitch">
              HURRY UP! 
            </p>
            <p className="font-pixel text-sm mb-8 text-gray-400 tracking-widest uppercase">
              Race against time. Only the fastest survive.
            </p>

            {/* NEW Digital Watch Countdown - With Labels */}
            <div className="mt-22 flex flex-col items-center">
              <div 
                className="flex items-start justify-center gap-x-4 md:gap-x-8"
                style={{ textShadow: '0 0 10px #fff, 0 0 20px #FF00FF, 0 0 35px #FF00FF, 0 0 50px #00FFFF' }}
              >
                {/* Days */}
                <div className="flex flex-col items-center">
                  <span className="font-pixel text-6xl md:text-8xl text-white tracking-widest">{timeLeft.days}</span>
                  <span className="font-pixel text-xs md:text-sm text-gray-400 mt-2 tracking-widest">DAYS</span>
                </div>

                <span className="font-pixel text-5xl md:text-7xl text-cyan-400 animate-pulse pt-1">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <span className="font-pixel text-6xl md:text-8xl text-white tracking-widest">{timeLeft.hours}</span>
                  <span className="font-pixel text-xs md:text-sm text-gray-400 mt-2 tracking-widest">HOURS</span>
                </div>

                <span className="font-pixel text-5xl md:text-7xl text-cyan-400 animate-pulse pt-1">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <span className="font-pixel text-6xl md:text-8xl text-white tracking-widest">{timeLeft.minutes}</span>
                  <span className="font-pixel text-xs md:text-sm text-gray-400 mt-2 tracking-widest">MINUTES</span>
                </div>

                <span className="font-pixel text-5xl md:text-7xl text-cyan-400 animate-pulse pt-1">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <span className="font-pixel text-6xl md:text-8xl text-white tracking-widest">{timeLeft.seconds}</span>
                  <span className="font-pixel text-xs md:text-sm text-gray-400 mt-2 tracking-widest">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Schedule Section - Made Larger */}
      <section id="schedule" className="py-32 relative scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4">
          {/* New Terminal-Style Header with working hover */}
          <div className="flex justify-center mb-24">
            <div className="terminal-header group">
              <h2 className="font-pixel text-2xl text-white transition-all duration-300 group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#0ff,0_0_25px_#0ff,0_0_35px_#0ff]">cd SCHEDULE</h2>
              <span className="cursor"></span>
            </div>
          </div>
          
          {/* Timeline Carousel */}
          <div className="relative flex items-center justify-center">
            
            {/* Bigger Arrow Left with No Background and Hover Effect */}
            <button
              onClick={() => setScheduleIndex(Math.max(0, scheduleIndex - 1))}
              disabled={scheduleIndex === 0}
              className="z-20 p-4 bg-transparent border-none transition-opacity duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)] hover:scale-110"
              >
                <path d="M15 18L9 12L15 6" stroke="#00FFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Timeline Content */}
            <div className="flex-grow relative overflow-hidden px-8">
              {/* Animated Pink Connecting Line */}
              <div className="absolute left-0 right-0 top-[50%] -translate-y-1/2 h-2 bg-pink-500" style={{ animation: 'line-pulse 2s infinite ease-in-out' }} />

              {/* Timeline Events */}
              <div className="flex justify-between items-center relative z-10" style={{ minHeight: '350px' }}>
                {scheduleItems.slice(scheduleIndex, scheduleIndex + 3).map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-1/3 group transition-transform duration-300 hover:scale-105 cursor-pointer">
                    {/* Top Part: Date & Time */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_5px_#ff0]"></span>
                        <span className="font-mono text-2xl text-pink-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110 group-hover:[text-shadow:0_0_8px_#ff0]">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_5px_#ff0]"></span>
                        <span className="block font-mono text-lg text-cyan-300 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110 group-hover:[text-shadow:0_0_8px_#ff0]">{item.time}</span>
                      </div>
                    </div>
                    
                    {/* Vertical Connector Line (Top) */}
                    <div className="w-0.5 h-10 bg-pink-500/50 mb-2 group-hover:bg-pink-500 transition-colors"></div>
                    
                    {/* Big Yellow Ball */}
                    <div className="w-14 h-14 rounded-full bg-yellow-400 border-[8px] border-[#01010F] shadow-[0_0_25px_rgba(255,255,0,0.7)] group-hover:shadow-[0_0_45px_rgba(255,255,0,1)] transition-shadow duration-300" />
                    
                    {/* Vertical Connector Line (Bottom) */}
                    <div className="w-0.5 h-10 bg-pink-500/50 mt-2 group-hover:bg-pink-500 transition-colors"></div>

                    {/* Bottom Part: Event Name */}
                    <div className="mt-6 flex flex-col items-center">
                      <div className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_5px_#ff0]"></span><div className="font-pixel text-lg text-white whitespace-pre-line group-hover:text-yellow-300 transition-colors">{item.event}</div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bigger Arrow Right with No Background and Hover Effect */}
            <button
              onClick={() => setScheduleIndex(Math.min(scheduleItems.length - 3, scheduleIndex + 1))}
              disabled={scheduleIndex >= scheduleItems.length - 3}
              className="z-20 p-4 bg-transparent border-none transition-opacity duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)] hover:scale-110"
              >
                <path d="M9 18L15 12L9 6" stroke="#00FFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>


      {/* Prize Section */}
      <section
  id="prize"
  className="py-20 bg-[#151531]/30 scroll-mt-28 relative"
>
  <div className="max-w-5xl mx-auto px-4">
    {/* New Terminal-Style Header */}
    <div className="flex justify-center mb-10">
      <div className="terminal-header group">
        <h2 className="font-pixel text-2xl text-white transition-all duration-300 group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#0ff,0_0_25px_#0ff,0_0_35px_#0ff]">cd PRIZE-POOL</h2>
        <span className="cursor"></span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
      {prizes
        .sort((a, b) => a.order - b.order)
        .map((prize) => (
          <div
            key={prize.place}
            className={`
              group relative text-center flex flex-col items-center p-6 rounded-xl transition-all duration-500
              border border-transparent hover:border-[#FF00FF]/50 hover:shadow-[0_0_20px_#FF00FF55]
              ${prize.order === 1 ? "md:order-2 scale-110" : (prize.order === 2 ? "md:order-1" : "md:order-3")}
            `}
          >
            {/* Floating trophy image */}
            <div
              className={`relative mt-4 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2
              ${prize.order === 1 ? "w-20 h-20" : "w-15 h-14"}`}
            >
              <img
                src="https://imgs.search.brave.com/YvDTUmdpobhLoikXpdRJt7OGnnHR6AS8fPWvilEbZiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvVmlj/dG9yeS1Hb2xkZW4t/Q3VwLVBORy1GaWxl/LnBuZw"
                width={prize.order === 1 ? 96 : 80}
                height={prize.order === 1 ? 96 : 80}
                className="animate-float  object-contain drop-shadow-[0_0_15px_#FF00FF55]"
              />
            </div>

            {/* Amount */}
            <p
              className={`font-pixel text-[#FF00FF] transition-all duration-500 group-hover:scale-110
              ${prize.order === 1 ? "text-4xl" : "text-2xl"}`}
            >
              {prize.amount}
            </p>

            {/* Place text */}
            <p className="text-sm text-gray-400 mt-2 group-hover:text-white tracking-wider">
              {prize.place} 
            </p>

            {/* Background glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl bg-gradient-to-b from-[#FF00FF]/10 to-transparent pointer-events-none"></div>
          </div>
        ))}
    </div>
  </div>
</section>


      {/* Tracks Section - OUT OF THE BOX REDESIGN */}
     {/* TRACKS SECTION */}
<section id="tracks" className="py-32 relative scroll-mt-28">
  <div className="max-w-6xl mx-auto px-4">
    {/* New Terminal-Style Header */}
    <div className="flex justify-center mb-16">
      <div className="terminal-header group">
        <h2 className="font-pixel text-2xl text-white transition-all duration-300 group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#0ff,0_0_25px_#0ff,0_0_35px_#0ff]">cd TRACKS</h2>
        <span className="cursor"></span>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "AI & ML", desc: "Train it. Break it. Make it smarter." },
        { title: "Web & App Dev", desc: "Build futuristic user experiences." },
        { title: "Cybersecurity", desc: "Hack. Secure. Repeat." },
        { title: "Blockchain", desc: "Trustless. Immutable. Decentralized." },
      ].map((track, i) => (
        <div
          key={i}
          className="group p-6 bg-[#0a0f3d] rounded-2xl border border-[#FF00FF]/30 hover:border-cyan-400 
          hover:transition-all duration-300 cursor-pointer shadow-lg 
          hover:shadow-[0_0_20px_#00FFFF]"
        >
          <h3 className="font-pixel text-2xl text-cyan-300 group-hover:text-yellow-300 transition-all mb-4">
            {track.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{track.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* FAQ Section - INTERACTIVE ACCORDION */}
      <section id="info" className="py-20 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4">
          {/* Terminal-Style Header */}
          <div className="flex justify-center mb-16">
            <div className="terminal-header group">
              <h2 className="font-pixel text-2xl text-white transition-all duration-300 group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#0ff,0_0_25px_#0ff,0_0_35px_#0ff]">cd FAQ</h2>
              <span className="cursor"></span>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#151531]/80 rounded-lg border border-pink-500/20 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-6 group"
                >
                  <p className="font-pixel text-sm text-white group-hover:text-pink-400 transition-colors">
                    {item.question}
                  </p>
                  <div className="text-pink-400 text-2xl font-mono transition-transform duration-300 group-hover:scale-125">
                    {openFaqIndex === index ? '-' : '+'}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 font-sans p-6 pt-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - CINEMATIC REDESIGN */}
    {/* FOOTER SECTION */}
<footer className="mt-32 bg-[#020635] pt-16 pb-6 border-t border-[#FF00FF]/30 relative overflow-hidden">
  {/* Glowing Top Border */}
  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 animate-pulse"></div>

  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    <div>
      <h3 className="font-pixel text-xl text-white">404 SUCCESS</h3>
      <p className="mt-3 text-sm text-gray-400">
        Where bugs are friends and caffeine is fuel.
      </p>
    </div>

    <div>
      <h4 className="font-pixel text-lg mb-3 text-white">Follow Us</h4>
      <div className="flex justify-center md:justify-start gap-6">
        {["🌐", "📸", "🐦"].map((icon, i) => (
          <span
            key={i}
            className="text-2xl hover:scale-125 hover:drop-shadow-[0_0_10px_#00FFFF] transition-all cursor-pointer"
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  </div>

  <p className="text-gray-500 text-xs mt-10 text-center">Made with ❤️ & caffeine at BIAS</p>
</footer>
    </main>
  );
}

