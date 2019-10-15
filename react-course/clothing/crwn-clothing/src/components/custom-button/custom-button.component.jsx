/*jshint esversion: 6 */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton=({children,isGoogle,...otherProps,inverted})=>(
    <button className={`${inverted ? 'inverted':''}${isGoogle ? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
);
    export default CustomButton;
