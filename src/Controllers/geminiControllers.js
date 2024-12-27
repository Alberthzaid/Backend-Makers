import { geminiService } from "../Services/Gemini/Gemini.js";
import { analystPrompt } from "../Services/Gemini/Prompt.js";

export const sendPrompt = async (req, res) => {
    try {
        const { prompt } = req.body;
        const promptAnalyst = await analystPrompt(prompt);
        const geminiResponse = await geminiService(promptAnalyst);

        
        let responseText = geminiResponse.response.candidates[0].content.parts[0].text;
        console.log(responseText)

        responseText = responseText.replace(/```json/g, '').replace(/```/g, '');

        const parsedResponse = JSON.parse(responseText);

        res.status(200).json({ response: parsedResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
