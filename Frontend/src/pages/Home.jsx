import React, { useState } from 'react';
import {
  Building2,
  Trophy,
  ChevronDown,
  MessageSquare,
  Building,
  Leaf,
  Users,
  ArrowRight,
  ChevronUp,
  Linkedin,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-teal-950">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-emerald-400" />
            <span className="text-white text-xl font-semibold">Constructopia</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-emerald-400">About</a>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-emerald-400">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-white hover:text-emerald-400">Blog</a>
            <a href="#" className="text-white hover:text-emerald-400">Resources</a>
            <a href="#" className="text-white hover:text-emerald-400">Contact Us</a>
          </div>

          <button className="bg-emerald-400 text-teal-950 px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
            Let's Talk
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-24">
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
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-white text-sm">#1 in Renewable Industry</span>
              </div>
            </div>

            <div className="relative">
              {/* Main Image Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=800&h=600&fit=crop"
                  alt="Construction Worker"
                  className="rounded-2xl w-full h-auto"
                />
              </div>

              {/* Stats Card */}
              <div className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 absolute -bottom-10 right-0 max-w-xs">
                <h3 className="text-white text-xl mb-2">
                  Renewable Energy,<br />
                  Greener World,<br />
                  <span className="text-emerald-400">Bright</span> Future
                </h3>
                <div className="mt-4 bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-white">75%</span>
                    <div className="w-32 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">Energy Savings</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-4">Providing<br />Best Services</h2>
            <p className="text-gray-300 mb-16">
              We are dedicated to providing the best services in the sustainability manufacturing industry. Our commitment to excellence is reflected in our innovative practices, cutting-edge technology, and a passionate team of experts.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Renewable Energy Solutions",
                description: "Embrace the power of clean energy with our advanced renewable solutions. From solar panels to wind turbines, we provide cutting-edge technologies.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
              },
              {
                title: "Eco-Friendly Manufacturing",
                description: "Transform your production processes with our sustainable manufacturing solutions.",
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop"
              },
              {
                title: "Environmental Consulting Services",
                description: "Navigate the complexities of environmental regulations with our expert consulting services. We provide comprehensive assessments and strategic planning.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
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

        {/* Investors & Partners Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Investors & Partners</h2>
            <p className="text-gray-300">
              We believe that collaboration is key to building a sustainable future.<br />
              Our investors and partners play a crucial role in driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Brookfield', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
              { name: 'Iberdrola', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
              { name: 'Ørsted', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
              { name: 'Vestas', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
              { name: 'Sun Energy', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
              { name: 'Yingli Solar', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
            ].map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-24 bg-emerald-50/5 backdrop-blur-md rounded-3xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Main Benefits</h2>
            <p className="text-gray-300">
              We offer innovative solutions that not only enhance environmental sustainability but also drive economic efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <Building className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovative Green Technologies</h3>
              <p className="text-gray-600">
                Explore our cutting-edge solutions designed to reduce environmental impact and promote sustainability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <Leaf className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Projects</h3>
              <p className="text-gray-600">
                Delve into our portfolio of successful sustainability projects that are making a real difference.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <Users className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community & Partnerships</h3>
              <p className="text-gray-600">
                Join a thriving network of like-minded individuals and organizations dedicated to building a sustainable future.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our Founders"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Founders</h2>
              <p className="text-gray-300 mb-12">The visionaries behind our renewable future</p>

              <div className="space-y-8">
                {[
                  {
                    name: "John Smith",
                    role: "Chief Executive Officer (CEO)",
                    bio: "John Smith has been at the forefront of the renewable energy industry for over two decades.",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
                  },
                  {
                    name: "Cole Palmer",
                    role: "Chief Technology Officer (CTO)",
                    bio: "Cole Palmer is a trailblazer in the field of renewable energy technology. He brings a wealth of experience in engineering.",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
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
                          <Facebook className="h-5 w-5" />
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

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">We Have 24/7<br />Support Available</h2>
              <p className="text-gray-300 mb-8">In case you're still looking for answers.</p>
              <button className="bg-emerald-400 text-teal-950 px-6 py-3 rounded-full hover:bg-emerald-500 transition-colors inline-flex items-center space-x-2">
                <span>Contact Support</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What types of renewable energy solutions do you offer?",
                  answer: "We offer a variety of renewable energy solutions, including solar power, wind energy, hydroelectric power, and geothermal energy systems. Our goal is to provide comprehensive solutions tailored to meet the specific needs of our clients."
                },
                {
                  question: "How can I determine if renewable energy is right for my home?",
                  answer: "We provide free consultations to assess your energy needs, location, and budget to determine the most suitable renewable energy solutions for your home."
                },
                {
                  question: "What are the financial benefits of switching to renewable energy?",
                  answer: "Switching to renewable energy can lead to significant long-term cost savings through reduced utility bills, tax incentives, and increased property value."
                },
                {
                  question: "How long does it take to install a renewable energy system?",
                  answer: "Installation timelines vary depending on the system type and size, but typically range from 1-3 days for residential solar installations to 2-4 weeks for larger commercial projects."
                },
                {
                  question: "What maintenance is required for renewable energy systems?",
                  answer: "Most renewable energy systems require minimal maintenance. We provide regular inspection services and cleaning recommendations to ensure optimal performance."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-emerald-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="bg-teal-900 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Renewal</span>
              <span className="text-emerald-400">Now</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              By focusing on innovation and sustainable practices, we are dedicated to creating a cleaner, greener world today.
            </p>
            <button className="bg-emerald-400 text-teal-950 px-8 py-3 rounded-full hover:bg-emerald-500 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex items-center space-x-2 mb-12">
          <Building2 className="h-8 w-8 text-emerald-400" />
          <span className="text-white text-xl font-semibold">Constructopia</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Product</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Review</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Renewable Energy Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Eco-Friendly Manufacturing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Environmental Consulting Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">White Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© Copyright MeetKats 2025. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-emerald-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;