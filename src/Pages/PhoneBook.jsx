import React from 'react';
import './PhoneBook.css';
import Appbar from '../Components/Appbar';
import HeadingCard from '../Components/HeadingCard';

const PhoneBook = () => {
  return (
    <div style={{ fontFamily: 'Galada' }}>
      <Appbar />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HeadingCard/>
      </div>
    </div>
  )
}

export default PhoneBook