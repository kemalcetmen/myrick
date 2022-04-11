import Dialogs from '../components/Dialogs'
import Image from 'next/image'
import Link from 'next/link'

export default function References ({rick}) {

  const adultswim={
    src:"https://www.adultswim.com/",
    picSrc:"/images/adultswim.svg"
  }
  const blender={
    src:"https://www.blender.org/",
    picSrc:"/images/blender.svg"
  }
  const nextjs={
    src:"https://nextjs.org/",
    picSrc:"/images/nextjs.svg"
  }
    const lines = [adultswim,blender,nextjs]
    const contents =
      lines.map((e,i) =><div key={"References"+i}>
        <div className="rounded-full m-4 px-3 pt-3 pb-2 bg-slate-400 hidden lg:inline-block " >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image  src={e.picSrc} height="80" width="80"/>
    </a>
    </Link><br/></div>
    <div key={"References2"+i} className="lg:hidden flex-row rounded-full l m-2  px-2 pt-2 pb-1 bg-slate-400" >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image src={e.picSrc} height="30" width="30"/>
    </a>
    </Link><br/></div>
      </div>)

  return (
    <div>
        <Dialogs action='thank' cNameB='bg-black px-3 py-3 lg:p-8 2xl:px-16' rick={rick} 
        title='References' left='5%' contents={contents}/>
    </div>
  )
}


