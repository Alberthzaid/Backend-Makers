import { Supabase } from "../Config/Supabase.js";
import { Sales } from "../Models/Sales.js";

const salesTable = Supabase.from('sales');

export const createSale = async (saleData) => {
    try {
        const { product_id, quantity, amount, sale_date, client_id } = saleData;

        const sale = new Sales(product_id, quantity, amount, sale_date, client_id )
        console.log(sale);

        if (!product_id || !quantity || !amount || !sale_date || !client_id) {
            return { error: "Missing required fields" };
        }

        const { data, error } = await salesTable.insert(sale.toJson());
        

        if (error) {
            return { error: error.message };
        }

        console.log('Sale created successfully');
        return { data };

    } catch (error) {
        console.error('Error creating sale:', error.message);
        return { error: error.message };
    }
};

export const getSales = async () => {
    try {
        const { data, error } = await salesTable.select('*');

        if (error) {
            return { error: error.message };
        }

        return { data };
    } catch (error) {
        console.error('Error fetching sales:', error.message);
        return { error: error.message };
    }
};


export const updateSale = async (id, saleData) => {
    try {
        const { product_id, quantity, amount, sale_date, client_id } = saleData;
        const sale = new Sales(product_id, quantity, amount, sale_date, client_id);

        const { data, error } = await salesTable.update(sale.toJson()).eq('id', id);

        if (error) {
            return { error: error.message };
        }

        console.log('Sale updated successfully');
        return { data };
    } catch (error) {
        console.error('Error updating sale:', error.message);
        return { error: error.message };
    }
};


export const deleteSale = async (id) => {
    try {
        const { data, error } = await salesTable.delete().eq('id', id);

        if (error) {
            return { error: error.message };
        }

        console.log('Sale deleted successfully');
        return { data };
    } catch (error) {
        console.error('Error deleting sale:', error.message);
        return { error: error.message };
    }
};
