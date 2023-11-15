const jwtGenerator = require('../utilities/jwtGenerator');

//utente esempio
const fakeUser = {
    username: 'testuser',
    password: 'testpassword',
};

function authenticateUser(req, res) {
    const { username, password } = req.body;

    if (username === fakeUser.username && password === fakeUser.password) {
        //credenziali valide
        const token = jwtGenerator(fakeUser);
        res.json({ token });
    } else {
        //credenziali non valide
        res.status(401).json({ error: 'Credenziali non valide' });
    }
}

module.exports = {
    authenticateUser,
};
