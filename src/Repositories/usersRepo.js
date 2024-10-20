import { Supabase } from "../Config/Supabase.js";
import { Users } from "../Models/Users.js";
import { foundUser } from "../helpers/foundUser.js";
import { validPassword } from "../helpers/validPassword.js";

const userTable = Supabase.from('users');

export const createUser = async (json) => {
    try {
        const { email, password } = json;

        if (!email || !password) {
            return { error: "Missing required fields" };
        }

        const user = new Users(email, password);
        const { data, error } = await userTable.insert(user.toJson());

        if (error) {
            return { error: error.message };
        }

        console.log('User created');
        return { data };

    } catch (error) {
        console.error('Error creating user:', error.message);
        return { error: error.message };
    }
};


export const authUser = async (json) => {
    try {
        const found = await foundUser(json);
        const validatePassword = await validPassword(json);

        if (!found) {
            return { error: 'User not found' };
        }

        if (!validatePassword) {
            return { error: 'Invalid access' };
        }

        return { success: true };

    } catch (error) {
        console.error('Error authenticating user:', error.message);
        return { error: error.message };
    }
};