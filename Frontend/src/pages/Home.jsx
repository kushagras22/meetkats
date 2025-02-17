import React from 'react';
import { BiChevronDown, BiMessageSquare, BiTrophy } from 'react-icons/bi';
import { LuBuilding2 } from 'react-icons/lu';

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-teal-950">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <LuBuilding2 className="h-8 w-8 text-emerald-400" />
              <span className="text-white text-xl font-semibold">Constructopia</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-emerald-400">About</a>
              <div className="relative group">
                <button className="flex items-center text-white hover:text-emerald-400">
                  Services
                  <BiChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-white hover:text-emerald-400">Blog</a>
              <a href="#" className="text-white hover:text-emerald-400">Resources</a>
              <a href="#" className="text-white hover:text-emerald-400">Contact Us</a>
            </div>

            <button className="bg-emerald-400 text-teal-950 px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
              Let&apos;s Talk
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-white">We are building a</span>
                <br />
                <span className="text-emerald-400">Sustainable Future</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Committed to innovative practices and eco-friendly solutions.
              </p>



              {/* Achievement Badge */}
              <div className="absolute right-8 top-64 hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 space-x-2">
                <BiTrophy className="h-5 w-5 text-yellow-400" />
                <span className="text-white text-sm">#1 in Renewable Industry</span>
              </div>
            </div>


          </div>

          {/* Contact Section */}
          <div className="mt-24 text-center">
            <p className="text-gray-400 mb-4">It&apos;s free for consultation</p>
            <button className="inline-flex items-center space-x-2 bg-emerald-400 text-teal-950 px-8 py-3 rounded-full hover:bg-emerald-500 transition-colors">
              <span>Contact Us</span>
              <BiMessageSquare className="h-5 w-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;