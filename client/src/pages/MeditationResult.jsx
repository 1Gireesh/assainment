import React from 'react';
import { BiSolidUserVoice } from 'react-icons/bi';

const MeditationResult = ({ generatedMeditation }) => {
    function speech() {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(generatedMeditation.generatedText);

            utterance.lang = 'en-US';
            utterance.rate = 1.0;
            utterance.volume = 1.0;
            utterance.pitch = 1.0;

            console.log(utterance)
            synth.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in this browser. Please try using a different browser.');
        }
    }

    return (
        <div className='para'>
            <h2>Generated Meditation</h2>
            <span>
                <BiSolidUserVoice className='btn' onClick={() => speech()} />
                text to speach
            </span>
            <p>{generatedMeditation.generatedText}</p>
        </div>
    );
};

export default MeditationResult;
