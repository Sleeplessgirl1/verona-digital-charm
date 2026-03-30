const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container text-center">
      <p className="font-display text-cream text-lg mb-1">
        VERONA <span className="text-gold">Café & Restaurante</span>
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Verona Café & Restaurante. Chihuahua, México.
      </p>
    </div>
  </footer>
);

export default Footer;
