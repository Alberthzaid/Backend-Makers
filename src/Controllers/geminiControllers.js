import { geminiService } from "../Services/Gemini/Gemini.js";
import { analystPrompt } from "../Services/Gemini/Prompt.js";

export const sendPrompt = async (req, res) => {
    try {
        const { prompt } = req.body;
        const promptAnalyst = await analystPrompt(prompt);
        const geminiResponse = await geminiService(promptAnalyst);

        const responseText = geminiResponse.response.candidates[0].content.parts[0].text;

        const parsedResponse = JSON.parse(responseText);

        res.status(200).json({ response: parsedResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};