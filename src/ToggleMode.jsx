import "./toggle.css"
import { useState } from "react"

function ToggleMode({toggleMode}){

    return (
        <div id="toggle" className="">
            <label className="switch">
                <input type="checkbox" onClick={toggleMode}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleMode