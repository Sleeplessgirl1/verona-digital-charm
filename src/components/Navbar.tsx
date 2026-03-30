import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-verona.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio">
          <img src={logo} alt="Verona Café & Restaurante" className="h-10" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+526142622334" className="hidden md:flex items-center gap-2 text-sm text-gold">
          <Phone size={14} />
          614 262 2334
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream" aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <ul className="flex flex-col items-center gap-4 pt-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-foreground hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+526142622334" className="flex items-center gap-2 text-gold font-medium">
                <Phone size={14} /> 614 262 2334
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
