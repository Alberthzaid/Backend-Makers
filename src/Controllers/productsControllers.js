import { newProduct , getProductsFromDB , updateProductInDB, deleteProductFromDB} from "../Repositories/productsRepo.js";

export const addProduct = async (req, res) => {
    try {
        const clientReq = req.body;
        const setProduct = await newProduct(clientReq);
        
        if (setProduct?.error) {
            return res.status(400).json({ message: 'Error adding product', details: setProduct.error });
        }

        res.status(200).json({ message: 'Product added successfully', data: setProduct.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



export const getProducts = async (req, res) => {
    try {
        const result = await getProductsFromDB();
        if (result.error) {
            return res.status(400).json({ message: 'Error getting products', details: result.error });
        }
        res.status(200).json({ data: result.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const result = await updateProductInDB(id, productData);

        if (result.error) {
            return res.status(400).json({ message: 'Error updating product', details: result.error });
        }

        res.status(200).json({ message: 'Product updated successfully', data: result.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductFromDB(id);

        if (result.error) {
            return res.status(400).json({ message: 'Error deleting product', details: result.error });
        }

        res.status(200).json({ message: 'Product deleted successfully', data: result.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};