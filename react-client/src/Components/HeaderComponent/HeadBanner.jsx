import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HNB from '../../assets/HeaderNav.png';

import './HeadBanner.css';

class HeadBanner extends Component {
    render() {
        return (
            <header>
                <img src={HNB} alt="Background Color" />


            </header>
        )
    }
}
export default HeadBanner;