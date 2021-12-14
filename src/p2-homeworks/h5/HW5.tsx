import React from 'react'
import Header from './Header'
import RoutesIgnat from './RoutesIgnat'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <RoutesIgnat/>
            </HashRouter>
        </div>
    )
}

export default HW5
