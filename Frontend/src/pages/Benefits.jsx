import { Building, Leaf, NetworkIcon, Users } from 'lucide-react'
import React from 'react'
import { MdEventSeat } from 'react-icons/md'

const Benefits = () => {
  return (
    <div>
      <section className="container shiny-border mx-auto px-4 py-20 bg-emerald-50/5 backdrop-blur-md rounded-3xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Main Benefits</h2>
          <p className="text-gray-300">
            Discover the unique advantages of joining MeetKats, where innovation meets community. Our platform is designed to enhance your professional journey and foster meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center bg-white rounded-xl p-8 transform transition-transform duration-300 hover:cursor-pointer  hover:scale-105">
            <NetworkIcon className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">Professional Networking</h3>
            <p className="text-gray-600 text-center">
              Connect with industry leaders and peers to expand your professional network and explore new opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-xl p-8 transform transition-transform duration-300 hover:cursor-pointer  hover:scale-105">
            <MdEventSeat className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">Exclusive Events</h3>
            <p className="text-center text-gray-600">
              Gain access to exclusive events that provide insights and knowledge from experts in various fields.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-xl p-8 transform transition-transform duration-300 hover:cursor-pointer hover:scale-105">
            <Users className="h-12 w-12 text-emerald-600 mb-6" />
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
            <p className="text-center text-gray-600">
              Be part of a vibrant community that supports growth, learning, and collaboration among its members.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits