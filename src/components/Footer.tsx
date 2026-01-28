const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tarun Ajitkumar. All rights reserved.
        </p>
        <p className="font-body text-muted-foreground text-sm">
          Built with passion and purpose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
