"use client"
import { Code, Database, Cloud, Smartphone } from "lucide-react"

export default function SkillsSection({ isActive }) {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "PHP", "MongoDB", "SQL", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Github", "Bit Bucket", "SendGrid"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter Flow", "Flutter", "Java"],
      color: "from-orange-500 to-red-500",
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
          Technical{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`bg-gradient-to-r ${category.color} p-3 rounded-lg group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-center hover:bg-gray-600/50 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 inline-block">
            <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
            <div className="space-y-2 text-gray-300">
              <p>• IIOE Training - Blockchain Essentials for Higher Education Workforce (July 2024)</p>
              <p>• Microsoft Security, Compliance, and Identity Fundamentals (February 2024)</p>
              <p>• Certificate of Leadership: Nuebe Nobela President (A.Y. 2021-2023)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
