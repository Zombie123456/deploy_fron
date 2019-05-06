'use strict'
const config = require('../config')
const env = process.env.NODE_ENV === 'development' ? config.dev.env : config.build.env
const host = env.DOCKERIZED_DEV === '"true"' ? 'http://localhost:8000' : env.HOST.replace(/"/g, '')
const prefix = host + '/v1/member/'
const chalice = 'http://chalice.top:8000/v1/student/getcode_img/'
export default {
    getImg: chalice
}
