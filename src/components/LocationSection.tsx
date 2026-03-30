const LocationSection = () => (
  <section id="ubicacion" className="py-20">
    <div className="container">
      <p className="text-gold uppercase tracking-[0.25em] text-sm text-center mb-2">Encuéntranos</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-cream text-center mb-4">Ubicación</h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">
        Ortiz de Campos 2101 Local 5 y Ramírez Calderón, en contra esquina de Fonacot, Col. San Felipe, CP 31203, Chihuahua, México
      </p>

      <div className="rounded-lg overflow-hidden border border-border max-w-4xl mx-auto">
        <iframe
          title="Ubicación de Verona Café"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.0!2d-106.09!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzAwLjAiTiAxMDbCsDA1JzI0LjAiVw!5e0!3m2!1ses!2smx!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </div>
  </section>
);

export default LocationSection;
