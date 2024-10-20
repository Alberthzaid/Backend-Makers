import { authUser, createUser } from "../Repositories/usersRepo.js";



export const authenticate = async (req, res) => {
    try {
        const reqUser = req.body;
        const result = await authUser(reqUser);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const newUser = async (req, res) => {
    try {
        const reqUser = req.body;
        const createNewUser = await createUser(reqUser);

        if (createNewUser.error) {
            return res.status(400).json({ message: createNewUser.error });
        }

        res.status(200).json({ message: 'User created successfully', data: createNewUser.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};