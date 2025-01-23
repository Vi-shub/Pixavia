import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Particle() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/naeIOddvbnVnRfK6/scene.splinecode" 
      />
    </main>
  );
}
