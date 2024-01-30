import './App.css'
import {Canvas} from "@react-three/fiber"
import {ScrollControls} from "@react-three/drei"
import Experience from './Experience'

function App() {

  return (
    <div className="app">
      <Canvas>
        <color attach="background" args={["black"]}/>
        <ambientLight/>
        <ScrollControls pages={5}>
        <Experience/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
