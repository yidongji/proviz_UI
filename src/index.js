// regl-worldview example: GLTFScene
// docs: https://cruise-automation.github.io/webviz/worldview/#/docs/commands/gltfscene

import ReactDOM from "react-dom";
import React, { useState } from "react";
import Worldview, {
  Axes,
  Grid,
  GLTFScene,
  DEFAULT_CAMERA_STATE
} from "regl-worldview";

import cesiumManModel from "../utils/Models/rectangle.glb";
import duckModel from "../utils/Models/Duck.glb"; // URL pointing to a .glb file

function Example() {
  const [swapped, setSwapped] = useState(false);
  return (
    <Worldview
      defaultCameraState={{
        ...DEFAULT_CAMERA_STATE,
        distance: 25,
        thetaOffset: (-3 * Math.PI) / 4
      }}
    >
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => setSwapped(!swapped)}
      >
        Swap Models
      </button>
      <Axes />
      <Grid />
      <GLTFScene model={swapped ? cesiumManModel : duckModel}>
        {{
          pose: {
            position: { x: 0, y: -3, z: 0 },
            orientation: { x: 0.85, y: 0.58, z: -0.41, w: 1 }
          },
          scale: { x: 3, y: 3, z: 3 }
        }}
      </GLTFScene>
      <GLTFScene model={swapped ? duckModel : cesiumManModel}>
        {{
          pose: {
            position: { x: 0, y: 3, z: 0 },
            orientation: { x: 0, y: 0, z: 1, w: 0 }
          },
          scale: { x: 3, y: 3, z: 3 }
        }}
      </GLTFScene>
    </Worldview>
  );
}

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Example />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
