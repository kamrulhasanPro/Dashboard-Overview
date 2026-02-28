const Button = ({ label, icon, variant = "primary", onClick, className }) => {
  const styles = {
    primary:
      "bg-gradient-to-br from-[#1a7a4a] to-[#2db36e] text-white hover:from-[#155e3a] hover:to-[#259e5e] active:scale-95 ",
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary/10 active:scale-95",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors cursor-pointer duration-400 ${styles[variant]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
