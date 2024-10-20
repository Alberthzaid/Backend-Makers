import { Supabase } from "../Config/Supabase.js"

export const validPassword = async (json) => {
    try {
        const { email, password } = json;
        const { data, error } = await Supabase.from('users').select('password').eq('email', email);

        if (error) {
            console.error('Error validating password:', error.message);
            return false;
        }

        if (data.length === 0) {
            return false;
        }

        // Comparar contraseñas (esto puede variar si usas hash)
        return data[0].password === password;
    } catch (error) {
        console.error('Error validating password:', error.message);
        return false;
    }
};