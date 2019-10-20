const secret = 'This is a secret!'

const jwt = require('jsonwebtoken')

function authenticate (req, res, next) {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(403).json(err)
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(401).json({
            err: "No token provided!"
        })
    }
}

module.exports = authenticate;