'use client';

import { useEffect, useRef } from 'react';

export default function ElectricBorder() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const dyAnims: SVGAnimationElement[] = Array.from(
      svgRef.current.querySelectorAll('.dy-anim')
    ) as SVGAnimationElement[];

    const dxAnims: SVGAnimationElement[] = Array.from(
      svgRef.current.querySelectorAll('.dx-anim')
    ) as SVGAnimationElement[];

    const runAnimation = () => {
      requestAnimationFrame(() => {
        [...dyAnims, ...dxAnims].forEach(a => {
          const anim = a as SVGAnimationElement;
          if (typeof anim.beginElement === 'function') {
            try {
              anim.beginElement();
            } catch {}
          }
        });
      });
    };

    const interval = setInterval(runAnimation, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* مثال على خطوط كهربائية عمودية */}
      <line
        x1="50"
        y1="0"
        x2="50"
        y2="100"
        stroke="#8b5cf6"
        strokeWidth="2"
        className="dy-anim"
      >
        <animate
          attributeName="y2"
          values="0;100;0"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>

      {/* مثال على خطوط كهربائية أفقية */}
      <line
        x1="0"
        y1="50"
        x2="100"
        y2="50"
        stroke="#3b82f6"
        strokeWidth="2"
        className="dx-anim"
      >
        <animate
          attributeName="x2"
          values="0;100;0"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}
