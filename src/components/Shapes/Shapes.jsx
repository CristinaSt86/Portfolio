import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";
import styles from "./Shapes.module.css"; // Import CSS module for styling

// Component for individual floating shapes
function FloatingShape({ children, position, speed }) {
  const ref = useRef();

  // Animation using useFrame
  useFrame(() => {
    const time = Date.now() * 0.0003; // Slower by reducing the time multiplier
    if (ref.current) {
      // Wider range of motion by increasing the multiplier for position values
      ref.current.position.x = Math.sin(time * speed) * position[0] * 1; // Increase range in x-axis
      ref.current.position.y = Math.cos(time * speed) * position[1] * 1; // Increase range in y-axis
      ref.current.position.z = Math.sin(time * speed) * position[2] * 1; // Increase range in z-axis
      
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
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 0, 50] }} // Camera positioned farther back
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />

        {/* Shape with full 3D movement */}
        <FloatingShape position={[20, 20, 10]} speed={0.2}> {/* Wider and slower */}
          <Sphere args={[5, 32, 32]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.4} />
          </Sphere>
        </FloatingShape>

        <FloatingShape position={[25, -18, 10]} speed={0.15}> {/* Wider and slower */}
          <Box args={[5, 5, 5]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.4} />
          </Box>
        </FloatingShape>

        <FloatingShape position={[-20, 20, 10]} speed={0.1}> {/* Wider and slower */}
          <Torus args={[5, 1.5, 16, 100]}>
            <meshStandardMaterial color="#3747d6" transparent opacity={0.4} />
          </Torus>
        </FloatingShape>
      </Canvas>
    </div>
  );
}

export default Shapes;
