import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";

config();

export const geminiService = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent(prompt);
    return response
  } catch (error) {
    console.error(error);
  }
};
