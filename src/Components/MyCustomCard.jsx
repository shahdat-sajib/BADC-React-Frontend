import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyCustomCard.css'
import Card from 'react-bootstrap/Card';
import sech from '../Assets/Icons/sech.png'
import manager from '../Assets/Icons/farmar.png'
import officer from '../Assets/Icons/manager.png'
import sms from '../Assets/Icons/sms.png'
import task from '../Assets/Icons/taskbook.png'
import phone from '../Assets/Icons/phonebook.png'
import reminder from '../Assets/Icons/timer.png'
import archive from '../Assets/Icons/archive.png'

const MyCustomCard = () => {

  let navigate = useNavigate();

  // const cardInfo = [
  //   { icon: [sech], title: "সেচ গ্রাহকবৃন্দ" },
  //   { icon: [manager], title: "স্কিম ম্যানেজারগণ" },
  //   { icon: [officer], title: "কর্মকর্তা/কর্মচারী" },
  //   { icon: [sms], title: "বার্তা প্রদান" },
  //   { icon: [task], title: "কর্ম পরিকল্পনা" },
  //   { icon: [phone], title: "ফোনবুক" },
  //   { icon: [reminder], title: "রিমাইন্ডার" },
  //   { icon: [archive], title: "আর্কাইভ" },
  // ]

  // const renderCard = (card, index) => {
  //   return (
  //     <Card className=' m-2 box cardForHome border-0 shadow-sm' key={index}>
  //       <div><img className='cardImg mt-2' src={card.icon} alt='cardlogo1' /></div>
  //       <div className='h6 mt-2' style={{ fontFamily: 'Galada' }}>{card.title}</div>
  //     </Card>
  //   )
  // }

  return (
    <div className='d-flex row justify-content-evenly px-3 mt-2' style={{ fontFamily: 'Galada' }}>
      <Card onClick={() => { navigate('/irrigation-customers') }} className='m-2 box cardForHome border-0'>
          <div><img className='cardImg mt-2' src={sech} alt='cardlogo1' /></div>
          <div className='h6 mt-2'>সেচ গ্রাহকবৃন্দ</div>
        </Card>

      <Card onClick={() => { navigate('/skim-Managers') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={manager} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>স্কিম ম্যানেজারগণ</div>
      </Card>

      <Card onClick={() => { navigate('/officers-employees') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={officer} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>কর্মকর্তা/কর্মচারী</div>
      </Card>

      <Card onClick={() => { navigate('/send-sms') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={sms} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>বার্তা প্রদান</div>
      </Card>

      <Card onClick={() => { navigate('/action-plan') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={task} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>কর্ম পরিকল্পনা</div>
      </Card>

      <Card onClick={() => { navigate('/phoneBook') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={phone} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>ফোনবুক</div>
      </Card>

      <Card onClick={() => { navigate('/remindar') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={reminder} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>রিমাইন্ডার</div>
      </Card>

      <Card onClick={() => { navigate('/archieve') }} className=' m-2 box cardForHome border-0'>
        <div><img className='cardImg mt-2' src={archive} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>আর্কাইভ</div>
      </Card>
    </div>
  )
}

export default MyCustomCard;