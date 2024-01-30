import React, {useRef, useState} from 'react'
import { Box, useAnimations, useGLTF, useScroll } from '@react-three/drei'
import Overlays from "./Overlays"
import { useFrame } from '@react-three/fiber'


const Model = ()=>{
    const img = useGLTF("./fitnessguy.glb")
    const {mixer,actions} = useAnimations(img.animations,img.scene);
    const scroll = useScroll();
    const imgRef = useRef()
    const [hasTurned,setHasTurned] = useState(false);

    console.log(img)
    

    useFrame(()=>{
        img.animations.forEach(animation=>{
            if(scroll.offset < .25){
                console.log(scroll.offset)

            if(animation.name  == "Stretching"){
            const action = mixer.clipAction(animation);
            action.play();
            }
        }
            else if(scroll.offset > .25 && scroll.offset < .5){
                const stretchingAction = mixer.clipAction(img.animations.find(a => a.name === "Stretching"));
                console.log(stretchingAction.timeScale)
                if (stretchingAction.timeScale !== 0) {
                    console.log("KILLED animation!")
                    stretchingAction.timeScale = 0;
                    mixer.stopAllAction();
                }
    
                if(animation.name  == "JumpingJacks"){
                    const action = mixer.clipAction(animation);
                    action.play();
                    }
            }

            else if(scroll.offset > .5 && scroll.offset < .75){
                const stretchingAction = mixer.clipAction(img.animations.find(a => a.name === "JumpingJacks"));
                console.log(stretchingAction.timeScale)
                if (stretchingAction.timeScale !== 0) {
                    console.log("KILLED animation!")
                    stretchingAction.timeScale = 0;
                    mixer.stopAllAction();
                }
    
                if(animation.name  == "RunningInPlace"){
                    if(!hasTurned){
                    imgRef.current.rotation.y+= Math.PI * -.1
                    setHasTurned(true);
                    }
                    const action = mixer.clipAction(animation);
                    action.play();
                    }
            }
            else{
                const stretchingAction = mixer.clipAction(img.animations.find(a => a.name === "RunningInPlace"));
                console.log(stretchingAction.timeScale)
                if (stretchingAction.timeScale !== 0) {
                    console.log("KILLED animation!")
                    stretchingAction.timeScale = 0;
                    mixer.stopAllAction();
                }
    
                if(animation.name  == "PushUps"){
                    if(!hasTurned){
                    imgRef.current.rotation.y+= Math.PI * -.1
                    setHasTurned(true);
                    }
                    const action = mixer.clipAction(animation);
                    action.play();
                    }
            }
        
        })

        
    })


    return (
        <group ref={imgRef}>
            <pointLight/>
            <directionalLight position={[0,1,1]}/>
            <primitive scale={.3} position={[0,-1,0]} object={img.scene}/>

        </group>
    )
}

const Experience = () => {
  return (
    <>
    <Model/>
    <Overlays/>
    </>
  )
}

export default Experience