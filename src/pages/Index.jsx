import React from 'react'
import Education from '../widgets/Education'
import Header from '../widgets/Header'
import MainSection from '../widgets/MainSection'
import Professional from '../widgets/Professional'
import Projects from '../widgets/Projects'
import Publication from '../widgets/Publication'

function Index() {
  return (
    <div className='bg-design bg-cover p-4'>
        <div className='container mx-auto p-4'>
            <Header />
            <main className='mt-20'>
                <MainSection/>
                <Education/>
                <Publication/>
                <Professional/>
                <Projects/>
            </main>
        </div>
    </div>
    
  )
}

export default Index