const BackgroundLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(9)].map((_, i) => (
        <span
          key={i}
          className="absolute top-0 h-full w-px bg-foreground/5"
          style={{
            left: `${(i + 1) * 10}%`,
            animation: `leftRight 18s infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLines;
