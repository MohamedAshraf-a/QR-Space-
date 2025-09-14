"use client";

export default function StarsBackground() {
  return (
    <div className="stars pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
}
