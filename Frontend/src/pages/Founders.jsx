import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'


const Founders = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Founders"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Our Founders</h2>
            <p className="text-emerald-400 text-xl font-[18px] mb-12 text-center">The visionaries behind <span className="font-semibold">MeetKats</span></p>

            <div className="space-y-8">
              {[
                {
                  name: "Harsh Verdhan Singh",
                  role: "Chief Executive Officer (CEO)",
                  bio: "Harsh Verdhan Singh leads MeetKats with a visionary approach, driving the platform to become a leader in professional networking.",
                  image: "https://media.licdn.com/dms/image/v2/D5603AQEsCc-xr1acHw/profile-displayphoto-shrink_800_800/B56ZPev42uGsAc-/0/1734608921487?e=1745452800&v=beta&t=vDeA93snhSOq52uqyyMxBtghOg6aHkizC_LsBv6jUUc"
                },
                {
                  name: "Aditya Srivastava",
                  role: "Chief Technology Officer (CTO)",
                  bio: "Aditya Srivastava spearheads the technological innovations at MeetKats, ensuring the platform remains at the cutting edge of networking technology.",
                  image: "https://media.licdn.com/dms/image/v2/D5603AQHQDMZzAsYMGA/profile-displayphoto-shrink_400_400/B56ZR.45qKGsAg-/0/1737295633932?e=1745452800&v=beta&t=Lx0HnIh785n5_UzcfYuVw_viH_Veke3Ua0nr8wgOEr0"
                }
              ].map((founder, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                    <p className="text-emerald-400 mb-2">{founder.role}</p>
                    <p className="text-gray-300">{founder.bio}</p>
                    <div className="flex space-x-4 mt-3">
                      <a href="#" className="text-gray-400 hover:text-emerald-400">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-emerald-400">
                        <FacebookIcon className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-emerald-400">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Founders