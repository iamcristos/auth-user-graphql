import React from 'react';
import Header from './Header';

export default function App(props) {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    )
}