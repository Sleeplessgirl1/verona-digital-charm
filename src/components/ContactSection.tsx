import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const schedule = [
  { day: "Lunes a Viernes", hours: "8:00 AM – 9:40 PM" },
  { day: "Sábado", hours: "8:00 AM – 6:40 PM" },
  { day: "Domingo", hours: "8:00 AM – 2:00 PM" },
];

const ContactSection = () => (
  <section id="contacto" className="py-20 bg-card coffee-beans-bg">
    <div className="container max-w-4xl">
      <p className="text-gold uppercase tracking-[0.25em] text-sm text-center mb-2">Contáctanos</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-cream text-center mb-12">
        Estamos para Servirte
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact actions */}
        <div className="space-y-4">
          <a href="tel:+526142622334" className="flex items-center gap-4 p-5 rounded-lg border border-border bg-muted/30 hover:border-gold/40 transition-colors group">
            <Phone className="text-gold" size={24} />
            <div>
              <p className="text-cream font-semibold group-hover:text-gold transition-colors">Llamar</p>
              <p className="text-muted-foreground text-sm">+52 614 262 2334</p>
            </div>
          </a>
          <a href="https://wa.me/526142622334" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-lg border border-border bg-muted/30 hover:border-gold/40 transition-colors group">
            <MessageCircle className="text-gold" size={24} />
            <div>
              <p className="text-cream font-semibold group-hover:text-gold transition-colors">WhatsApp</p>
              <p className="text-muted-foreground text-sm">Enviar mensaje</p>
            </div>
          </a>
          <a href="mailto:veronacafe@outlook.com" className="flex items-center gap-4 p-5 rounded-lg border border-border bg-muted/30 hover:border-gold/40 transition-colors group">
            <Mail className="text-gold" size={24} />
            <div>
              <p className="text-cream font-semibold group-hover:text-gold transition-colors">Email</p>
              <p className="text-muted-foreground text-sm">veronacafe@outlook.com</p>
            </div>
          </a>
        </div>

        {/* Schedule */}
        <div className="p-6 rounded-lg border border-border bg-muted/30">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-gold" size={24} />
            <h3 className="font-display text-xl text-cream font-semibold">Horarios</h3>
          </div>
          <div className="space-y-4">
            {schedule.map((s, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                <span className="text-cream text-sm">{s.day}</span>
                <span className="text-gold font-medium text-sm">{s.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border/50">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Servicios</p>
            <div className="flex flex-wrap gap-2">
              {["Dine-in", "Terraza", "Para llevar"].map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
