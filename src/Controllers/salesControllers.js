import { createSale, getSales, updateSale, deleteSale } from "../Repositories/salesRepo.js";


export const addSale = async (req, res) => {
    try {
        const saleData = req.body;
        const result = await createSale(saleData);


        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Sale created successfully', data: result.data });
    } catch (error) {
        console.error('Error adding sale:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllSales = async (req, res) => {
    try {
        const result = await getSales();

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ data: result.data });
    } catch (error) {
        console.error('Error fetching sales:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


export const modifySale = async (req, res) => {
    try {
        const { id } = req.params;
        const saleData = req.body;
        const result = await updateSale(id, saleData);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Sale updated successfully', data: result.data });
    } catch (error) {
        console.error('Error updating sale:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


export const removeSale = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteSale(id);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({ message: 'Sale deleted successfully', data: result.data });
    } catch (error) {
        console.error('Error deleting sale:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};
