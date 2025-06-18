"use client"
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"

export default function ProjectsSection({ isActive }) {
  const projects = [
    {
      title: "SCHED-NU",
      subtitle: "National University Baliwag Schedule Management System",
      description:
        "Built a comprehensive web-based academic scheduling system to manage course schedules, faculty assignments, and class loads across departments.",
      features: [
        "Multi-role access (Admin, Dean, Program Chair, Faculty)",
        "Automated conflict detection",
        "Dynamic scheduling based on course prerequisites",
        "Real-time updates and notifications",
        "User-friendly interface for schedule management",
        "Data analytics for scheduling trends",
        "Integration with existing university systems",
        "Automated email notifications",
        "Mobile-friendly design",
        "Report generation (PDF/Excel)",
        "Load balancing algorithms",
        "Schedule conflict prevention",
      ],
      technologies: ["Web Development", "Database Management", "Algorithm Implementation"],
      icon: Calendar,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Recruitment Module",
      subtitle: "Creciendo Philippines BIMS",
      description:
        "Led the development of a complete recruitment management system as part of the company's Business Information Management System.",
      features: [
        "Recruitment dashboard",
        "Job posting and management",
        "Applicant tracking system",
        "Resume parsing and filtering",
        "Interview scheduling",
        "Candidate evaluation forms",
        "Automated email notifications",
        "Reporting and analytics",
        "Employee Management System",
        "Job and internship requisition forms",
        "Automated email system with SendGrid",
        "Applicant tracking and management",
        "Contract signing features",
        "Employee onboarding system",
      ],
      technologies: ["Next.js", "Tailwind CSS", "SendGrid", "AWS S3"],
      icon: Users,
      color: "from-purple-500 to-pink-500",
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
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-r ${project.color} p-4 rounded-xl group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Zap className="text-cyan-400 mr-2" size={18} />
                        Key Features:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                        <ExternalLink size={16} />
                        <span>View Details</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg border border-gray-600 hover:border-cyan-500 hover:text-white transition-all duration-300">
                        <Github size={16} />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
