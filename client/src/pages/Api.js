import axios from "axios";
let url = "https://glowing-spectacled-pyrite.glitch.me/";

export default async function apiCall( userInput) {
    try {
        const response = await axios.post(url + 'generate-meditation', {
            userInput,
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error while calling the external API:', error);
        return { meditation: "failed to fetch" };
    }
}