import { getProductsFromDB } from "../../Repositories/productsRepo.js";

export const analystPrompt = async (promptFromUser) => {
  const queryProducts = await getProductsFromDB();
  const dataToString = JSON.stringify(queryProducts);

  const prompt = `Encargate de analizar las 
  intenciones del cliente de una manera muy detallada, actua como un experto en ventas y trabajaras
  con los siguiente productos ${dataToString}

  Peticion del cliente: ${promptFromUser}

  y te encargaras de retorna un objeto de la siguiente forma según el contexto:

  1. Si el usuario quiere una recomendación, retorna este objeto:
  [{
      response: ENCARGATE DE DAR UN SALUDO CALIDO Y AMIGABLE,
      recomendations: [
          {
            id: "Id del producto"
            product_name: "Nombre del producto",
            price: "Precio del producto",
            brand: "Marca del producto"
            image: "Imagen del producto"
          }
      ]
  }]


  Asegúrate de extraer y estructurar todos los detalles relevantes según el formato especificado.
  Nota importante: "SOLO RETORNA EL JSON, ESTA PROHIBIDO COLOCAR OTRA PALABRA APARTE".
  Nota importante: Es obligatorio cerrar los objetos con corchetes. ES OBLIGATORIO.
  Nota importante: ***ES OBLIGATORIO QUE RESPETES LAS ESTRUCTUTAS DE LOS OBJETOS***
  `;
  return prompt;
};