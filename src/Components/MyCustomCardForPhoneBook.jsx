import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyCustomCard.css'
import Card from 'react-bootstrap/Card';
import govtLogo from '../Assets/Logo/govtLogo.png'
import policeLogo from '../Assets/Logo/police.png'
import pbsLogo from '../Assets/Logo/jhalokathiPbs.png'
import paniLogo from '../Assets/Logo/pani.png'
import rabLogo from '../Assets/Logo/rab.png'
import lgedLogo from '../Assets/Logo/lged.png'
import juboLogo from '../Assets/Logo/jubo.png'
import ansarLogo from '../Assets/Logo/ansar.png'
import fireLogo from '../Assets/Logo/fire.png'

const MyCustomCardForPhoneBook = () => {
  let navigate = useNavigate();

  return (
    <div className='d-flex row justify-content-evenly px-3 mt-2' style={{ fontFamily: 'Galada' }}>
      <Card onClick={() => { navigate('/dc-office') }} className='m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={govtLogo} alt='cardlogo1' /></div>
          <div className='h6 mt-2'>জেলা প্রশাসকের কার্যালয়</div>
        </Card>

      <Card onClick={() => { navigate('/zila-porishod') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={govtLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>জেলা পরিষদ, ঝালকাঠি</div>
      </Card>

      <Card onClick={() => { navigate('/sp-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={policeLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>পুলিশ সুপারের কার্যালয়</div>
      </Card>

      <Card onClick={() => { navigate('/pourosova') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={govtLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>ঝালকাঠি পৌরসভা কার্যালয়</div>
      </Card>

      <Card onClick={() => { navigate('/pbs') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={pbsLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>পল্লী বিদ্যুৎ সমিতি, ঝালকাঠি</div>
      </Card>

      <Card onClick={() => { navigate('/wdb-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={paniLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>পানি উন্নয়ন বোর্ড</div>
      </Card>

      <Card onClick={() => { navigate('/rab-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={rabLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>র‍্যাব অফিস</div>
      </Card>

      <Card onClick={() => { navigate('/lged-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={lgedLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>এলজিইডি অফিস</div>
      </Card>
      <Card onClick={() => { navigate('/jubo-unnoyon') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={juboLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>যুব উন্নয়ন অধিদপ্তর</div>
      </Card>
      <Card onClick={() => { navigate('/land-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={govtLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>জেলা ভূমি অফিস</div>
      </Card>
      <Card onClick={() => { navigate('/ansar-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={ansarLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>আনসার/ভিডিপি অফিস</div>
      </Card>
      <Card onClick={() => { navigate('/fire-office') }} className=' m-2 box cardForPhone border-0'>
        <div><img className='cardImg mt-2' src={fireLogo} alt='cardlogo1' /></div>
        <div className='h6 mt-2'>ফায়ার সার্ভিস স্টেশন</div>
      </Card>
    </div>
  )
}

export default MyCustomCardForPhoneBook;