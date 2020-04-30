import Picture16 from '../components/picture16';
import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
    
    const homeStyle = {
        textAlign: "center",
        color: "#270949",
        fontFamily: "'Comfortaa', cursive"
    }
    const headerStyle = {
        fontSize:"4em"
    }
    const descStyle = {
        margin:"30px",
        marginRight: "300px",
        marginLeft: "300px"
    }
    const listStyle = {
        listStyleType: "none"
    }
    
    return (
            <Fragment>
                <Head>
                    <title>Pixel Board 16</title>
                </Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
                </style>
                <div style={homeStyle}>
                    <h1 style={headerStyle}>Pixel Board.16</h1>
                    <Nav>
                    </Nav>
                    <p style={descStyle}>Pixel Board.16 is the 16x16 pixel art board which allows you to create 16x16 pixel art using any web-safe color. This is the resolution of favicons. This can be through name, hexidecimal, rgb, or rgba. Just type your color in the format of your choice and start clicking away!</p>
                    <ul style={listStyle}>
                        <li>Color Name - Web-Safe</li>
                        <li>Hexidecimal - '#------'</li>
                        <li>rgb - 'rgb(0-255, 0-255, 0-255)'</li>
                        <li>rgba - 'rgba(0-255, 0-255, 0-255, 0-1)'</li>
                    </ul>
                    <Picture16>
                    </Picture16>
                </div>
            </Fragment>
  )
}
