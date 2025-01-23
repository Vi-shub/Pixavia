import dynamic from 'next/dynamic';
import React from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Particle() {
  return (
    <main style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Desktop view */}
      <Spline
        scene="https://prod.spline.design/naeIOddvbnVnRfK6/scene.splinecode"
        className="desktop-view"
      />

      {/* Mobile view */}
      <Spline
        scene="https://prod.spline.design/vjWvcP1hcsjSz3WR/scene.splinecode"
        className="mobile-view"
      />

      <style>
        {`
          /* Desktop view: Visible on screens 768px and above */
          @media (min-width: 768px) {
            .mobile-view {
              display: none;
            }
            .desktop-view {
              display: block;
            }
          }

          /* Mobile view: Visible on screens below 768px */
          @media (max-width: 767px) {
            .desktop-view {
              display: none;
            }
            .mobile-view {
              display: block;
            }
          }
        `}
      </style>
    </main>
  );
}
