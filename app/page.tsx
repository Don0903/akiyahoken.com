import Home from '@/app/components/home'
import About from '@/app/components/about'
import NavBar from '@/app/components/navBar'
import Skills from '@/app/components/skills'
import { Suspense } from 'react'
import Loading from '@/app/loading'




export default function Landing() {
  return (
    <Suspense fallback={<Loading/>}>
    <div className='snap-y snap-mandatory overflow-y-scroll h-screen'>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
    </div>
    </Suspense>
  )
}
