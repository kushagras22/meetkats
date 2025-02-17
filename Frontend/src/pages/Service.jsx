import { ArrowRight } from 'lucide-react'


const Service = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl w-full font-bold text-white mb-4">Our Premium Services</h2>
          <p className="text-gray-300 mb-16">
            At MeetKats, we are dedicated to providing top-notch services that cater to your professional and personal growth. Our platform offers a range of features designed to enhance your networking experience and ensure you make the most of every opportunity.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "Event Networking Opportunities",
              description: "Connect with industry leaders and peers at our exclusive events. Enhance your professional network and discover new opportunities.",
              image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Seamless Event Booking",
              description: "Experience hassle-free event booking with our user-friendly platform. Find and reserve your spot at the most sought-after events.",
              image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Personalized Event Recommendations",
              description: "Receive tailored event suggestions based on your interests and professional goals. Never miss an opportunity to grow and learn.",
              image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          ].map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''} space-y-4`}>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <button className="group flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Service