import React from 'react';
import BrandLogo1 from '../../../Assets/brand/Brand-Logo1.png'
import BrandLogo2 from '../../../Assets/brand/Brand-Logo2.png'
import BrandLogo3 from '../../../Assets/brand/Brand-Logo3.png'
import BrandLogo4 from '../../../Assets/brand/Brand-Logo4.png'
import BrandLogo5 from '../../../Assets/brand/Brand-Logo5.png'
import BrandLogo6 from '../../../Assets/brand/Brand-Logo6.png'
const BrandLogo = () => {
    return (
        <div className=' flex flex-wrap'>
            <img src={BrandLogo1}></img>
            <img src={BrandLogo2}></img>
            <img src={BrandLogo3}></img>
            <img src={BrandLogo4}></img>
            <img src={BrandLogo5}></img>
            <img src={BrandLogo6}></img>
        </div>
    );
};

export default BrandLogo;