import heroBg from "@/assets/hero-cafe.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Interior de Verona Café" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-black/80" />

    <div className="relative z-10 container text-center px-4 animate-fade-in">
      <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Chihuahua, México</p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-4">
        VERONA<br />
        <span className="text-gold italic">Café & Restaurante</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-8">
        Sabores auténticos en un ambiente elegante y acogedor
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#menu" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-secondary-foreground font-semibold rounded-md hover:bg-gold-light transition-colors text-sm uppercase tracking-wider">
          Ver Menú
        </a>
        <a href="https://wa.me/526142622334" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-semibold rounded-md hover:bg-cream/10 transition-colors text-sm uppercase tracking-wider">
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
