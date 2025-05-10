exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Mensaje de respuesta hacia la nube con la tabla de Categoria",
      input: event
    }),
  };
};
