export class Product{
    constructor(name , stock , price , category , brand){
        this.name = name;
        this.stock = stock;
        this.category = category;
        this.price = price;
        this.brand = brand
    }

    getName(){
        return this.name;
    }

    getStock(){
        return this.stock;
    }

    getCategory(){
        return this.category;
    }

    getPrice(){
        return this.price;
    }

    getBrand(){
        return this.brand;
    }

    toJson(){
        const response = {
            
            product_name:this.name,
            stock_quantity:this.stock,
            category:this.category,
            brand:this.brand,
            price:this.price

        }

        return response;
    }
}