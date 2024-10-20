export class Users{
    constructor(email , password) {
        this.email = email;
        this.password = password
    }

    toJson(){
        const Body = {
            email: this.email,
            password:this.password
        }

        return Body
    }
}