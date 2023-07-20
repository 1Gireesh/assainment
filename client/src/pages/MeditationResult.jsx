import React from 'react';

const MeditationResult = ({ generatedMeditation }) => {
    console.log(generatedMeditation)
    return (
        <div className='para'>
            <h2>Generated Meditation</h2>
            <p>{generatedMeditation.generatedText}</p>
        </div>
    );
};

export default MeditationResult;
