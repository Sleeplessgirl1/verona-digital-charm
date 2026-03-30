import { MapPin, Clock, Users } from "lucide-react";

const features = [
  { icon: MapPin, title: "Ubicación Ideal", desc: "Col. San Felipe, Chihuahua" },
  { icon: Clock, title: "Abierto Diario", desc: "Desde las 8:00 AM" },
  { icon: Users, title: "Ambiente Único", desc: "Acogedor y elegante" },
];

const AboutSection = () => (
  <section id="nosotros" className="py-20 bg-card coffee-beans-bg">
    <div className="container max-w-4xl text-center">
      <p className="text-gold uppercase tracking-[0.25em] text-sm mb-2">Sobre Nosotros</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
        Un Rincón de Sabor en Chihuahua
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        Verona Café & Restaurante es un espacio pensado para quienes disfrutan de un buen café de especialidad,
        desayunos hechos con ingredientes frescos y platillos con sabor casero. Nuestro ambiente combina
        elegancia y calidez para que cada visita sea una experiencia memorable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="p-6 rounded-lg border border-border bg-muted/30 hover:border-gold/40 transition-colors">
              <Icon className="mx-auto mb-3 text-gold" size={28} />
              <h3 className="font-display text-cream font-semibold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
