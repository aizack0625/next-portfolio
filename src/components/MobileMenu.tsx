const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed top-16 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col items-center justify-center h-full">
        {["Home", "Abouts", "Skills", "Works"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-2xl py-8 hover:text-gray-600 transition-colors block w-full text-center"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};
