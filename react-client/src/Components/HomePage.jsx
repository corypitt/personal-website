import React, { Component } from 'react';
import {Route} from "react-router-dom";

import ArticlesSection from './HomeComponents/ArticlesSection';
import ImageCarousel from './HomeComponents/ImageCarousel';

class HomePage extends Component {
    render() {
        return (
            <div>
                This is a new change. High-level content / summary. High-level content / summary.
                <Route name="articles" exact path="/" component={ArticlesSection} />
            </div>

        )
    }
}
export default HomePage;