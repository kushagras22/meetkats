import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className='ml-14 mt-16'>
            <h2 className="text-3xl font-bold text-white mb-4">We have 24/7<br />support available</h2>
            <p className="text-gray-300 mb-8">In case you&#39;re still looking for answers.</p>
            <button className="bg-emerald-400 text-teal-950 px-6 py-3 rounded-full hover:bg-emerald-500 transition-colors inline-flex items-center space-x-2">
              <span>Contact Support</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What features does MeetKats offer for college students?",
                answer: "MeetKats provides a platform for college students to connect with peers, join interest-based groups, and participate in local college events. It also offers tools for professional networking and career development."
              },
              {
                question: "How can I join local college events through MeetKats?",
                answer: "You can browse and join local college events directly through the MeetKats platform. Simply navigate to the events section, find an event that interests you, and click to join or register."
              },
              {
                question: "What are the benefits of using MeetKats for networking?",
                answer: "Using MeetKats can enhance your professional network by connecting you with peers and industry professionals. It also provides opportunities for mentorship, collaboration, and access to exclusive events."
              },
              {
                question: "How does MeetKats promote college events?",
                answer: "MeetKats partners with colleges to list and promote their events on the platform, ensuring maximum visibility among students and faculty. This helps increase participation and engagement in college activities."
              },
              {
                question: "Is there a cost associated with using MeetKats?",
                answer: "MeetKats offers a free basic membership for students, with optional premium features available for a subscription fee. These premium features include advanced networking tools and exclusive event access."
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
    </div>
  )
}

export default FAQ