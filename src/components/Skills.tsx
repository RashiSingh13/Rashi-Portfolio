
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "JUnit", "Mockito"]
    },
    {
      title: "Frontend Development", 
      skills: ["Angular", "React JS", "JavaScript", "HTML5", "CSS3", "TypeScript"]
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Node JS", "Git", "Agile Methodology", "Enterprise Applications"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
