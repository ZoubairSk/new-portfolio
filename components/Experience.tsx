const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Lead a team of 5 developers in creating scalable web applications',
      'Implemented microservices architecture, improving system efficiency by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions Co.',
    period: 'Mar 2018 - Dec 2020',
    responsibilities: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Optimized database queries, reducing load times by 30%',
      'Collaborated with UX designers to implement responsive designs',
    ],
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

