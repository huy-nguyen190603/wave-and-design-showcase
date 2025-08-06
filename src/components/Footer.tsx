const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <button 
          onClick={scrollToTop}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;