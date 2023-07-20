import React from 'react';
import { BiSolidUserVoice } from 'react-icons/bi';

function speech(Input) {
    console.log(Input)
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(Input);
            
            utterance.lang = 'en-US';
            utterance.rate = 1.0;
            utterance.volume = 1.0;
            utterance.pitch = 1.0;
            
            console.log(Input)
            synth.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in this browser. Please try using a different browser.');
        }
    }

const MeditationResult = ({ generatedMeditation }) => {


    return (
        <div className='para'>
            <h2>Generated Meditation</h2>
            <span onClick={() => speech(generatedMeditation.generatedText)}>
                <BiSolidUserVoice className='btn' />
                text to speach
            </span>
            <p>{generatedMeditation.generatedText}</p>
        </div>
    );
};

export default MeditationResult;
