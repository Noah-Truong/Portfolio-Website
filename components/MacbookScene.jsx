'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei';

const MODEL_URL = '/mac.glb';

function MacbookModel({ children }) {
  const { scene } = useGLTF(MODEL_URL);

  return (
    <group>
      <primitive object={scene} />
      <Html
        transform
        wrapperClass="macbook-html-wrapper"
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <div className="macbook-screen-inner">
          {children}
        </div>
      </Html>
    </group>
  );
}

useGLTF.preload(MODEL_URL);

export default function MacbookScene({ children }) {
  return (
    <div className="macbook-canvas-wrapper">
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <MacbookModel>{children}</MacbookModel>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
