export default function About() {
  const stats = [
    { value: "2500+", label: "BATTLES WON" },
    { value: "150+", label: "ARTWORKS" },
    { value: "5", label: "YEARS ACTIVE" },
  ];

  const socialLinks = [
    { icon: "fab fa-discord", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-twitch", href: "#" },
  ];

  const specializations = [
    "DIGITAL ART",
    "TANK TACTICS",
    "CONCEPT DESIGN",
    "BATTLE ANALYSIS",
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-tanki-orange">
              MISSION BRIEFING
            </h2>
            <div className="w-20 h-1 bg-tanki-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-tanki-light/90">
                Welcome to my digital battlefield! I'm Keep-Cry, a passionate{" "}
                <span className="text-tanki-orange font-semibold">Tanki Online</span> player and digital artist. For over 5 years, I've been dominating the battlefield with precision tactics and creating stunning fan art that brings the Tanki universe to life.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-tanki-light/90">
                My journey combines the thrill of competitive gaming with the creativity of digital art, showcasing both my tactical prowess and artistic vision in the world of Tanki Online.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className={`text-2xl font-orbitron font-bold ${
                      index === 0 ? 'text-tanki-orange' : 
                      index === 1 ? 'text-tanki-yellow' : 
                      'text-tanki-teal'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-tanki-light/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="font-orbitron font-bold text-xl text-tanki-orange">CONNECT WITH ME</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className="social-icon text-3xl">
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Specialty Tags */}
              <div className="space-y-4">
                <h3 className="font-orbitron font-bold text-xl text-tanki-orange">SPECIALIZATIONS</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {specializations.map((spec, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-tanki-blue border rounded-full text-sm font-roboto-mono ${
                        index === 0 ? 'border-tanki-orange' :
                        index === 1 ? 'border-tanki-yellow' :
                        index === 2 ? 'border-tanki-teal' :
                        'border-tanki-orange'
                      }`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
