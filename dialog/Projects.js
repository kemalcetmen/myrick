import Dialogs from '../components/Dialogs'

export default function Projects({rick}) {
    const lines = [
        "https://twitter.com",
        "https://instagram.com"
]
  return (
    <div>
        <Dialogs action='eatshit' cNameB='bg-black px-6 py-3 lg:py-8 lg:px-14 2xl:px-24' rick={rick} 
        title='Projects' right='5%'/>
    </div>
  )
}