const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateJWT(req, res, next) {
    let token = req.header('Authorization').split(' ')[1];
    console.log(token)


    if (!token) {
        return res.status(401).json({ code: 401, message: 'Non autorizzato - Token mancante' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(403).json({ code: 403, message: 'Non autorizzato - Token non valido' });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateJWT;
