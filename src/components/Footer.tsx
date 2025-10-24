export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
