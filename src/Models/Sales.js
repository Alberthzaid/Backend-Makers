export class Sales{
    constructor(id_product , quantity, amount, sale_date,id_client) {

        this.id_product = id_product;
        this.quantity = quantity;
        this.amount = amount;
        this.sale_date = sale_date;
        this.id_client = id_client
    }

    toJson(){
        const Body ={
            product_id:this.id_product,
            quantity:this.quantity,
            amount:this.amount,
            sale_date:this.date,
            client_id:this.id_client
        }

        return Body;

    }

}