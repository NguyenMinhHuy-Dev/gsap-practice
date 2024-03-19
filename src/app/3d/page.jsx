"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Model = (props) => {
  const { scene } = useGLTF("/models/scene.gltf");

  return <primitive object={scene} {...props} />;
};

const Page = () => {
  return (
    <main className="w-screen relative">
      <Canvas shadows>
        <ambientLight intensity={50} />
        <OrbitControls />
        <Model scale={[0.6, 0.6, 0.6]} />
      </Canvas>

      <div className="fixed z-10 top-0 left-0 w-full min-h-[300vh] overflow-y-auto">
        <div className="w-full h-screen bg-red-50 opacity-15"></div>
        <div className="w-full h-screen bg-blue-50 opacity-15"></div>
      </div>
    </main>
  );
};

export default Page;
