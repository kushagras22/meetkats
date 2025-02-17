import { Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto px-4 py-12">
        <div className="flex items-center space-x-2 mb-12">
          <img src='./public/MeetKats_20250216_180907_0000.jpg' className="h-8 w-8 rounded-lg text-emerald-400" />
          <span className="text-white text-xl font-semibold">MeetKats</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Our Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Networking Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Event Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Personalized Recommendations</a></li>
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
            <a href="https://www.linkedin.com/company/meetkats/" target='_blank' className="text-gray-400 hover:text-emerald-400">
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
  )
}

export default Footer