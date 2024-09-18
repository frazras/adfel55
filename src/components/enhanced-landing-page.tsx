'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Phone, Mail, ChevronDown, Calendar } from 'lucide-react'
import Link from 'next/link'
import Logo from '../assets/images/logo.svg';

export function EnhancedLandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white">
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/church-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full bg-white py-4 mb-8 z-10"
        >
          <div className="container mx-auto flex justify-center px-4">
            <Logo className="w-full h-auto max-w-[650px]" preserveAspectRatio="xMidYMid meet" />
          </div>
        </motion.div>
        <div className="z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 shadow-text"
          >
            Advent Fellowship 55th Anniversary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 shadow-text"
          >
            Renewed by His Grace
            <br />
            Sustained by His Spirit
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              href="#events"
              className="bg-white text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-100 transition-colors duration-300"
            >
              Explore Our Celebration
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section id="events" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Anniversary Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "October 4-5",
                title: "Singspiration",
                description: "Two evenings of uplifting music and praise celebrating our anniversary through music."
              },
              {
                date: "October 6",
                title: "Brunch/Potluck",
                description: "Celebrate our 55th Anniversary and Adfel traditions with good food and fellowship."
              },
              {
                date: "October 19-21",
                title: "Blue Mountain Hike",
                description: "Experience God's creation on a scenic hike through the beautiful Blue Mountains."
              },
              {
                date: "November 15-16",
                title: "Chapel Weekend",
                description: "A special two-day event celebrating our 55th Anniversary and the impact of the fellowship on the campuses."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="text-blue-300 mr-2" size={24} />
                  <span className="text-blue-200 font-semibold">{event.date}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-blue-200 flex-grow">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://www.facebook.com/adfelja/"
              className="flex items-center gap-2 bg-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook size={20} />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/adfelja"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
            >
              <Instagram size={20} />
              Instagram
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3 text-lg md:text-xl">
              <Phone size={24} />
              <span>1-876-867-5475</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-xl">
              <Mail size={24} />
              <span>adfelanniversary@adventfellowship.net</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Advent Fellowship Chapel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}