import React from 'react'
import Appbar from '../Components/Appbar';
import underConsLogo from '../Assets/Others/underCons.jpg';

const Archieve = () => {
  return (
    <div>
      <Appbar />
      <div className='pt-5'>
        <img className='w-75 justify-content-center pt-5' src={underConsLogo} />
        <p className='p-3'>This page is under construction</p>
      </div>
    </div>
  )
}

export default Archieve;