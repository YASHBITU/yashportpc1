
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  MeshTransmissionMaterial, 
  PerspectiveCamera,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';

// Fix: Local aliases for Three.js intrinsic elements to satisfy TypeScript JSX checks
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
// Fix: Added MeshBasicMaterial alias to fix intrinsic element error
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const Group = 'group' as any;
const PointLight = 'pointLight' as any;
const AmbientLight = 'ambientLight' as any;
const SpotLight = 'spotLight' as any;
const Fog = 'fog' as any;

const FloatingElements = () => {
  const count = 15;
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: 0.5 + Math.random() * 1.5,
      speed: 0.2 + Math.random() * 0.4,
      isWireframe: Math.random() > 0.7
    }));
  }, []);

  return (
    <Group>
      {elements.map((props, i) => (
        <Float key={i} speed={props.speed} rotationIntensity={1.5} floatIntensity={1}>
          <Mesh position={props.position} rotation={props.rotation} scale={props.scale}>
            <BoxGeometry args={[1, 1, 1]} />
            {props.isWireframe ? (
              // Fix: Using aliased MeshBasicMaterial to satisfy TypeScript JSX checks
              <MeshBasicMaterial wireframe color="#3b82f6" transparent opacity={0.15} />
            ) : (
              <MeshTransmissionMaterial 
                backside 
                samples={4} 
                thickness={1} 
                chromaticAberration={0.05} 
                anisotropy={0.1} 
                distortion={0.1} 
                distortionScale={0.1} 
                temporalDistortion={0.1} 
                color="#3b82f6" 
                transparent
                opacity={0.3}
              />
            )}
          </Mesh>
        </Float>
      ))}
    </Group>
  );
};

const Lights = () => {
  return (
    <>
      <AmbientLight intensity={0.1} />
      <PointLight position={[0, 0, 2]} intensity={10} color="#3b82f6" />
      <SpotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        castShadow 
        color="#ffffff" 
      />
      <SpotLight 
        position={[-10, -10, -10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        color="#3b82f6" 
      />
    </>
  );
};

const ThreeScene: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        
        <Lights />
        <FloatingElements />
        
        <Environment preset="night" />
        <ContactShadows 
          resolution={1024} 
          scale={20} 
          blur={2} 
          opacity={0.15} 
          far={10} 
          color="#000000" 
        />
        
        <Fog attach="fog" args={['#000000', 8, 25]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;