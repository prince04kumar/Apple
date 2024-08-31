import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import React from "react";
import "./style.css";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <div className="App">
      <div className="auto">
        <div className="overlay-text neon-text">macbook pro.</div>
        <p >
        The MacBook Pro is Apple's high-performance laptop line<br/> designed for professional users.
        </p>
      </div>
      
      <div className="canvas-container">
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <OrbitControls />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
