import React from 'react';
import './PhoneBook.css';
import Appbar from '../Components/Appbar';
import HeadingCard from '../Components/HeadingCard';
import MyCustomCardForPhoneBook from '../Components/MyCustomCardForPhoneBook';

const PhoneBook = () => {
  return (
    <div>
      <Appbar />

      <div style={{fontFamily: "Galada"}}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <HeadingCard />
        </div>

        <div>
          <MyCustomCardForPhoneBook />
        </div>
      </div>
    </div>
  )
}

export default PhoneBook