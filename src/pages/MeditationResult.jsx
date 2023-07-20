import React from 'react';

const MeditationResult = ({ generatedMeditation }) => {
    const { generatedText } = generatedMeditation;
    return (
        <div className='para'>
            <h2>Generated Meditation</h2>
            <p>{generatedText}</p>
        </div>
    );
};

export default MeditationResult;
