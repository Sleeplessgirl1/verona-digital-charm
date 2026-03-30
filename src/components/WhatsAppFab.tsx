import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/526142622334"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Enviar WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} className="text-secondary-foreground" />
  </a>
);

export default WhatsAppFab;
