import React, { useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, Box, Button } from '@mui/material';
import MeditationResult from './MeditationResult';
import { Input } from '@mui/material';
import apiCall from './Api';


const Home = () => {
    const [feeling, setFeeling] = useState('');
    const [currentActivity, setCurrentActivity] = useState('');
    const [issues, setIssues] = useState('');
    const [currentTab, setCurrentTab] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [generatedMeditation, setGeneratedMeditation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const userInput = `feeling ${feeling} right now, they currently are ${currentActivity} and facing ${issues} issues today`;

            setIsLoading(true)
            let response = await apiCall(userInput);

            const generatedMeditation = response.meditation;

            setGeneratedMeditation(generatedMeditation);

            setIsLoading(false);
        } catch (error) {
            console.error('Error while calling the backend:', error);
            setIsLoading(false);
        }
    };

    const handleNextTab = () => {
        setCurrentTab((prevTab) => prevTab + 1);
    };

    const handlePreviousTab = () => {
        setCurrentTab((prevTab) => prevTab - 1);
    };

    return (
        <div className='home'>
            <Tabs className='tabs' value={currentTab}>
                <Tab label="Feeling" />
                <Tab label="Current Activity" />
                <Tab label="Issues" />
            </Tabs>

            <TabPanel value={currentTab} index={0}>
                <form className="panel" onSubmit={handleNextTab}>
                    <Box>
                        <label>How are you feeling right now?</label>
                        <Input
                            type="text"
                            value={feeling}
                            onChange={(e) => setFeeling(e.target.value)}
                            required
                        />
                    </Box>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Generating Meditation...' : 'Next'}
                    </Button>
                </form>
            </TabPanel>

            <TabPanel value={currentTab} index={1}>
                <form className="panel" onSubmit={handleNextTab}>
                    <div>
                        <label>What do you do?</label>
                        <Input
                            type="text"
                            value={currentActivity}
                            onChange={(e) => setCurrentActivity(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Generating Meditation...' : 'Next'}
                    </Button>
                    <Button onClick={handlePreviousTab}>Previous</Button>
                </form>
            </TabPanel>

            <TabPanel value={currentTab} index={2}>
                <form className="panel" onSubmit={handleSubmit}>
                    <div>
                        <label>What issues are you facing today?</label>
                        <Input
                            type="text"
                            value={issues}
                            onChange={(e) => setIssues(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Generating Meditation...' : 'Generate Meditation'}
                    </Button>
                    <Button onClick={handlePreviousTab}>Previous</Button>
                </form>
            </TabPanel>
            {generatedMeditation && <MeditationResult generatedMeditation={generatedMeditation} />}
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

export default Home;
