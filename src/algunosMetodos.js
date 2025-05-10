const { DynamoDB } = require('aws-sdk');

exports.obtenerTask = async (event) => {
    const dynamoDB = new DynamoDB.DocumentClient();

    try {
        const response = await dynamoDB.scan({
            TableName: 'categoryTable1',
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Todas las Categorias obtenidas con éxito',
                data: response.Items
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al obtener todas las categorias',
                error: error.message
            })
        };
    }
};

exports.obtenerTasks = async (event) => {
    const dynamoDB = new DynamoDB.DocumentClient();
    const {id} = event.pathParameters; // Obtener el id de la tarea desde los parámetros de la ruta
    try {
        const response = await dynamoDB.get({
            TableName: 'categoryTable1',
            Key: {
                id, // Usar el id obtenido de los parámetros de la ruta
            }
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Categoria obtenida con éxito',
                data: response.Item
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al encontrar la categoria',
                error: error.message
            })
        };
    }
};

exports.eliminarTasks = async (event) => {
    const dynamoDB = new DynamoDB.DocumentClient();
    const {id} = event.pathParameters; 
    try {
        const response = await dynamoDB.delete({
            TableName: 'categoryTable1',
            Key: {
                id, 
            }
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Categoria eliminada con éxito',
                data: response.Item
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al eliminar la categoria',
                error: error.message
            })
   };
}
};