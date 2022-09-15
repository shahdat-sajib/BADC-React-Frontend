import React from 'react';
import HomePage from '../Components/Appbar';
import govtLogo from '../Assets/Logo/govtLogo.png';
import badcLogo from '../Assets/Logo/badcLogo.png';
import './HomePage.css'
import Slider from '../Components/Slider';

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
            <div className='mt-1'>
                <Slider />
            </div>

            <div class="container text-center">
                <div class="row row-cols-2">
                    <div className="col bg-primary rounded" style={{ height: "100px", width: "150px" }}>
                        <img src='' alt='card logo 1' />
                        <div className='h6'>
                            card title 1
                        </div>
                    </div>
                    <div className="col bg-primary rounded" style={{ height: "100px", width: "150px" }}>
                        <img src='' alt='card logo 1' />
                        <div className='h6'>
                            card title 1
                        </div>
                    </div>
                    <div className="col bg-primary rounded" style={{ height: "100px", width: "150px" }}>
                        <img src='' alt='card logo 1' />
                        <div className='h6'>
                            card title 1
                        </div>
                    </div>
                    <div className="col bg-primary rounded" style={{ height: "100px", width: "150px" }}>
                        <img src='' alt='card logo 1' />
                        <div className='h6'>
                            card title 1
                        </div>
                    </div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                </div>
            </div>

        </div>
    );
}

export default DemoPage;
