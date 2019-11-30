import jwt from 'jsonwebtoken'
import env from '../config/env'

export async function auth(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.header.token || req.query.token || req.body.token || req.headers['authorization']
        if (!token) {
            return res.status(403).send({ errors: ['No token provided'] })
        }
        jwt.verify(token, env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}