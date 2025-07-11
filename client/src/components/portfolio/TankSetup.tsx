import { Star } from "lucide-react";

export default function TankSetup() {
  const hullSpecs = [
    { icon: "fas fa-tachometer-alt", label: "Speed", rating: 5 },
    { icon: "fas fa-shield-alt", label: "Armor", rating: 3 },
    { icon: "fas fa-weight-hanging", label: "Weight", value: "Light" },
  ];

  const turretSpecs = [
    { icon: "fas fa-crosshairs", label: "Damage", rating: 5 },
    { icon: "fas fa-clock", label: "Fire Rate", rating: 2 },
    { icon: "fas fa-bullseye", label: "Range", value: "Long" },
  ];

  const battleStats = [
    { value: "92%", label: "WIN RATE" },
    { value: "3.2", label: "K/D RATIO" },
    { value: "847", label: "BATTLES" },
  ];

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < rating ? "text-tanki-teal fill-current" : "text-tanki-light/30"}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="tank" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-tanki-orange">
              CURRENT LOADOUT
            </h2>
            <div className="w-20 h-1 bg-tanki-orange mx-auto"></div>
            <p className="text-lg text-tanki-light/80 max-w-2xl mx-auto">
              My signature tank configuration optimized for precision strikes and tactical dominance.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="tank-card rounded-2xl p-8 animate-pulse-glow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Tank Image */}
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                      alt="Keep-Cry's Tank Setup"
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                    />
                    
                    {/* Tank Stats Overlay */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="bg-tanki-dark/80 backdrop-blur-sm rounded-lg p-3 border border-tanki-orange/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-tanki-teal rounded-full animate-pulse"></div>
                          <span className="font-roboto-mono text-sm text-tanki-light">ONLINE</span>
                        </div>
                      </div>
                      <div className="bg-tanki-dark/80 backdrop-blur-sm rounded-lg p-3 border border-tanki-orange/30">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-roboto-mono">
                            <span>HULL</span>
                            <span>100%</span>
                          </div>
                          <div className="health-bar w-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tank Details */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-orbitron font-bold text-3xl text-tanki-orange">
                      HORNET + RAILGUN
                    </h3>
                    <p className="text-tanki-light/80 text-lg">
                      My signature combo built for precision warfare. The Hornet's speed combined with Railgun's devastating accuracy creates the perfect hit-and-run tactical advantage.
                    </p>
                  </div>
                  
                  {/* Tank Specifications */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-orbitron font-bold text-tanki-yellow">HULL: HORNET</h4>
                      <ul className="space-y-2 text-sm">
                        {hullSpecs.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <i className={`${spec.icon} text-tanki-teal`}></i>
                            <span>{spec.label}:</span>
                            {spec.rating ? renderStarRating(spec.rating) : <span>{spec.value}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-orbitron font-bold text-tanki-yellow">TURRET: RAILGUN</h4>
                      <ul className="space-y-2 text-sm">
                        {turretSpecs.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <i className={`${spec.icon} text-tanki-orange`}></i>
                            <span>{spec.label}:</span>
                            {spec.rating ? renderStarRating(spec.rating) : <span>{spec.value}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Tactical Style */}
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-tanki-yellow">TACTICAL STYLE</h4>
                    <div className="bg-tanki-dark/50 rounded-lg p-4 border border-tanki-orange/20">
                      <p className="text-tanki-light/80 text-sm leading-relaxed">
                        "Strike fast, strike hard, disappear. I use the Hornet's mobility to position for perfect Railgun shots, then relocate before enemies can counter-attack. This setup excels in long-range engagements and hit-and-run tactics."
                      </p>
                    </div>
                  </div>
                  
                  {/* Battle Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-tanki-orange/20">
                    {battleStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl font-orbitron font-bold ${
                          index === 0 ? 'text-tanki-orange' :
                          index === 1 ? 'text-tanki-yellow' :
                          'text-tanki-teal'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-tanki-light/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
