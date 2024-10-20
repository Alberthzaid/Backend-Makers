import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();

const connectToDB = () => {
    try {
        const client = createClient(process.env.URL, process.env.KEY);
        console.log('||| Connection successfully');
        return client;
    } catch (error) {
        console.error('Error connecting to Supabase:', error);
        throw error; 
    }
};

export const Supabase = connectToDB();
