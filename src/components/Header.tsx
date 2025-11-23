// 'use client'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//       isScrolled 
//         ? 'bg-[rgba(8,8,20,0.85)] backdrop-blur-md py-2 shadow-lg shadow-[rgba(var(--neon-purple),0.15)]' 
//         : 'bg-transparent py-4'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center relative">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/images/logo.png"
//                 alt="Status Code 1"
//                 width={160}
//                 height={40}
//                 className="h-10 w-auto neon-glow"
//               />
//             </Link>
//           </div>

//           {/* Navigation - Desktop */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {['About', 'Prizes', 'Schedule', 'Mentors', 'Sponsors', 'FAQ'].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="font-pixel text-sm text-white hover:text-[rgb(var(--neon-pink))] transition-all duration-300 relative group"
//               >
//                 {item}
//                 <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[rgb(var(--neon-pink))] transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//             <button className="font-pixel text-sm px-6 py-2 bg-[rgb(var(--neon-purple))] text-white transition-all duration-300 pixel-border rounded transform hover:scale-105 hover:rotate-1 hover:bg-[rgb(var(--neon-pink))]">
//               Register Now
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 hover:bg-[rgba(var(--neon-purple),0.1)] rounded-lg transition-all duration-300"
//           >
//             <div className="w-6 h-6 relative">
//               <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'}`}></span>
//               <span className={`absolute w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} top-3`}></span>
//               <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`}></span>
//             </div>
//           </button>

//           {/* Mobile Menu */}
//           <div className={`md:hidden absolute top-full right-0 w-64 mt-2 py-2 bg-[rgba(8,8,20,0.95)] backdrop-blur-md rounded-lg pixel-border transform transition-all duration-300 ${
//             isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
//           }`}>
//             {['About', 'Prizes', 'Schedule', 'Mentors', 'Sponsors', 'FAQ'].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="block px-4 py-2 font-pixel text-sm text-white hover:bg-[rgba(var(--neon-pink),0.1)] hover:text-[rgb(var(--neon-pink))] transition-all duration-300"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </Link>
//             ))}
//             <div className="px-4 pt-2 mt-2 border-t border-[rgba(255,255,255,0.1)]">
//               <button className="w-full font-pixel text-sm px-4 py-2 bg-[rgb(var(--neon-purple))] text-white transition-all duration-300 pixel-border rounded hover:bg-[rgb(var(--neon-pink))]">
//                 Register Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }