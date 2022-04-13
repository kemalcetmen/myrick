import {useState} from "react";
import Dialogs from '../components/Dialogs'
import Image from 'next/image'
import Snackbar from '@mui/material/Snackbar';

export default function Projects ({rick}) {
  const myrick={
    picSrc:"/images/myrick.svg"
  }
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

    const contents =
      <div className="flex">
        <Snackbar
              sx={{
                width: 250,
                mb:-2,
                ml:-2
              }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={"I'll show all my projects here (not just web development)"}
              />
    <div className="flex flex-row lg:flex-col">
    <div className="rounded-full m-4 px-3 pt-3 pb-2 bg-black hidden lg:inline-block " >
      <Image  src={myrick.picSrc} height="80" width="80"/>
    </div>
    <div  className="lg:hidden rounded-full l m-2  px-2 pt-2 pb-1 bg-black" >
      <Image src={myrick.picSrc} height="30" width="30"/>
    </div>
    <button onClick={handleClick} className= " h-4 w-4 rounded-full bg-white self-end text-xs  mr-1 mb-1">i</button>
    </div>
      </div>

  return (
    <div>
        <Dialogs action='eatshit' cNameB='bg-black px-6 py-3 lg:py-8 lg:px-14 2xl:px-24' rick={rick} 
        title='Projects' right='5%' contents={contents}/>
        
    </div>
  )
}
