
import {
  Building2,
  ChevronDown,
} from 'lucide-react';
import Hero from './Hero';
import Partners from './Partners';
import Benefits from './Benefits';
import Founders from './Founders';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';
import Service from './Service';

function Home() {

  return (
    <div className="min-h-screen bg-teal-950">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src='./public/MeetKats_20250216_180907_0000.jpg' className="h-8 w-8 rounded-lg text-emerald-400" />
            <span className="text-white text-xl font-semibold">MeetKats</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-emerald-400">About</a>
            <a href="#" className="text-white hover:text-emerald-400">Blog</a>
            <a href="#" className="text-white hover:text-emerald-400">Resources</a>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-emerald-400">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-white hover:text-emerald-400">Contact Us</a>
          </div>

          <button className="bg-emerald-400 text-teal-950 px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
            Let&#39;s Talk
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <Hero />

        <Service />
        {/* Investors & Partners Section */}
        <Partners />

        {/* Benefits Section */}
        <Benefits />

        {/* Founders Section */}
        <Founders />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTA />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;