import React from 'react';
import Terminal from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css'
import './Contact.css';

const termLines = [
    {
        'text': 'cat email.txt',
        'cmd': true
    },
    {
        'text': 'ricardo.ramnarine@hotmail.com',
        'cmd': false
    },
    {
        'text': 'cat LinkedIn.txt',
        'cmd': true
    },
    {
        'text': 'https://www.linkedin.com/in/ricardoramnarine/',
        'cmd': false
    },
    {
        'text': 'cat GitHub.txt',
        'cmd': true
    },
    {
        'text': 'https://github.com/RicardoRam',
        'cmd': false
    }
]

export default (props) => {
    return (
        <div className="contact-page">
            <div className="terminal-container">
                <Terminal
                    lines={termLines}
                    interval={80}
                />
            </div>
        </div>
    )
};
