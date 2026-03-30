import { useState } from "react";
import { Coffee, UtensilsCrossed, CakeSlice, GlassWater, Sandwich } from "lucide-react";
import foodBreakfast from "@/assets/food-breakfast.jpg";
import foodCoffee from "@/assets/food-coffee.jpg";
import foodBurger from "@/assets/food-burger.jpg";

const categories = [
  { id: "desayunos", label: "Desayunos", icon: UtensilsCrossed },
  { id: "cafes", label: "Cafés", icon: Coffee },
  { id: "bebidas", label: "Bebidas", icon: GlassWater },
  { id: "platillos", label: "Platillos", icon: Sandwich },
  { id: "postres", label: "Postres", icon: CakeSlice },
];

type MenuItem = { name: string; desc: string; price: string; badge?: string };

const menuData: Record<string, { items: MenuItem[]; img?: string }> = {
  desayunos: {
    img: foodBreakfast,
    items: [
      { name: "Chilaquiles Verona", desc: "Totopos bañados en salsa roja o verde, crema, queso y huevo al gusto", price: "$95" },
      { name: "Huevos Rancheros", desc: "Huevos estrellados sobre tortilla con salsa ranchera y frijoles", price: "$85" },
      { name: "Molletes Especiales", desc: "Pan artesanal con frijoles, queso gratinado y pico de gallo", price: "$75" },
      { name: "Omelette del Chef", desc: "Huevos rellenos de jamón, champiñones, queso y espinaca", price: "$110" },
      { name: "Hot Cakes Clásicos", desc: "Tres hot cakes esponjosos con miel de maple y mantequilla", price: "$80" },
    ],
  },
  cafes: {
    img: foodCoffee,
    items: [
      { name: "Americano", desc: "Espresso doble con agua caliente", price: "$45" },
      { name: "Cappuccino", desc: "Espresso con leche vaporizada y espuma", price: "$55" },
      { name: "Latte Verona", desc: "Espresso con leche cremosa y toque de vainilla", price: "$60" },
      { name: "Mocha", desc: "Espresso, chocolate y leche vaporizada con crema", price: "$65" },
      { name: "Espresso Doble", desc: "Shot doble de café de especialidad", price: "$40" },
    ],
  },
  bebidas: {
    items: [
      { name: "Smoothie de Frutas", desc: "Mezcla de frutas tropicales con yogurt natural", price: "$70" },
      { name: "Limonada Natural", desc: "Limón fresco, hielo y un toque de hierbabuena", price: "$40" },
      { name: "Frappe de Café", desc: "Café frío blended con hielo y crema", price: "$65" },
      { name: "Té Chai Latte", desc: "Té chai especiado con leche caliente y canela", price: "$55" },
      { name: "Agua de Horchata", desc: "Bebida artesanal de arroz con canela", price: "$35" },
    ],
  },
  platillos: {
    img: foodBurger,
    items: [
      { name: "Hamburguesa Especial 2KL", desc: "Doble carne, queso cheddar, tocino y aderezo especial", price: "$145", badge: "🔥 Martes y Jueves" },
      { name: "Club Sandwich", desc: "Triple piso de jamón, pollo, tocino, lechuga y tomate", price: "$120" },
      { name: "Ensalada César", desc: "Lechuga romana, pollo a la plancha, crutones y parmesano", price: "$110" },
      { name: "Wrap de Pollo", desc: "Tortilla de harina con pollo, aguacate y aderezo ranch", price: "$105" },
      { name: "Pasta Alfredo", desc: "Fettuccine con salsa cremosa de parmesano y pollo", price: "$130" },
    ],
  },
  postres: {
    items: [
      { name: "Cheesecake del Día", desc: "Rebanada de cheesecake artesanal con coulis de frutos", price: "$75" },
      { name: "Brownie con Helado", desc: "Brownie tibio de chocolate oscuro con helado de vainilla", price: "$80" },
      { name: "Tiramisú", desc: "Postre italiano clásico con mascarpone y café", price: "$85" },
      { name: "Flan Napolitano", desc: "Flan casero con caramelo y un toque de vainilla", price: "$55" },
    ],
  },
};

const MenuSection = () => {
  const [active, setActive] = useState("desayunos");
  const current = menuData[active];

  return (
    <section id="menu" className="py-20 coffee-beans-bg">
      <div className="container">
        <p className="text-gold uppercase tracking-[0.25em] text-sm text-center mb-2">Nuestro Menú</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream text-center mb-12">
          Sabores que Enamoran
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-md text-sm uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-gold text-secondary-foreground font-semibold"
                    : "border border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu content */}
        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="space-y-1">
            {current.items.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4 py-4 border-b border-border/50 group">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">{item.name}</h3>
                    {item.badge && (
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">{item.badge}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
                <span className="text-gold font-display text-lg font-semibold whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          {current.img && (
            <div className="hidden md:block rounded-lg overflow-hidden">
              <img src={current.img} alt={active} loading="lazy" width={800} height={600} className="w-full h-[450px] object-cover rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
