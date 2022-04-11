import Dialogs from '../components/Dialogs'
import Image from 'next/image'
import Link from 'next/link'

export default function Social ({rick}) {
  const github={
    src:"https://github.com/kemcet",
    picSrc:"/images/github.svg"
  }
  const medium={
    src:"https://medium.com/@kemalcetmen",
    picSrc:"/images/medium.svg"
  }
  const instagram={
    src:"https://www.instagram.com/kemalcetmenn/",
    picSrc:"/images/instagram.svg"
  }
     const lines = [github, medium, instagram]

     const contents =
      lines.map((e,i) =><div key={"Social"+i}>
        <div  className="rounded-full m-4 px-3 pt-3 pb-2 bg-slate-400 hidden lg:inline-block " >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image  src={e.picSrc} height="80" width="80"/>
    </a>
    </Link><br/></div>
    <div className="lg:hidden flex-row rounded-full l m-2  px-2 pt-2 pb-1 bg-slate-400" >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image src={e.picSrc} height="30" width="30"/>
    </a>
    </Link><br/></div>
      </div>)

  return (
    <div>
        <Dialogs action='wubba' cNameB='bg-black px-4 socb py-3 lg:p-8 2xl:px-16' rick={rick} 
        title='Social Media' left='5%' contents={contents}/>
    </div>
  )
}

