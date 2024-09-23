import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus, Cylinder, Cone } from "@react-three/drei";
import styles from "./Shapes.module.css"; // Import CSS module for styling

// Component for individual floating shapes
function FloatingShape({ children, position, speed }) {
  const ref = useRef();

  // Animation using useFrame
  useFrame(() => {
    const time = Date.now() * 0.0003; // Slower by reducing the time multiplier
    if (ref.current) {
      // Wider range of motion by increasing the multiplier for position values
      ref.current.position.x = Math.sin(time * speed) * position[0]; // Control range in x-axis
      ref.current.position.y = Math.cos(time * speed) * position[1]; // Control range in y-axis
      ref.current.position.z = Math.sin(time * speed) * position[2]; // Control range in z-axis

      // Slow down the rotation as well
      ref.current.rotation.x += 0.0025;
      ref.current.rotation.y += 0.0025;
      ref.current.rotation.z += 0.0025;
    }
  });

  return <mesh ref={ref}>{children}</mesh>;
}

function Shapes() {
  return (
    <div className={styles.floatingShapes}>
      <Canvas className={styles.canvas} camera={{ position: [0, 0, 50] }}>
        {" "}
        {/* Camera farther back */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Reduce the position values to bring shapes closer */}
        <FloatingShape position={[30, 30, 15]} speed={0.05}>
          {" "}
          {/* Closer */}
          <Sphere args={[5, 32, 32]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.3} />
          </Sphere>
        </FloatingShape>
        <FloatingShape position={[35, -30, 15]} speed={0.05}>
          {" "}
          {/* Closer */}
          <Box args={[5, 5, 5]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.3} />
          </Box>
        </FloatingShape>
        <FloatingShape position={[-30, 30, 15]} speed={0.05}>
          {" "}
          {/* Closer */}
          <Torus args={[5, 1.5, 16, 100]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.3} />
          </Torus>
        </FloatingShape>
        <FloatingShape position={[40, 25, -15]} speed={0.05}>
          {" "}
          {/* Closer */}
          <Cylinder args={[3, 3, 7, 32]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.3} />
          </Cylinder>
        </FloatingShape>
        <FloatingShape position={[-40, -30, 10]} speed={0.05}>
          {" "}
          {/* Closer */}
          <Cone args={[4, 8, 32]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.3} />
          </Cone>
        </FloatingShape>
      </Canvas>
    </div>
  );
}

export default Shapes;
