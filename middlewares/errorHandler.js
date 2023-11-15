function errorHandler(err, req, res, next) {
    res.status(500).json({ code: 500, message: 'Errore interno del server' });
}

module.exports = errorHandler;