import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: "fab fa-discord", label: "Keep-Cry#1337" },
    { icon: "fas fa-envelope", label: "keepcry.tanki@gmail.com" },
    { icon: "fab fa-youtube", label: "@KeepCryTanki" },
  ];

  const services = [
    { icon: "fas fa-paint-brush", label: "Custom Tanki Artwork" },
    { icon: "fas fa-chalkboard-teacher", label: "Tank Strategy Coaching" },
    { icon: "fas fa-users", label: "Team Collaboration" },
  ];

  return (
    <section id="contact" className="py-20 bg-tanki-blue/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-tanki-orange">
              READY TO CONNECT?
            </h2>
            <div className="w-20 h-1 bg-tanki-orange mx-auto"></div>
            <p className="text-lg text-tanki-light/80 max-w-2xl mx-auto">
              Whether you want to discuss tactics, commission artwork, or just chat about Tanki Online, I'm always ready for a good conversation!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-left space-y-4">
                <h3 className="font-orbitron font-bold text-xl text-tanki-orange">GET IN TOUCH</h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className={`${contact.icon} text-tanki-orange`}></i>
                      <span>{contact.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="font-orbitron font-bold text-xl text-tanki-orange">SERVICES</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className={`${service.icon} text-tanki-teal`}></i>
                      <span>{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="tank-card rounded-2xl p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-tanki-orange rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-paper-plane text-2xl text-tanki-dark"></i>
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-tanki-orange">SEND MESSAGE</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-tanki-dark/50 border-tanki-orange/30 focus:border-tanki-orange text-tanki-light placeholder:text-tanki-light/50"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-tanki-dark/50 border-tanki-orange/30 focus:border-tanki-orange text-tanki-light placeholder:text-tanki-light/50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-tanki-dark/50 border-tanki-orange/30 focus:border-tanki-orange text-tanki-light placeholder:text-tanki-light/50 resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-tanki-orange hover:bg-tanki-yellow text-tanki-dark font-orbitron font-bold"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
