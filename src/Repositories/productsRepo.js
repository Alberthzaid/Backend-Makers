import { Supabase } from "../Config/Supabase.js";
import { Product } from "../Models/Product.js";

const tableProducts = Supabase.from('tech_products');

export const newProduct = async (json) => {
    try {
        const { product_name, stock_quantity, price, category, brand , image} = json;

        if (!product_name || !stock_quantity || !price || !category || !brand || !image) {
            return { error: "Missing required fields" }; 
        }

        const product = new Product(product_name, stock_quantity, price, category, brand, image);
        const { data, error } = await tableProducts.insert(product.toJson());

        if (error) {
            return { error: error.message }; 
        }

        console.log('Product added to DB');
        return { data }; 
    } catch (error) {
        console.error('Error adding product:', error.message);
        return { error: error.message }; 
    }
};

export const getProductsFromDB = async () => {
    try {
        const { data, error } = await tableProducts.select('*');
        if (error) {
            throw new Error(error.message);
        }
        return { data };
    } catch (error) {
        console.error('Error getting products:', error.message);
        return { error: error.message };
    }
};


export const updateProductInDB = async (id, productData) => {
    try {
        const { product_name, stock_quantity, price, category, brand , image} = productData;

        if (!product_name || !stock_quantity || !price || !category || !brand || !image) {
            return { error: "Missing required fields" };
        }

        const product = new Product(product_name, stock_quantity, price, category, brand , image);
        const { data, error } = await tableProducts.update(product.toJson()).eq('id', id);

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        console.error('Error updating product:', error.message);
        return { error: error.message };
    }
};

export const deleteProductFromDB = async (id) => {
    try {
        const { data, error } = await tableProducts.delete().eq('id', id);

        if (error) {
            throw new Error(error.message);
        }

        return { data };
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return { error: error.message };
    }
};
