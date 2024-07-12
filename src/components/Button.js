import React from "react";
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
];

const SIZES = [
    'btn--medium',
    'btn--large'
];

export const Button = ({
    children, // Corrected spelling
    type,
    onClick,
    buttonStyle,
    buttonSize // Corrected naming
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // Renamed variable
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children} {/* Corrected spelling */}
        </button>
    );
};
