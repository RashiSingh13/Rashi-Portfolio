
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        

        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/assests/bdc089ce-959e-447d-afcd-1a2f4d9d126f.png"
              alt="Rashi Singh"
              className="rounded-lg shadow-lg w-80 h-100 object-cover object-top"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Master of Computer Applications graduate from Lovely Professional University, 
              now working as an Associate Software Engineer at Capgemini. I'm passionate about 
              building efficient and scalable applications, with hands-on experience in Java, 
              Spring Boot, Microservices, Angular, and modern testing tools like JUnit and Mockito.
            </p>
            
        
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Eager to keep growing, learning, and taking on new challenges in the tech industry. 
              Let's connect and explore opportunities to collaborate or share ideas!
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Education:</strong> MCA from Lovely Professional University</li>
                <li><strong>Experience:</strong> Associate Software Engineer at Capgemini</li>
                <li><strong>Specialization:</strong> Enterprise applications in agile environment</li>
                <li><strong>Focus:</strong> Full-stack development and scalable solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
