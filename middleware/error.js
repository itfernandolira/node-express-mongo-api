const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    //operador spread ... assume todas as propriedades do err
    let error = { ...err };
    error=new ErrorResponse(err.message,err.statusCode);

    console.log(err.stack.red);
    //ver o nome do erro
    console.log(err.name);
    console.log(error.name);

    // Mongoose bad ObjectId - erro CastError
    if (err.name === 'CastError') {
        const message = `Bootcamp not found withh id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
      });
};

module.exports=errorHandler;