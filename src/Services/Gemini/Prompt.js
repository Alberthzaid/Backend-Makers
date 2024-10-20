import { getProductsFromDB } from "../../Repositories/productsRepo.js";

export const analystPrompt = async ( promptFromUser )=>{
    const queryProducts = await getProductsFromDB();
    const dataToString = JSON.stringify(queryProducts)

    const prompt = `Encargate de analizar las 
    intenciones del cliente de una manera muy detallada, actua como un experto en ventas y trabajaras
    con los siguiente productos ${dataToString}

    Peticion del cliente:${promptFromUser}

    y te encargaras de retorna un objeto de la siguiente forma segun el contexto

    Si el usaurio quiere una recomendacion retorna este obejeto:
    [{
        response: "Aca iria un saludo calido y amigable",
        recomendations:"Aca debes revisar los productos disponibles y devolver un array de objetos con las diferentes opciones para el usuario,
        la estructura debe ser la siguiente [
        {
            producto_name: -nombre del producto
            price: -precio del producto,
            brand:-marca del producto
        }
        ]"
    }]  
        
    
    Si el usuario quiero informacion de un producto en espcifico retorna este objeto:

    [{
        response: "Aca iria un saludo calido y amigable",
        recomendations:"Aca debes revisar los productos disponibles y devolver un array de objetos con las diferentes opciones para el usuario,
        la estructura debe ser la siguiente [
        {
            producto_name: -nombre del producto
            price: -precio del producto,
            brand:-marca del producto
        }
        ]"
    }]  

    "Si el usuario quiere un producto y este no se encuentra en la lista ,o si su atributo stock_quantity es igual a cero o si lo que pide el cliente exede la cantida del atributo stock_quantity retorna el siguiente objeto:
    [{
        response: "Aca ira una respuesta calida y amigable, donde debes decirle amablemente que el producto que busca no esta disponible",
        recomendations:"Aca debes revisar los productos disponibles y devolver un array de objetos con las diferentes opciones similares al producto que busca,
        la estructura debe ser la siguiente :[
        {
            producto_name: -nombre del producto similar
            price: -precio del producto,
            brand:-marca del producto
        }
        ]
    }]  "

    Si el usuario quiere comprar un producto retorna el siguiente objeto retorna un objeto como el siguiente

    [{
        response: "Aca ira un mensaje agradeciendo por la compra del usuario",
        sales:"Aca ira una objeto que con el producto relacionado a la compra del usuario "
        "la estructura debe ser la siguiente "[
        {
            producto_name: -nombre del producto
            amout: -Cantidad de la compra,
            brand:-marca del producto,
            quantity:-cantidad compradas del producto.

        }
        ]"
    }]  


    Asegúrate de extraer y estructurar todos los detalles relevantes según el formato especificado.
    Nota importante: "SOLO RETORNA EL JSON, ESTA PROHIBIDO COLOCAR OTRA PALABRA APARTE".
    Nota importante: Es obligatorio cerrar los objetos con corchetes. ES OBLIGATORIO.
    
    `
    return prompt;
}