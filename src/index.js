import app from './app';
import '@babel/polyfill'
import env from './config/env.js'

async function main() {
    await app.listen(env.APP_PORT)
}

main()