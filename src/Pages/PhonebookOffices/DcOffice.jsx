import React, { useState, useEffect } from 'react';
import './DcOffice.css';
import Appbar from '../../Components/Appbar';
import Card from 'react-bootstrap/Card';
import govtLogo from '../../Assets/Logo/govtLogo.png'
import officerLogo from '../../Assets/Icons/manager.png'
import phoneIcon from '../../Assets/Icons/phoneIcon.png'
import messageIcon from '../../Assets/Icons/messageIcon.png'
import officerIcon from '../../Assets/Icons/officerIcon.png'

// import Requests from '../../Requests/OfficeDetailsApi/OfficeDetailsApi'
import Requests from '../../Requests/EmployeeDetailsApi/EmployeeDetailsApi'

const DcOffice = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Requests.EmployeeDetails();
      setData(response.data);
      console.log("Checking data:::::::::", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Appbar />

      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card className='headingCard m-2 box border-0 shadow-sm'>
            <div><img className='headingCardImg' src={govtLogo} alt='cardlogo1' /></div>
            <div style={{ fontFamily: "Galada" }} className='h6 mt-3'>জেলা প্রশাসকের কার্যালয়</div>
            <div><img className='headingCardImg ms-2' src={govtLogo} alt='cardlogo2' /></div>
          </Card>
        </div>

        <div className='subHeadingDiv'>
          <Card className='subHeadingCard m-2 box border-0 shadow'>
            <div><img className='headingCardImg' src={officerLogo} alt='cardlogo1' /></div>
            <div style={{ fontFamily: "Galada" }} className='h6 mt-3'>কর্মকর্তা</div>
          </Card>
        </div>

        <div>
          {data.map((employee) => {
            return <div>
              <Card key={employee.employeeId} className=' m-2 box border-0 shadow'>
                <div className='phonebookMainCard'>
                  <div>
                    <img className='mainCardImg ms-5 mt-4' src={officerIcon} alt='cardlogo1' />
                  </div>

                  <div className='text-start ms-5 mb-2'>
                    <div className='h6 mt-3'>{employee.employeeName}</div>
                    <div style={{ fontFamily: "Galada" }} className='h6'>জেলা প্রশাসক</div>
                    <div className='h6'>{employee.employeePhone}</div>

                    <div>
                      <a href={"tel:" + employee.employeePhone}>
                        <img className='phoneMainCardIcon' src={phoneIcon} alt='cardlogo1' />
                      </a>
                      <a href={"sms:" + employee.employeePhone}>
                        <img className='phoneMainCardIcon' src={messageIcon} alt='cardlogo1' />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          })}
          {/* <Card className='phonebookMainCard m-2 box border-0 shadow'>
            <div><img className='mainCardImg ms-5 mt-3' src={officerIcon} alt='cardlogo1' /></div>
            <div className='text-start ms-5 mb-2'>
              <div className='h6 mt-3'>Sajib</div>
              <div className='h6'>জেলা প্রশাসক</div>
              <div className='h6'>01777481417</div>

              <div>
                      <a href={"tel:01777481417"}>
                        <img className='phoneMainCardIcon' src={phoneIcon} alt='cardlogo1' />
                      </a>
                      <a href={"sms:01777481417"}>
                        <img className='phoneMainCardIcon' src={messageIcon} alt='cardlogo1' />
                      </a>
                    </div>
            </div>
          </Card> */}
        </div>

      </div>
    </div>
  )
}

export default DcOffice;