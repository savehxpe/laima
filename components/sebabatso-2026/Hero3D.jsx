"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function GemHat() {
  const meshRef = useRef(null);
  const { pointer } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
      const originalY = y;
      const stretch = 1 + Math.max(0, y) * 0.4;
      y *= stretch;
      const taper = 1 - Math.max(0, originalY) * 0.15;
      x *= taper;
      z *= taper;
      pos.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
    const targetX = (pointer.x * Math.PI) / 6;
    const targetZ = (pointer.y * Math.PI) / 6;
    meshRef.current.rotation.x += (targetZ - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.z += (targetX - meshRef.current.rotation.z) * 0.02;
  });

  return (
    <group ref={meshRef} position={[0, 0.3, 0]}>
      <mesh geometry={geometry} castShadow>
        <meshPhysicalMaterial
          color="#F5C454"
          emissive="#E29A2B"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.15}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshPhysicalMaterial
          color="#FFD675"
          emissive="#F5C454"
          emissiveIntensity={0.8}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.6 + Math.sin(i * 1.7) * 0.2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              0.1 + Math.sin(i * 0.9) * 0.15,
              Math.sin(angle) * radius,
            ]}
          >
            <octahedronGeometry args={[0.08, 0]} />
            <meshPhysicalMaterial
              color="#FFEAA7"
              emissive="#F5C454"
              emissiveIntensity={0.5}
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Particles({ count = 120 }) {
  const ref = useRef(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#F5C454"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 6]} intensity={1.2} />
          <directionalLight position={[-3, 2, -4]} intensity={0.4} color="#F5C454" />
          <pointLight position={[0, 3, 2]} intensity={0.8} color="#F5C454" />
          <pointLight position={[0, -1, -3]} intensity={0.3} color="#E29A2B" />
          <GemHat />
          <Particles />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
