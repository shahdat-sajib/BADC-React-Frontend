import React from 'react';
import Card from 'react-bootstrap/Card';
import phone from '../Assets/Icons/phonebook.png';
import phone2 from '../Assets/Icons/phonebook2.png';

const HeadingCard = () => {
  return (
    <div>
          <Card className='headingCard m-2 box border-0 shadow-sm'>
              <div><img className='headingCardImg' src={phone} alt='cardlogo1' /></div>
              <div className='h6 mt-2'>ফোনবুক</div>
              <div><img className='headingCardImg2' src={phone2} alt='cardlogo2' /></div>
          </Card>
    </div>
  )
}

export default HeadingCard;