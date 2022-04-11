import { useRef} from "react";
import {  useFrame } from "@react-three/fiber";

export default function Rotate({action}) {
  //212 for one tour (i guess)
    const angle = useRef(-Math.PI/150)
    const radius = 4
    const refC = useRef(
      {
        x:0,
        y:3.8,
        z:radius,
      }
    );
    useFrame(( state ) =>  {    
      state.camera.lookAt(0,2.9,0)
      if(state.camera.position.x!==refC.current.x||state.camera.position.y!==refC.current.y||state.camera.position.z!==refC.current.z){
        state.camera.position.set(refC.current.x,refC.current.y,refC.current.z)
      }
      if(action=='twerk')
      {angle.current+=Math.PI/150
        refC.current.x=Math.sin(angle.current)*radius
        refC.current.z=Math.cos(angle.current)*radius
      }else{
        if(refC.current.x!==0 || refC.current.z!==radius || angle.current !== -Math.PI/150){
          refC.current.x=0
          refC.current.z=radius
          angle.current = -Math.PI/150
        }}})
        return null
  }