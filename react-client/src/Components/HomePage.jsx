import React, { Component } from 'react';
import {Route} from "react-router-dom";

import ArticlesSection from './HomeComponents/ArticlesSection';
import HeadBannerSection from './HeaderComponent/HeadBanner';
import ImageCarousel from './HomeComponents/ImageCarousel';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className={"bg"}>
                Hi there... my name is Cory Pitt.
                <Route name="headBanner" exact path="/" component={HeadBannerSection} />
                <Route name="articles" exact path="/" component={ArticlesSection} />
            </div>

        )
    }
}
export default HomePage;