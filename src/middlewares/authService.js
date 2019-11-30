// https://www.abeautifulsite.net/hashing-passwords-with-nodejs-and-bcrypt
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import User from '../models/User'
import env from '../config/env'

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,8})/

const sendErrorsFromDB = (res, dbErros) => {
    const errors = [];
    _.forIn(dbErros.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}
async function login(req, res, next) {
    try {
        const email = req.body.email || ''
        const password = req.body.password || ''

        const user = await User.findOne({
            where: { email }
        }, (err, user) => {
            if (err) {
                return sendErrorsFromDB(res, err)
            } else if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(user, env.JWT_SECRET, {
                    expiresIn: "1 day"
                })
                const { name, email } = user
                res.status(200).json({
                    message: 'User found with successfully',
                    data: user
                })
            }
        })
    } catch (e) {
        res.status(500).json({
            message: 'Search in project failed',
            data: {}
        })
    }
}


async function validateToken(req, res, next) {
    try {
        const token = req.header.token || ''

        jwt.verify(token, env.JWT_SECRET, function (err, decoded) {
            return res.status(200).send({ valid: !err })
        })
    } catch (e) {
        res.status(500).json({
            message: 'Token invalid',
            data: {}
        })
    }
}


async function signup(req, res, next) {
    try {
        const name = req.body.name || ''
        const email = req.body.email || ''
        const password = req.body.password || ''
        const confirmPassword = req.body.confirm_password || ''

        if (!email.match(emailRegex)) {
            return res.status(400).send({ errors: ['O e-mail informado está invalido!'] })
        }
        if (!password.match(passwordRegex)) {
            return res.status(400).send({
                errors: [
                    "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um n" +
                    "úmero, um caractere especial(@#$%) e tamanho 8."
                ]
            })
        }

        const salt = bcrypt.genSaltSync()
        const passwordHash = bcrypt.hashSync(password, salt)

        if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
            return res.status(400).send({ errors: ['Senhas não conferem'] })
        }
        const user = await User.findOne({
            where: email
        })
        console("a")
        if (user) {
            return res.status(400).send({ errors: ['Usuário já cadastrado'] })
        } else {
            console("b")
            let newUser = await User.create({
                name,
                email,
                password: passwordHash
            }, {
                fields: ['name', 'email', 'password']
            });
            if (newUser) {
                console.log("chegou")
                return login(req, res, next)
            } else {
                console("d")
                res.status(500).json({
                    message: 'The user was not created'
                })
            }
        }


    } catch (e) {
        res.status(500).json({
            message: 'Failure in creation of user',
            data: e
        })
    }
}
export { login, validateToken, signup }