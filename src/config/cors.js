export default function cors(req, res, next) {
    res.Header('Access-Control-Allow-Origin', '*')
    res.Header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.Header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}