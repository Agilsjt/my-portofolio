import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const points = useRef();
  const positions = useMemo(() => {
    const count = 700;
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      values[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      values[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[i * 3 + 2] = radius * Math.cos(phi);
    }
    return values;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.045 + pointer.x * 0.16;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.08 - pointer.y * 0.12;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#FFFFFF" size={0.018} transparent opacity={0.62} sizeAttenuation />
    </points>
  );
}

function CursorLight() {
  const light = useRef();

  useFrame(({ pointer }) => {
    if (!light.current) return;
    light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, pointer.x * 3.2, 0.08);
    light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, pointer.y * 2.2, 0.08);
  });

  return <pointLight ref={light} position={[0, 0, 3]} intensity={1.45} color="#75F0B7" distance={7} />;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      eventPrefix="client"
    >
      <ambientLight intensity={0.75} />
      <pointLight position={[3, 4, 4]} intensity={2.1} color="#3DE7FF" />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color="#FF6B9E" />
      <CursorLight />
      <Stars radius={36} depth={18} count={1100} factor={2.4} fade speed={0.35} />
      <ParticleField />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}
