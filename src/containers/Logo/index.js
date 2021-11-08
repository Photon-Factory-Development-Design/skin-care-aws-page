import React from 'react';
import { base_url } from '../../common/constant';

const Logo = () => {
    return <img src={`${base_url}/assets/images/logo.svg`} alt="logo" width={200} />
}

export default Logo;