interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
      onClick={onClick}
    >
      {isOpen ? (
        <div className="relative w-8 h-8">
          <span className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
          <span className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
        </div>
      ) : (
        <>
          <span className="w-8 h-0.5 bg-black mb-1.5"></span>
          <span className="w-8 h-0.5 bg-black mb-1.5"></span>
          <span className="w-8 h-0.5 bg-black"></span>
        </>
      )}
    </button>
  );
};
