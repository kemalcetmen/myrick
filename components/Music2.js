import React from 'react'
import {useRef , useEffect} from 'react'

function Music2({playy}) {
  const  sendsmt = useRef()
  const  twerk = useRef()
  const  wubba = useRef()
  const  thank = useRef()
  const  eatshit = useRef()
  const  burp = useRef()

  useEffect(() =>{
    if(playy!=='normal'){
      switch(playy) {
        case 'twerk':
          twerk.current.play()
          break;
        case 'sendsmt':
            sendsmt.current.play()
          break;
        case 'wubba':
            wubba.current.play()
          break;
        case 'thank':
            thank.current.play()
          break;  
        case 'burp':
            burp.current.play()
          break;  
        case 'eatshit':
            eatshit.current.play()
          break;
      }
    }    
    return ()=>{
      switch(playy) {
        case 'twerk':
            twerk.current.currentTime=0
            twerk.current.pause()
          break;
        case 'sendsmt':
            sendsmt.current.currentTime=0
            sendsmt.current.pause()
        case 'wubba':
            wubba.current.currentTime=0
            wubba.current.pause()
          break;
        case 'thank':
            thank.current.currentTime=0
            thank.current.pause()
          break;
        case 'burp':
            burp.current.currentTime=0
            burp.current.pause()
          break;  
        case 'eatshit':
            eatshit.current.currentTime=0
            eatshit.current.pause()
          break;  
      }
    }
},[playy])    
  return (
    <div>
      <audio
        preload="auto"
        ref={twerk} 
        src={'twerk.mp3'}
        autoPlay={false}
        loop={true}
        />
        <audio
        preload="auto"
        ref={thank} 
        src={'thank.mp3'}
        autoPlay={false}
        loop={false}
        />
        <audio
        preload="auto"
        ref={sendsmt} 
        src={'sendsmt.mp3'}
        autoPlay={false}
        loop={false}
        />
        <audio
        preload="auto"
        ref={wubba} 
        src={'wubba.mp3'}
        autoPlay={false}
        loop={false}
        />
        <audio
        preload="auto"
        ref={burp} 
        src={'burp.mp3'}
        autoPlay={false}
        loop={false}
        />
        <audio
        preload="auto"
        ref={eatshit} 
        src={'eatshit.mp3'}
        autoPlay={false}
        loop={false}
        />
    </div>
  )
}

export default Music2