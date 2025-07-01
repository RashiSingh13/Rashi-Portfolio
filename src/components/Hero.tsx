
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
      
            src="/assests/bdc089ce-959e-447d-afcd-1a2f4d9d126f.png"
            alt="Rashi Singh"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Rashi Singh
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            MCA Graduate
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Java Developer • Full Stack Enthusiast
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            className="flex items-center gap-2"
            onClick={() => window.open('mailto:singhrashi08364@gmail.com', '_blank')}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('https://github.com/RashiSingh13', '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/rashisingh13/', '_blank')}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>
        
        <div className="text-gray-600 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            Passionate about building efficient and scalable applications with hands-on experience 
            in Java, Spring Boot, Microservices, Angular, and modern testing frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
