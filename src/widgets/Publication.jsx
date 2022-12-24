import React from 'react'

function Publication() {
  return (
    <div className='justify-items-start pt-[10vh] px-[10vw]'>
        <p className='font-bold text-[5vw] md:text-[2vw]'>Publication</p>
        <p className='font-bold text-[4vw] md:text-[1.4vw] italic'>A Channel Attention Based Deep Neural Network for Automatic Metallic Corrosion Detection</p>
        <p className='text-[3.5vw] md:text-[1.3vw]'>Sheng Zhang, <span className='font-bold'>Xinling Deng</span>, Yumin Lu, et al.</p>
        <p className='text-[3vw] text-gray-500 md:text-[1.2vw]'> Journal of Building Engineering, Volume 42, October 2021, 103046
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S2352710221009049">
            <span className='text-[3vw] text-blue-300 md:text-[1.2vw] ml-[1vw] underline'>Link Here</span>
        </a>
        </p>
        


        
    </div>
  )
}

export default Publication