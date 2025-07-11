export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-tanki-orange to-tanki-yellow rounded-full animate-particle"
          style={{
            left: `${10 + i * 10}%`,
            animationDuration: `${18 + i * 3}s`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
