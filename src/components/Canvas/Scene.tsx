import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function Scene() {
  return (
    <Canvas className="w-full h-screen">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.5} levels={9} mipmapBlur />
        </EffectComposer>
        
        {/* Scene content will go here */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00ff88" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}