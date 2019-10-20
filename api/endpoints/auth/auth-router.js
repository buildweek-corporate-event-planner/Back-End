const router = require('express').Router();

const bcrypt = require('bcryptjs');

const users = require('')

const tokenMan = require('../../middleware/generateToken');

router.post('/register', (req, res) => {
    let user = req.body;
    if (!user.email) {
        res.status(422).json({message: "Missing fields: email"})
    }
    else if (!user.password) {
        res.status(422).json({message: "Missing fields: password"})
    }
    else if (!user.role) {
        res.status(422).json({message: "Missing fields: role"})
    } 
    else if (!user.company) {
        res.status(422).json({message: "Missing fields: company"})
    } else {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash
        Tls.add(user)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
})

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    Tls.getBy({email})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenMan.generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.email}!`,
                token
            })
        } else {
            res.status(403).json({message: "Bad credentials!"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;