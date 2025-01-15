const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Tech University',
    period: '2016 - 2018',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'State University',
    period: '2012 - 2016',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

