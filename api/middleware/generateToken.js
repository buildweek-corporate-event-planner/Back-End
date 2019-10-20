const jwt = require('jsonwebtoken');

const secret = 'This is a secret!'

function generateToken(user) {
    const payload = {
        subject: user.id,
        name: user.name
    };

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secret, options)
}

module.exports = {generateToken};