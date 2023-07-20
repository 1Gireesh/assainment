import axios from "axios";

export default async function apiCall(setIsLoading, userInput) {
    console.log(userInput)
    try {
        setIsLoading(true)
        const apiResponse = await axios.post('https://gpt-api.richexplorer.com/api/general', {
            usecase: 'GPT_MEDITATION_CREATOR',
            userInput,
        });

        const generatedMeditation = apiResponse.data;
        console.log(generatedMeditation)
        return ({ meditation: generatedMeditation });
    } catch (error) {
        console.error('Error while calling the external API:', error);
        return { meditation: "failed to fetch" };
    }
    finally {
        setIsLoading(false)
    }
}