import { createClient, getClients, updateClient, deleteClient } from "../Repositories/clientsRepo.js";


export const addClient = async (req, res) => {
    try {
        const clientData = req.body;
        console.log(clientData);
        const result = await createClient(clientData);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Client created successfully', data: result.data });
    } catch (error) {
        console.error('Error adding client:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


export const getAllClients = async (req, res) => {
    try {
        const result = await getClients();

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ data: result.data });
    } catch (error) {
        console.error('Error fetching clients:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


export const modifyClient = async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const result = await updateClient(id, clientData);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Client updated successfully', data: result.data });
    } catch (error) {
        console.error('Error updating client:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

export const removeClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteClient(id);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Client deleted successfully', data: result.data });
    } catch (error) {
        console.error('Error deleting client:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};
