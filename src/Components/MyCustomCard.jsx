import React from 'react'
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

  const cardInfo = [
    { icon: [sech], title: "সেচ গ্রাহকবৃন্দ" },
    { icon: [manager], title: "স্কিম ম্যানেজারগণ" },
    { icon: [officer], title: "কর্মকর্তা/কর্মচারী" },
    { icon: [sms], title: "বার্তা প্রদান" },
    { icon: [task], title: "কর্ম পরিকল্পনা" },
    { icon: [phone], title: "ফোনবুক" },
    { icon: [reminder], title: "রিমাইন্ডার" },
    { icon: [archive], title: "আর্কাইভ" },
  ]

  const renderCard = (card, index) => {
    return (
      <Card className=' m-2 box cardForHome border-0 shadow-sm' key={index}>
        <div><img className='cardImg mt-2' src={card.icon} alt='cardlogo1' /></div>
        <div className='h6 mt-2' style={{ fontFamily: 'Galada' }}>{card.title}</div>
      </Card>
    )
  }

  return (
    <div className='d-flex row justify-content-evenly px-3'>
        {cardInfo.map(renderCard)}
    </div>
  )
}

export default MyCustomCard;