const jwt = require('jsonwebtoken');

function generateJwtToken(user) {
    const payload = {
        username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    return token;
}

module.exports = generateJwtToken;
