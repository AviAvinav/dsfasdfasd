"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  usePlane,
  useContactMaterial,
  useBox,
  Physics,
} from "@react-three/cannon";
import { HTMLMesh } from "three/examples/jsm/Addons.js";
import { DoubleSide, Material, TextureLoader } from "three";
import { useState } from "react";
import cloth from "./cloth.jpg";

function Plane() {
  const [mass, setMass] = useState(10);
  const [ref] = usePlane<HTMLMesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: mass,
    onCollide: () => setMass(10),
  }));
  const colorMap = useLoader(TextureLoader, "/cloth.png");
  return (
    <mesh
      ref={ref}
      onClick={() => {
        setMass(10);
        console.log("touch");
      }}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        side={DoubleSide}
        map={colorMap}
        map-repeat={[240, 240]}
      />
      <ambientLight intensity={0.2} />
      <directionalLight color="red" position={[0, 0, 100]} />
    </mesh>
  );
}

function Cube() {
  const [ref] = useBox<HTMLMesh>(() => ({ mass: 100, position: [0, 5, 0] }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <ambientLight intensity={0.2} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </mesh>
  );
}

function Cloth() {
  // make a cloth material using plane
  const [ref] = usePlane<HTMLMesh>(() => ({
    rotation: [Math.PI / 2, 100, 100],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  );
}
export default function Home() {
  return (
    <div className="bg-bla h-screen">
      <Canvas>
        <Physics>
          <Plane />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
