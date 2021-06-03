export class Client {
    id ?: number;
    name : String;
    email : String;
    password : String;
    phone : String;
    adresse ?: any;

    constructor(name : string,email:string,password:string,phone:string)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}