import React from 'react';
import HomePage from '../Components/Appbar';
import govtLogo from '../Assets/Logo/govtLogo.png';
import badcLogo from '../Assets/Logo/badcLogo.png';
import './HomePage.css'

const DemoPage = () => {
    return (
        <div>
            <HomePage />
            <div className='pagebar shadow d-flex justify-content-between'>
                <img src={govtLogo} className='bdlogo' alt='bd-govt-logo' />
                <div style={{ fontFamily: 'Galada' }}>
                    <div className='h5 mobile-text mt-2' style={{ color: "#015204", fontWeight: "bold" }}>
                        বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন (বিএডিসি)
                    </div>
                    <div className='h6 mobile-text'>
                        সেচ বিভাগ
                    </div>
                </div>
                <img src={badcLogo} className='badclogo' alt='badc-logo' />
            </div>
        </div>
    );
}

export default DemoPage;
