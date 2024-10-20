export class Client {
    constructor(name , age , adress){
        this.name = name ;
        this.age = age;
        this.adress = adress;
    }

    toJson(){
        const Body = {

            name: this.name,
            age:this.age,
            address:this.adress

        }

        return Body;
    }
}