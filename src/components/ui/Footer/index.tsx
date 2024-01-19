const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">TV Shows Explorer</h3>
          <p>Discover your next favorite show</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Developed by Naderjlyr</p>
          <p className="text-sm">&copy; {currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
