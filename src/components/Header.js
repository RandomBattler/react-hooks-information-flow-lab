import React from "react";

function Header({onDarkModeClick , dark}){
   
    return(
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick }>
                {dark ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;