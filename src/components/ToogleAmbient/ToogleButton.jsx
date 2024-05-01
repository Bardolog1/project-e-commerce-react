import React, { useState, useEffect } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const switchTheme = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };  
    
    const clouds = () =>{
        return (
            <div className="clouds">
                <i className="fa-solid fa-cloud"></i>
            </div>
        )
    }
    
    const stars = () =>{
        return (
            <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <label className="switch">
                <input type="checkbox" onChange={switchTheme} checked={theme === 'dark'} />
                <span className="slider round">
                        {theme === 'light' ? clouds() : stars()}
                    <span className="btnTheme">
                    </span>
                </span>
            </label>
        </div>
    );
};

export default ToggleButton;
