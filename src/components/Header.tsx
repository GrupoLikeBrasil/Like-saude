import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import logo from "@/assets/meohelp-logo.png";

const navItems = ["Sobre", "Como Funciona", "Planos", "Seja Consultor", "Para Clínicas", "Contato"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const sectionMap: Record<string, string> = {
    Sobre: "sobre",
    "Como Funciona": "como-funciona",
    Planos: "planos",
    "Seja Consultor": "consultor",
    "Para Clínicas": "clinicas",
    Contato: "contato",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="meohelp" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary">meohelp</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(sectionMap[item])}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors">
            <LogIn className="w-4 h-4" />
            Login
          </button>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border py-4 px-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(sectionMap[item])}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-primary"
            >
              {item}
            </button>
          ))}
          <button className="flex items-center gap-1 text-sm font-medium text-primary">
            <LogIn className="w-4 h-4" />
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
