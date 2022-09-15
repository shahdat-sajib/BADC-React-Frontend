import React from 'react'
import './MyCustomCard.css'
import sech from '../Assets/Icons/sech.png'
import manager from '../Assets/Icons/farmar.png'
import officer from '../Assets/Icons/manager.png'
import sms from '../Assets/Icons/sms.png'
import task from '../Assets/Icons/taskbook.png'
import phone from '../Assets/Icons/phonebook.png'
import reminder from '../Assets/Icons/timer.png'
import archive from '../Assets/Icons/archive.png'

const MyCustomCard = () => {
  return (
    <div>
      <div className='cardForHome shadow mt-3 rounded d-flex justify-content-center align-items-center'>
        <div>
          <img className='w-25' src={sech} alt='cardlogo1' />
          <div className='h6 mt-3' style={{ fontFamily: 'Galada' }}>
            সেচ গ্রাহকবৃন্দ
          </div>
        </div>

      </div>

    </div>
  )
}

export default MyCustomCard;