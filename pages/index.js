import React, { Suspense,useState,useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import Music2 from '../components/Music2'
import Rotate from '../components/Rotate'
import Social from '../dialog/Social'
import References from '../dialog/References'
import SendSomething from '../dialog/SendSomething'
import Projects from '../dialog/Projects'
import Snackbar from '@mui/material/Snackbar';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/ALLIN'),
  { ssr: false }
)

export default function Home() {
  const [unvisible,setUnvisible] = useState('')
  const [istwerk,setIstwerk] = useState(false)
  const [action,setAction] = useState('normal')
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const changeRick = (e) => {
    setAction(e)
  }
  const twerk = () => {
    setIstwerk(!istwerk)
    setDisabled(true)
    setTimeout(()=>{setDisabled(false)},700)
    if(istwerk){
      setAction('normal')
    }else{
      setAction('twerk')
    }    
  }

  const burp = () => {
    setAction('burp')
  }
  useEffect(() => {
    if(action=='burp'){
      let burpTimer = setTimeout(() =>{
        setAction('normal')
      },834)}
      return ()=>{
        clearTimeout(burpTimer)
      }
    },[action])

    useEffect(() => {
    if(action=='twerk'){
      setUnvisible('invisible')
      }else{setUnvisible('')}},[disabled])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
         <Snackbar
              sx={{
                width: 250,
                mb:-2,
                ml:-2
              }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={"made for educational purposes"}
              />
    <Music2 className='hidden ' playy={action}></Music2>
     <div className=" flex flex-col lg:flex-row w-screen h-screen bg ">
          <div className={`${unvisible}  flex lg:flex-col justify-between basis-1/6 lg:basis-1/4 `}>
           <div className="self-center ">
            <Social className="" rick={changeRick}></Social>
           </div> 
           <div className=" self-center">
            <References className=" " rick={changeRick}></References>
           </div> 
           <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="gooey">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="5"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  result="highContrastGraphic"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                ></feColorMatrix>
                <feComposite
                  in="SourceGraphic"
                  in2="highContrastGraphic"
                  operator="atop"
                ></feComposite>
              </filter>
            </defs>
          </svg>
         {/*button style owner https://codepen.io/Unleashed-Design/pen/gOrEvMV */}
          <button id="gooey-button" onClick={()=>{burp()}} className="text-xs  lg:h-28 lg:w-28 h-16 w-16 
          lg:text-3xl rounded-3xl self-center">
            BURP
            <span className="bubbles">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
            </span>
          </button>
              <div></div>
          </div>
            <Canvas>
              <Rotate action={action}/>
              <ambientLight intensity={0.4} />
              <directionalLight intensity={0.7} position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <DynamicComponentWithNoSSR modell={action}/>
              </Suspense>
            </Canvas>

          <div className="basis-1/6 lg:basis-1/4 flex lg:flex-col justify-between ">
            <div className={unvisible}>
              <SendSomething rick={changeRick}></SendSomething>
            </div>
            <div className={unvisible}>
              <Projects rick={changeRick}></Projects>
            </div>

              <button onClick={twerk}  disabled={disabled} className={` lg:self-center
                  h-16 w-16  lg:h-28 lg:w-28 dance-button -mr-5 lg:mr-0 border-none
                  text-base  lg:text-3xl  outline-none text-white text-center rounded-3xl
                  ${!istwerk ? "bg-[#3e8e41] shadow-[0_8px_rgb(153,153,153)] lg:shadow-[0_10px_rgba(153,153,153,1)]"
                  : "bg-[#ff0c0c] shadow-[0_2px_rgb(153,153,153)] translate-y-1.5 lg:translate-y-2" }`}>
                    {`${!istwerk ? "DANCE" : "STOP"}`}
              </button>
              <button onClick={handleClick} className= {`${unvisible} h-4 w-4 rounded-full bg-white self-end text-xs  mr-1 mb-1`}>i</button>
         
          </div>
      </div>
    </>
  )
}
