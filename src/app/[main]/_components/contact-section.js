"use client"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export default function ContactSection({ isActive }) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jairuscvalencia@gmail.com",
      href: "mailto:jairuscvalencia@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0905 214 7460",
      href: "tel:+639052147460",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "0589 Villa Tierra Subd. Sumapang Matanda City of Malolos, Bulacan",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jairusvalencia-it",
      href: "https://linkedin.com/in/jairusvalencia-it",
    },
  ]

  const references = [
    {
      name: "Christoper I. Alday",
      position: "Head of Software Development",
      company: "Creciendo Philippines",
      phone: "0995 449 6554",
    },
    {
      name: "Jolina Madriaga",
      position: "Human Resources Lead",
      company: "WeSupport Incorporated",
      phone: "0919 060 5094",
    },
  ]

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              const content = (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </div>
              )

              return contact.href ? (
                <a key={index} href={contact.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              )
            })}

            {/* References */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">References</h4>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <h5 className="text-white font-semibold">{ref.name}</h5>
                    <p className="text-cyan-400 text-sm">{ref.position}</p>
                    <p className="text-gray-400 text-sm">{ref.company}</p>
                    <p className="text-gray-300 text-sm">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
