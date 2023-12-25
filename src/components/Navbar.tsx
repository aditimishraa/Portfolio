"use client";
import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Blogs",
        path: "/blogs",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

const Navbar = () => {
    const [isRainPlaying, setIsRainPlaying] = useState(false);
  const rainAudioRef = useRef<HTMLAudioElement>(null);

  const [isBirdChirpingPlaying, setIsBirdChirpingPlaying] = useState(false);
  const birdChirpingAudioRef = useRef<HTMLAudioElement>(null);

  const toggleRainSound = () => {
    const audio = rainAudioRef.current;

    if (audio) {
      if (!isRainPlaying) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      setIsRainPlaying(!isRainPlaying);
    }
  };

  const toggleBirdChirpingSound = () => {
    const audio = birdChirpingAudioRef.current;

    if (audio) {
      if (!isBirdChirpingPlaying) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      setIsBirdChirpingPlaying(!isBirdChirpingPlaying);
    }
  };
    

    const [navbarOpen, setNavbarOpen] = useState(false);
    
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
    <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className='flex flex-row'>
        <Link
        href={"/"}
        className="text-2xl md:text-5xl text-white font-semibold p-2"
      >
        LOGO
      </Link>
      <div className='flex flex-row justify-between'>
      <audio ref={rainAudioRef} src='/songs/soft-rain-ambient-111154.mp3' />
      <button id="rainButton" className="px-4 py-2 shadow-md" onClick={toggleRainSound}>
        🌧️
      </button>

      <audio ref={birdChirpingAudioRef} src='/songs/birds-singing-nature-sounds-8001.mp3' />
      <button id="birdChirpingButton" className="px-4 py-2 shadow-md" onClick={toggleBirdChirpingSound}>
        🐦
      </button>
    </div>
            
        </div>
      
      <div className="mobile-menu block md:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  </nav>

  )
}

export default Navbar