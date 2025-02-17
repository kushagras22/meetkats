import React from 'react'

const CTA = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-12 sm:py-24">
        <div className="bg-teal-900 rounded-3xl p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="text-white">MeetKats</span>
            <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            By focusing on innovation and professional networking, we are dedicated to creating a connected, empowered community today.
          </p>
          <button className="bg-emerald-400 text-teal-950 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-emerald-500 transition-colors">
            Join Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default CTA