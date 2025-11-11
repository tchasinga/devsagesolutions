import React from 'react'

export default function About() {

    const aboutreason = () => {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }

    const whychooseus = () => {
        return (
            <div>
                <h1>Why Choose Us</h1>
            </div>
        )
    }

    const howwework = () => {
        return (
            <div>
                <h1>How We Work</h1>
            </div>
        )
    }
    const studycase = () => {
        return (
            <div>
                <h1>Study Case</h1>
            </div>
        )
    }



  return (
    <div className='bg-[#38393D] relative min-h-screen w-full max-w-full bg-fixed object-fill'>
       <div className="flex justify-between">
        <div>
             {/*first container this h1 tag it will change based on the section chosen */}
             <h1>About</h1>
        </div>

{/* second container this will be the content of the section chosen */}
<div className="flex gap-2 justify-center">
<p className="">about us</p>
{aboutreason()}
<p className="">why choose us</p>
{whychooseus()}
<p className="">how we work</p>
{howwework()}
<p className="">study case</p>
{studycase()}
</div>
       </div>
    </div>
  )
}
