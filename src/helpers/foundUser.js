import { Supabase } from "../Config/Supabase.js"

export const foundUser = async (json) => {
    const { email } = json;
    const { data, error } = await Supabase.from('users').select('*').eq('email', email);

    if (error) {
        console.error('Error finding user:', error.message);
        return false;
    }

    return data.length > 0;
};