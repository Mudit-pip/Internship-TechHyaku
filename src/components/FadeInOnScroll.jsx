import React, { useRef, useEffect, useState } from "react";

const FadeInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
