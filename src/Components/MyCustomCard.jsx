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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.icon} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div>
      {cardInfo.map(renderCard)}

      {/* <div className='cardForHome shadow mt-3 rounded d-flex justify-content-center align-items-center'>
        <div>
          <img className='w-25' src={sech} alt='cardlogo1' />
          <div className='h6 mt-3' style={{ fontFamily: 'Galada' }}>
            সেচ গ্রাহকবৃন্দ
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default MyCustomCard;