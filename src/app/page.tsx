'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // --- Countdown Timer Logic ---
  useEffect(() => {
    // Set a future date for the hackathon deadline.
    // Let's set it to December 31, 2025 for this example.
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


  const scheduleItems = [
    { time: '10:00 AM', event: 'Opening Ceremony' },
    { time: '11:00 AM', event: 'Team Formation' },
    { time: '12:00 PM', event: 'Hacking Begins' },
    { time: '06:00 PM', event: 'First Milestone Check' },
    { time: '10:00 PM', event: 'Late Night Gaming' }
  ];

  const prizes = [
      { place: '2nd', amount: '$1500', order: 2, image: '/images/trophy-2.png' },
      { place: '1st', amount: '$2500', order: 1, image: '/images/trophy-1.png' },
      { place: '3rd', amount: '$1000', order: 3, image: '/images/trophy-3.png' }
  ];

  const tracks = [
    { name: 'MEDICAL', icon: '🏥' },
    { name: 'FINANCE', icon: '💰' },
    { name: 'EDUCATION', icon: '📚' },
    { name: 'SOCIAL', icon: '🤝' }
  ];

  const faqItems = [
    "What does team making look like?",
    "Who can participate?",
    "How do we participate in this hackathon?",
    "Are there prerequisites to participate?",
    "Is food and accommodation provided free of charge?",
    "Can travel costs be covered for selected participants?"
  ];


  return (
    <main className="min-h-screen bg-[#0B0B1E] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B1E]/80 backdrop-blur-sm border-b border-[#FF00FF]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex space-x-8">
            {['SCHEDULE', 'TRACKS', 'PRIZE', 'INFO'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-pixel text-sm hover:text-[#FF00FF] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#FF00FF] px-4 py-2 rounded-sm font-pixel text-sm hover:bg-[#FF40FF] transition-colors">
            Join Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 text-center relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <h1 className="font-pixel text-6xl mb-4 text-glow">STATUS CODE 1</h1>
        <p className="text-[#FF00FF] mb-8 font-pixel">Build to Discover!</p>
        
        {/* Timer */}
        <div className="max-w-lg mx-auto bg-[#151531]/50 rounded-lg p-6 mb-12 backdrop-blur-sm">
          <p className="text-sm mb-2 text-gray-300">Hacking ends in:</p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' }
            ].map((time, i) => (
              <div key={i} className="space-y-2">
                <div className="font-pixel text-2xl text-[#FF00FF]">
                  {time.value}
                </div>
                <div className="text-xs text-gray-400">{time.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Character */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-12">
            <img
              src="https://placehold.co/384x384/0B0B1E/FF00FF?text=Astronaut"
              alt="Pixel Art Astronaut Character"
              width="384"
              height="384"
              className="animate-float w-full h-full object-contain"
            />
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center">SCHEDULE</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#FF00FF]/20" />
            <div className="space-y-16">
              {scheduleItems.map((item, index) => (
                <div key={index} className="flex items-center relative">
                    <div className={`w-1/2 text-right pr-8 ${index % 2 !== 0 ? 'invisible' : ''}`}>
                      <p className="font-pixel text-lg text-[#FF00FF]">{item.time}</p>
                      <p className="font-pixel text-md mt-1">{item.event}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#FF00FF] absolute left-1/2 transform -translate-x-1/2 z-10 border-4 border-[#0B0B1E]"></div>
                    <div className={`w-1/2 pl-8 ${index % 2 === 0 ? 'invisible' : ''}`}>
                      <p className="font-pixel text-lg text-[#FF00FF]">{item.time}</p>
                      <p className="font-pixel text-md mt-1">{item.event}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section id="prize" className="py-20 bg-[#151531]/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center">PRIZE POOL</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {prizes.sort((a,b) => a.order - b.order).map((prize) => (
              <div key={prize.place} className={`text-center flex flex-col items-center ${prize.order === 1 ? 'md:order-2' : (prize.order === 2 ? 'md:order-1' : 'md:order-3')}`}>
                <div className={`relative w-40 h-40 mb-4 ${prize.order === 1 ? 'md:w-52 md:h-52' : ''}`}>
                  <img
                    src={`https://placehold.co/208x208/151531/FF00FF?text=Trophy`}
                    alt={`${prize.place} Place Trophy`}
                    width={prize.order === 1 ? 208 : 160}
                    height={prize.order === 1 ? 208 : 160}
                    className="animate-float w-full h-full object-contain"
                  />
                </div>
                <p className={`font-pixel text-[#FF00FF] ${prize.order === 1 ? 'text-3xl' : 'text-xl'}`}>{prize.amount}</p>
                <p className="text-sm text-gray-400 mt-2">{prize.place} Place</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center">TRACKS</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 track-scroll justify-center">
            {tracks.map((track, index) => (
              <div
                key={track.name}
                onClick={() => setCurrentTrack(index)}
                className={`flex-none w-80 h-48 bg-[#151531] rounded-lg p-6 cursor-pointer transition-all ${
                  currentTrack === index
                    ? 'border-2 border-[#FF00FF] transform scale-105'
                    : 'hover:border hover:border-[#FF00FF]/50'
                }`}
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="font-pixel text-lg mb-4 text-[#FF00FF]">{track.name}</h3>
                <p className="text-sm text-gray-400">
                  Build innovative solutions in the {track.name.toLowerCase()} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="info" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((question, index) => (
              <div key={index} className="bg-[#151531] rounded-lg p-6 hover:border hover:border-[#FF00FF]/50 transition-all cursor-pointer">
                <p className="font-pixel text-sm">
                  <span className="text-[#FF00FF]">{index + 1}]</span> {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#151531]/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-pixel text-4xl mb-8 text-[#FF00FF]">STATUS CODE 1</h2>
          <p className="font-pixel text-xl mb-8">Ready to Build Something Epic?</p>
          <button className="bg-[#FF00FF] px-8 py-4 rounded-sm font-pixel hover:bg-[#FF40FF] transition-colors">
            JOIN US
          </button>
          
          <div className="mt-16">
            <div className="relative h-32 w-full">
              <img
                src="https://placehold.co/1200x128/0B0B1E/FF00FF?text=Footer+Scene"
                alt="Footer Scene"
                width="1200"
                height="128"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

