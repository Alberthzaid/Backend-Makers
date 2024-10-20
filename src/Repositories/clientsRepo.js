import { Supabase } from "../Config/Supabase.js";
import { Client } from "../Models/Clients.js";

const clientsTable = Supabase.from('customers');

export const createClient = async (clientData) => {
    try {
        const { name, age, address } = clientData;
        const client = new Client(name , age , address)
    
        if (!name || !age || !address) {
            return { error: "Missing required fields" };
        }

        const { data, error } = await clientsTable.insert(client.toJson());

        if (error) {
            return { error: error.message };
        }

        console.log('Client created successfully');
        return { data };

    } catch (error) {
        console.error('Error creating client:', error.message);
        return { error: error.message };
    }
};


export const getClients = async () => {
    try {
        const { data, error } = await clientsTable.select('*');

        if (error) {
            return { error: error.message };
        }

        return { data };
    } catch (error) {
        console.error('Error fetching clients:', error.message);
        return { error: error.message };
    }
};


export const updateClient = async (id, clientData) => {
    try {
        const { name, age, address } = clientData;

        const { data, error } = await clientsTable.update({
            name,
            age,
            address
        }).eq('id', id);

        if (error) {
            return { error: error.message };
        }

        console.log('Client updated successfully');
        return { data };
    } catch (error) {
        console.error('Error updating client:', error.message);
        return { error: error.message };
    }
};


export const deleteClient = async (id) => {
    try {
        const { data, error } = await clientsTable.delete().eq('id', id);

        if (error) {
            return { error: error.message };
        }

        console.log('Client deleted successfully');
        return { data };
    } catch (error) {
        console.error('Error deleting client:', error.message);
        return { error: error.message };
    }
};
