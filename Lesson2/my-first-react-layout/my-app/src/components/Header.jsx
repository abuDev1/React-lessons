import React from "react";
import { Button } from "./Button";


export const Header = (props) => {
    const text = ['Home', 'About Us', 'Services', 'Blogs']
    const className = {
        headerClass: "Header_button"
    }
    return (
        <div className="Header">
            {/* <Logo /> */}
            <ul className="Menu">
                {
                    text.map((txt) => (
                        <li>
                            {txt}
                        </li>
                    ))
                }
            </ul>
            <Button text="GIFT FINDER" classname={className.headerClass}/>
        </div>
    )
}

