import React, {useState} from 'react'
import {Scroll,useScroll} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'


const Overlay=({className,children})=>{

    // console.log(className)

    return (
        <div className={`overlay-section flex ${className}`}>
            {children}
        </div>
    )
}

const Overlays = () => {
    const [opacityOne,setOpacityOne] = useState(0)
    const [opacityTwo,setOpacityTwo] = useState(0)
    const [opacityThree,setOpacityThree] = useState(0)
    const [opacityFour,setOpacityFour] = useState(0)
    const [opacityFive,setOpacityFive] = useState(0)
    const scroll = useScroll();

    useFrame(()=>{
        setOpacityOne(scroll.range(0/5,1/5))
        setOpacityTwo(scroll.range(1/5,1/5))
        setOpacityThree(scroll.range(2/5,1/5))
        setOpacityFour(scroll.range(3/5,1/5))
        setOpacityFive(scroll.range(4/5,1/5))
        // setOpacityOne(scroll.range(5/5,1/5))
    })
  return (
    <Scroll style={{border:'2px solid white',width:'100%'}} html>
        <Overlay className="first">
            <div style={{opacity:opacityOne}}>
                <h1>Welcome There</h1>
                <p>Lets start with some basic stretches!</p>
            </div>
        </Overlay>
        <Overlay className="last">
            <div style={{opacity:opacityTwo}}>
                <h1>Onto Jumping Jacks</h1>
                <p>Time to get that blood pumping a bit!</p>
            </div>
        </Overlay>
        <Overlay className="first">
             <div style={{opacity:opacityThree}}>
                <h1>A little running in place</h1>
                <p>Blood should be flowing and that heart rate getting up there!</p>
            </div>
        </Overlay>
        <Overlay className="last">
            <div style={{opacity:opacityFour}}>
                <h1>Push up time!</h1>
                <p>Good form, great results! 💪</p>
            </div>
        </Overlay>
        <Overlay className="first">
             <div style={{opacity:opacityFive}}>
                <h1>Switch to sit ups!</h1>
                <p>Time to drill that core a bit!</p>
            </div>
        </Overlay>
    </Scroll>
  )
}

export default Overlays