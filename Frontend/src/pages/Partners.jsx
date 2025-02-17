import React from 'react'

const Partners = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-24 -mt-14">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Investors & Partners</h2>
          <p className="text-gray-300">
            We believe that collaboration is key to building a sustainable future.<br />
            Our investors and partners play a crucial role in driving our mission forward.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
          {[
            { name: 'Brookfield', logo: 'https://images.unsplash.com/photo-1612482460557-c4c37ef15916?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name: 'Iberdrola', logo: 'https://plus.unsplash.com/premium_photo-1673326630896-73aee8b9eefc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name: 'Ørsted', logo: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name: 'LinkedIn', logo: 'https://images.unsplash.com/photo-1548364538-60b952c308b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name: 'Sun Energy', logo: 'https://images.unsplash.com/photo-1649926079305-3f21efea61af?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { name: 'Yingli Solar', logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          ].map((partner, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex items-center justify-center hover:bg-white/10  transform transition-transform duration-300 hover:cursor-pointer hover:scale-105">
              <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Partners