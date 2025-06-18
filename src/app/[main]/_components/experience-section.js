"use client"
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react"

export default function ExperienceSection({ isActive }) {
  const responsibilities = [
    "Led and built the Recruitment Module for the company's internal system",
    "Developed recruitment dashboard and job requisition forms",
    "Implemented full applicant management with automated emails using SendGrid",
    "Built contract signing features and employee onboarding system",
    "Managed talent pools and employee exit processes",
    "Contributed to completing the Business Information Management System (BIMS)",
  ]

  const technologies = ["Next.js", "Tailwind CSS", "SendGrid", "AWS S3"]

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Work{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
              <Briefcase className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
              <p className="text-cyan-400 font-semibold mb-2">Creciendo Philippines</p>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>December 2024 - June 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Software Development Department</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
            <div className="grid gap-3">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle
                    className="text-cyan-400 mt-1 flex-shrink-0 group-hover:text-cyan-300 transition-colors"
                    size={16}
                  />
                  <p className="text-gray-300 group-hover:text-white transition-colors">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
            <p className="text-gray-300 italic">
              This project was key in completing the company&apos;s Business Information Management System (BIMS) and played
              a major role in helping the company market the system and attract new clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
