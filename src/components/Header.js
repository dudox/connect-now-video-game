import React, { useState, useEffect } from 'react'
import {
    useHistory
} from "react-router-dom"


const Header = ({ }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const history = useHistory()

    const selectTab = (e) => {
        const tabId = e.target.id

        const selectedTabIdx = (tabId === "tabVideo") ? 0 : 1
        setSelectedTab(selectedTabIdx)

        const path = selectedTabIdx === 0 ? "/home" : "/contact"

        history.push(path)
    }
    return (
        <div className="row header mb-5">
            <div className="col-12 d-flex">
                <div className="row">
                    <div className="menu col">
                        <span className={`background ${selectedTab === 0 ? "visible" : "invisible"}`}>VIDEO</span>
                        <span id="tabVideo" onClick={selectTab} className="menu-item">VIDEO GAMES</span>
                    </div>
                    <div className="menu col">
                        <span className={`background ${selectedTab === 1 ? "visible" : "invisible"}`}>CONTACT</span>
                        <span id="tabContact" onClick={selectTab} className="menu-item">CONTACT</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header