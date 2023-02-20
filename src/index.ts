import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";


const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        user: '',
        password:'',
        type: 'postgresql',
        debug: !__prod__,
    });

};


console.log("hellooooo world"); 