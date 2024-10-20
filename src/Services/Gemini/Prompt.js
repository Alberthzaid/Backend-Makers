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
      response: "Un saludo calido y amigable",
      recomendations: [
          {
              producto_name: "Nombre del producto",
              price: "Precio del producto",
              brand: "Marca del producto"
          }
      ]
  }]

  2. Si el usuario quiere información de un producto específico, retorna este objeto:
  [{
      response: "Un saludo calido y amigable",
      product_info: {
          product_name: "Nombre del producto",
          price: "Precio del producto",
          brand: "Marca del producto",
          stock_quantity: "Cantidad en stock",
          description: "Breve explicación del producto que menciona sus características más destacadas."
      }
  }]

  3. Si el producto no está disponible o la cantidad solicitada excede el stock, retorna este objeto:
  [{
      response: "El producto que busca no está disponible",
      recomendations: [
          {
              producto_name: "Producto similar",
              price: "Precio del producto",
              brand: "Marca del producto"
          }
      ]
  }]

  4. Si el usuario quiere comprar un producto, retorna este objeto:
  [{
      response: "Un mensaje agradeciendo por la compra",
      sales: {
          product_name: "Nombre del producto",
          amount: "Cantidad comprada",
          brand: "Marca del producto",
          quantity: "Cantidad de la compra"
      }
  }]

  Asegúrate de extraer y estructurar todos los detalles relevantes según el formato especificado.
  Nota importante: "SOLO RETORNA EL JSON, ESTA PROHIBIDO COLOCAR OTRA PALABRA APARTE".
  Nota importante: Es obligatorio cerrar los objetos con corchetes. ES OBLIGATORIO.
  Nota importante: ***ES OBLIGATORIO QUE RESPETES LAS ESTRUCTUTAS DE LOS OBJETOS***
  `;
  return prompt;
};