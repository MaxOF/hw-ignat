import React from 'react'
import Header from './Header'

import {HashRouter} from "react-router-dom";
import RoutesHw from "./Routes";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <Header/>
            <RoutesHw/>
        </div>
    )
}

export default HW5
