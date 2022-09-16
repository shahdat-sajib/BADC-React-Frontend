import React from 'react';
import Appbar from '../Components/Appbar';
import govtLogo from '../Assets/Logo/govtLogo.png';
import badcLogo from '../Assets/Logo/badcLogo.png';
import './HomePage.css'
import Slider from '../Components/Slider';
import HomepageCard from '../Components/MyCustomCard';

const DemoPage = () => {
    return (
        <div>
            <Appbar />
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
            <div className='mt-1'>
                <Slider />
            </div>

            <div>
                <HomepageCard />
            </div>

            {/* <div className='mycardBody d-flex py-1'>
                <div className='row row-cols-2 row-cols-sm-2 row-cols-md-5'>
                    <div className='col'>
                        <HomepageCard />
                    </div>
                </div>
            </div> */}

        </div>
    );
}

export default DemoPage;
