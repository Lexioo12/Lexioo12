export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tanki-dark via-tanki-blue to-tanki-dark opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-full h-full bg-gradient-radial from-tanki-orange/10 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl text-tanki-light animate-slide-up">
            KEEP-CRY'S
          </h1>
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl lg:text-6xl text-tanki-orange animate-slide-up">
            TANKI ONLINE
          </h2>
          <h3 className="font-orbitron font-bold text-2xl md:text-4xl lg:text-5xl text-tanki-yellow animate-slide-up">
            PORTFOLIO
          </h3>
        </div>
        
        <div className="flex items-center justify-center space-x-6 animate-slide-up">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-tanki-teal rounded-full animate-pulse"></div>
            <span className="font-roboto-mono text-tanki-teal">GAMER</span>
          </div>
          <div className="w-1 h-6 bg-tanki-orange"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-tanki-yellow rounded-full animate-pulse"></div>
            <span className="font-roboto-mono text-tanki-yellow">ARTIST</span>
          </div>
          <div className="w-1 h-6 bg-tanki-orange"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-tanki-orange rounded-full animate-pulse"></div>
            <span className="font-roboto-mono text-tanki-orange">TANK COMMANDER</span>
          </div>
        </div>
        
        {/* Health Bar UI Element */}
        <div className="flex justify-center animate-slide-up">
          <div className="w-64 md:w-96 space-y-2">
            <div className="flex justify-between text-sm font-roboto-mono">
              <span>ARMOR</span>
              <span>100%</span>
            </div>
            <div className="health-bar"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator"></div>
    </section>
  );
}
