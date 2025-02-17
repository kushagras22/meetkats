

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto px-4 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="text-emerald-400">MeetKats</span>
            </h1>
            <p className="text-gray-300 text-lg">
              At MeetKats, we are dedicated to bridging the gap between professionals across various industries, fostering a culture of innovation and collaboration. Our mission is to empower individuals and organizations to connect, grow, and drive forward a brighter, more sustainable future.
            </p>



          </div>

          <div className="relative">
            {/* Main Image Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Meetkats Image"
                className="rounded-2xl w-full h-auto"
              />
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero