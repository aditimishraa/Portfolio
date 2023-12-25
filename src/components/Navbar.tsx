"use client";
import React, {useEffect, useState} from 'react'
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
    const [isBirdChirpingPlaying, setIsBirdChirpingPlaying] = useState(false);
    const [rainAudio] = useState(new Audio('/songs/soft-rain-ambient-111154.mp3'));
    const [birdChirpingAudio] = useState(new Audio('/songs/birds-singing-nature-sounds-8001.mp3'))

    const toggleRainSound = () => {
        if (!isRainPlaying) {
        rainAudio.play();
        } else {
        rainAudio.pause();
        rainAudio.currentTime = 0;
        }
        setIsRainPlaying(!isRainPlaying);
    };

    useEffect(() => {
        rainAudio.addEventListener('ended', () => {
        setIsRainPlaying(false);
        rainAudio.currentTime = 0;
        });
    }, [rainAudio]);
    
    const toggleBirdChirpingSound = () => {

        if (!isBirdChirpingPlaying) {
            birdChirpingAudio.play();
        } else {
            birdChirpingAudio.pause();
            birdChirpingAudio.currentTime = 0; // Reset the audio to the beginning
        }

        setIsBirdChirpingPlaying(!isBirdChirpingPlaying);
    };
    useEffect(() => {
        birdChirpingAudio.addEventListener('ended', () => {
            setIsBirdChirpingPlaying(false);
            birdChirpingAudio.currentTime = 0;
        });
    }, [birdChirpingAudio]);

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
      <button
        id="rainButton"
        className="px-4 py-2 shadow-md"
        onClick={toggleRainSound}
        >
        🌧️
        </button>
        <button
        id="birdChirpingButton"
        className="px-4 py-2 shadow-md"
        onClick={toggleBirdChirpingSound}
        >
        🐦
        </button>
      </div>
            
        </div>
      {/* <Link
        href={"/"}
        className="text-2xl md:text-5xl text-white font-semibold"
      >
        LOGO
      </Link>
      <div >
      <button
        id="rainButton"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        onClick={playRainSound}
        >
        Click for Rain
        </button>
      </div> */}
      {/* <div className="flex justify-center items-center h-screen">
        <button
        id="rainButton"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        onClick={playRainSound}
        >
        Click for Rain
        </button>
        </div> */}
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