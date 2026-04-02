import logo from "@/assets/meohelp-logo.png";

const Footer = () => (
  <footer className="py-10 bg-section-dark text-section-dark-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="meohelp" className="w-7 h-7" />
          <span className="text-lg font-bold text-primary">meohelp</span>
        </div>
        <p className="text-sm opacity-60">© 2025 meohelp. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
