import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const initialParticles = Array.from({ length: 300 }, (_, i) => {
  const t = pseudoRandom(i * 1.1 + 1) * 100;
  const factor = 20 + pseudoRandom(i * 2.3 + 2) * 100;
  const speed = 0.01 + pseudoRandom(i * 3.7 + 3) / 200;
  const xFactor = -50 + pseudoRandom(i * 4.9 + 4) * 100;
  const yFactor = -50 + pseudoRandom(i * 5.1 + 5) * 100;
  const zFactor = -50 + pseudoRandom(i * 6.3 + 6) * 100;
  return { t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 };
});

const Particles = () => {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => initialParticles.map((p) => ({ ...p })), []);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.05, 8]} />
      <meshBasicMaterial color="#E1DACB" transparent opacity={0.3} />
    </instancedMesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
