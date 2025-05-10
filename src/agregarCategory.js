const { v4: uuidv4 } = require('uuid');
const { DynamoDB } = require('aws-sdk');

exports.agregarCategory = async (event) => {
    const { name, descripcion } = JSON.parse(event.body);
    const id = uuidv4();

    const dynamoDB = new DynamoDB.DocumentClient();

    const item = {
        id,
        name,
        descripcion,
    };

    try {
        await dynamoDB.put({
            TableName: 'categoryTable1', // ⚠ Ajusta el nombre real de tu tabla
            Item: item
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Categoria guardada con éxito',
                data: item,
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al guardar la categoria',
                error: error.message
            })
        };
    }
};