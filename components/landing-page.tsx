'use client'

import { Inter } from 'next/font/google'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Menu, X, ArrowRight, Star, Calendar, MapPin, Users, Fish } from 'lucide-react'
import Image from 'next/image'
import AquariamHero from './images/f4.jpg'
import AquariamHero2 from './images/Top-5-Marine-Conservation-Programs-Abroad-02.jpg'
import AquariamHero3 from './images/sealife-hunstanton-small.jpg'
import AquariamHero4 from './images/yolanda_sanchez_field_sanne-crop-1024x772.jpg'

const inter = Inter({ subsets: ['latin'] })

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">
      {/* Header */}
      <header className="border-b border-blue-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className={`text-2xl font-semibold text-blue-600 ${inter.className}`}>AquaVenture</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-600 font-semibold">Aquariums</a>
            <a href="#" className="hover:text-blue-600 font-semibold">Experiences</a>
            <a href="#" className="hover:text-blue-600 font-semibold">About Us</a>
            <a href="#" className="hover:text-blue-600 font-semibold">Contact</a>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="font-bold text-blue-600">Sign In</Button>
            <Button className="font-semibold bg-blue-600 hover:bg-blue-700">Book Now</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-200">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="hover:text-blue-600 font-semibold">Aquariums</a>
              <a href="#" className="hover:text-blue-600 font-semibold">Experiences</a>
              <a href="#" className="hover:text-blue-600 font-semibold">About Us</a>
              <a href="#" className="hover:text-blue-600 font-semibold">Contact</a>
              <Button variant="ghost" className="justify-start font-bold text-blue-600">Sign In</Button>
              <Button className="justify-start font-semibold bg-blue-600 hover:bg-blue-700">Book Now</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section className="container mx-auto px-4 pb-5 pt-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-blue-800 ${inter.className}`}>
              Dive into Wonder.<br />Book Your Underwater Adventure.
            </h1>
            <p className="text-xl mb-8 font-medium text-gray-700">Explore the mesmerizing world beneath the waves with our immersive aquarium experiences.</p>
            <Image
              src={AquariamHero}
              alt="Underwater aquarium scene"
              width={800}
              height={400}
              className="rounded-lg shadow-md mb-8 mx-auto max-w-full"
            />
            <Button size="lg" className="mb-5 font-semibold bg-blue-600 hover:bg-blue-700">Explore Aquariums <ArrowRight className="ml-2" size={20} /></Button>
            <p className="text-sm text-gray-600 font-medium">Unforgettable experiences for individuals, families, and groups</p>
          </div>
        </section>

        {/* Search component */}
        <section className="bg-white pb-10 pt-8">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className={`text-2xl font-semibold mb-4 text-blue-800 ${inter.className}`}>
                Find Your Perfect Aquarium Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin size={20} className="text-blue-600" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-blue-600" />
                  <Input type="date" placeholder="Visit Date" className="border-blue-200 focus:border-blue-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-blue-600" />
                  <Input type="number" placeholder="Number of Visitors" min="1" className="border-blue-200 focus:border-blue-400" />
                </div>
                <Button className="w-full font-semibold bg-blue-600 hover:bg-blue-700">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="pt-5 pb-5">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-semibold mb-10 text-center text-blue-800 ${inter.className}`}>
              Why Choose AquaVenture
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Immersive Experiences", 
                  description: "State-of-the-art aquariums for an unforgettable underwater journey.",
                  image: AquariamHero3
                },
                { 
                  title: "Marine Conservation", 
                  description: "We actively contribute to ocean preservation and marine life protection.",
                  image: AquariamHero2
                },
                { 
                  title: "Educational Programs", 
                  description: "Learn about marine ecosystems and the importance of ocean conservation.",
                  image: AquariamHero4
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-300 hover:-translate-y-1">
                  <Fish className="text-blue-600 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110" size={32} />
                  <h3 className={`text-xl font-bold mb-2 text-blue-700 ${inter.className}`}>{feature.title}</h3>
                  <p className="text-gray-700 font-medium mb-4">{feature.description}</p>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="pt-10 pb-20">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-semibold mb-10 text-center text-blue-800 ${inter.className}`}>
              What our visitors say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  location: "USA",
                  quote: "An incredible journey through the depths of the ocean. The variety of marine life was breathtaking!",
                },
                {
                  name: "Michael Chen",
                  location: "Canada",
                  quote: "The interactive exhibits were fantastic. My kids learned so much about ocean conservation.",
                },
                {
                  name: "Emily Rodriguez",
                  location: "UK",
                  quote: "The underwater tunnel was mesmerizing. It felt like we were walking on the ocean floor!",
                },
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 transition-all duration-300 ease-in-out group-hover:scale-110" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 transition-all duration-300 ease-in-out group-hover:text-gray-800">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-800 transition-all duration-300 ease-in-out group-hover:text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 transition-all duration-300 ease-in-out group-hover:text-gray-700">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter sign-up CTA section */}
        <section className="bg-blue-600 pt-10 pb-10 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-semibold mb-6 ${inter.className}`}>
              Stay Updated on Aquarium Events
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">Join our newsletter for exclusive offers and marine life insights.</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input type="email" placeholder="Enter your email" className="max-w-xs bg-white text-blue-900" />
              <Button size="lg" className="font-semibold bg-white text-blue-600 hover:bg-blue-100">Subscribe</Button>
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2" size={20} />
                <span>Exclusive event invitations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-white mr-2" size={20} />
                <span>Marine life updates</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 font-medium">
          <p>&copy; 2024 AquaVenture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}