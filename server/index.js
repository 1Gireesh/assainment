const express = require('express');
const axios = require('axios');
const cors = require("cors");

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

app.post('/generate-meditation', async (req, res) => {
  try {
    const { userInput } = req.body;

    const apiResponse = await axios.post('https://gpt-api.richexplorer.com/api/general', {
      usecase: 'GPT_MEDITATION_CREATOR',
      userInput,
    });

    const generatedMeditation = apiResponse.data; 
    res.json({ meditation: generatedMeditation });
  } catch (error) {
    console.error('Error while calling the external API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
