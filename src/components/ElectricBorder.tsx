'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ElectricBorderProps {
  children?: ReactNode;       // <- إضافة children
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
}

export default function ElectricBorder({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 1,
  thickness = 2,
  className = '',
}: ElectricBorderProps) {
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
    <div className={className}>
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          stroke={color}
          strokeWidth={thickness}
          className="dy-anim"
        >
          <animate
            attributeName="y2"
            values="0;100;0"
            dur={`${0.5 / speed}s`}
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke={color}
          strokeWidth={thickness}
          className="dx-anim"
        >
          <animate
            attributeName="x2"
            values="0;100;0"
            dur={`${0.5 / speed}s`}
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* عرض أي محتوى داخل ElectricBorder */}
      {children}
    </div>
  );
}
