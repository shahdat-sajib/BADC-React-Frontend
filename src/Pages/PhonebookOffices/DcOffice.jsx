import React, { useState, useEffect } from 'react';
import './DcOffice.css';
import Appbar from '../../Components/Appbar';
import Card from 'react-bootstrap/Card';
import govtLogo from '../../Assets/Logo/govtLogo.png'
import officerLogo from '../../Assets/Icons/manager.png'
import phoneIcon from '../../Assets/Icons/phoneIcon.png'
import messageIcon from '../../Assets/Icons/messageIcon.png'
import officerIcon from '../../Assets/Icons/officerIcon.png'

import Requests from '../../Requests/OfficeDetailsApi/OfficeDetailsApi'

const DcOffice = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Requests.OfficeDetails();
      setData(response.data);
      console.log("Checking data:::::::::", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  },);

  
  return (
    <div>
      <Appbar />

      <div style={{ fontFamily: "Galada", }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card className='headingCard m-2 box border-0 shadow-sm'>
            <div><img className='headingCardImg' src={govtLogo} alt='cardlogo1' /></div>
            <div className='h6 mt-3'>জেলা প্রশাসকের কার্যালয়</div>
            <div><img className='headingCardImg ms-2' src={govtLogo} alt='cardlogo2' /></div>
          </Card>
        </div>

        <div className='subHeadingDiv'>
          <Card className='subHeadingCard m-2 box border-0 shadow'>
            <div><img className='headingCardImg' src={officerLogo} alt='cardlogo1' /></div>
            <div className='h6 mt-3'>কর্মকর্তা</div>
          </Card>
        </div>

        <div>
          <Card className='phonebookMainCard m-2 box border-0 shadow'>
            <div><img className='mainCardImg ms-5 mt-3' src={officerIcon} alt='cardlogo1' /></div>
            <div className='text-start ms-5 mb-2'>
              <div className='h6 mt-3'>মোঃ জোহর আলী</div>
              <div className='h6'>জেলা প্রশাসক</div>
              <div className='h6'>মোঃ 01XXX-XXXXXX</div>

              <div>
                <img className='phoneMainCardIcon' src={phoneIcon} alt='cardlogo1' />
                <img className='phoneMainCardIcon ms-4' src={messageIcon} alt='cardlogo1' />
              </div>
            </div>

          </Card>
        </div>

      </div>
    </div>
  )
}

export default DcOffice;