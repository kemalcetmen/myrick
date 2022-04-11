import Dialogs from '../components/Dialogs'
import Image from 'next/image'
import Link from 'next/link'

export default function Social ({rick}) {
  const buymeacoffee={
    src:"https://www.buymeacoffee.com/kemalcetmen",
    picSrc:"/images/buymeacoffee.svg"
  }
     const lines = [buymeacoffee]

     const contents =
      lines.map((e,i) =><div key={"SendSmt"+i}>
        <div  className="rounded-full m-4 px-3 pt-3 pb-2 bg-slate-400 hidden lg:inline-block " >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image  src={e.picSrc} height="80" width="80"/>
    </a>
    </Link><br/></div>
    <div className="lg:hidden flex-row rounded-full  m-2  px-2 pt-2 pb-1 bg-slate-400" >
    <Link href={e.src}>
    <a target="_blank" rel="noopener noreferrer">
      <Image src={e.picSrc} height="30" width="30"/>
    </a>
    </Link><br/></div>
      </div>)

  return (
    <div>
        <Dialogs action='sendsmt' cNameB='bg-black senb py-3 px-8 lg:p-8 lg:pl-20 lg:pr-16 2xl:px-28' rick={rick} 
        title='Donate' left='5%' contents={contents}/>
    </div>
  )
}