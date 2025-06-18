"use client"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function AboutSection({ isActive }) {
  const achievements = [
    { title: "Dean's List Award: First Honors", date: "April 2024" },
    { title: "1st Runner Up HACK-A-THON 2022", date: "June 2022" },
    { title: "Dean's List Award: Second Honors", date: "November 2022" },
    { title: "Dean's List Award: First Honors", date: "November 2021" },
  ]

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 mb-2">BS in Information Technology</p>
              <p className="text-gray-400 text-sm">with Specialization in Mobile and Web Application</p>
              <p className="text-cyan-400 font-medium">National University-Baliwag (2021 - 2025)</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                As a fresh graduate in Information Technology, I am eager to start my career in a role where I can
                contribute, learn, and grow. I'm passionate about creating web and mobile applications and excited to
                explore new technologies while working with a team that values innovation and continuous learning.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="text-cyan-400 mr-3" size={24} />
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <Calendar className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <h4 className="text-white font-medium">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
