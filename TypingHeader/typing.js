import React from 'react';

export default function Typing({ text }) {
    const wrapperStyle = {
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
    };

    const typingStyle = {
        width: `${text.length}ch`,
        animation: `typing ${text.length / 10}s steps(${text.length}), blink .5s step-end infinite alternate`,
        whiteSpace:'nowrap',
        overflow:'hidden',
        borderRight: '3px solid',
        fontFamily: 'monospace',
        fontSize: '2em',
    };

    const keyframes =  `
        @keyframes typing { 
            from {
                width: 0;
            }
        }

        @keyframes blink {
            50% {
                border-color: transparent;
            }
        }
        `;
    return (
        <div style={wrapperStyle}>
            <style>{keyframes}</style>
            <div style={typingStyle}>
                {text}
            </div>
        </div>
    )                                                          
}
