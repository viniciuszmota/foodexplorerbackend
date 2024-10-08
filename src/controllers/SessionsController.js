const { AppError } = require("../utils/AppError")
const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")

const knex = require("../database/knex")
const jwtConfig = require("../configs/auth")

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    if (!email || !password)
      throw new AppError("E-mail e senha são obrigatórios!", 401)

    const user = await knex("users").select("*").where({ email }).first()
    if (!user) throw new AppError("E-mail e/ou senha inválidos!", 404)

    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid)
      throw new AppError("E-mail e/ou senha inválidos!", 401)

    const { expiresIn, secret } = jwtConfig.jwt
    const token = sign({}, secret, { subject: String(user.id), expiresIn })

    delete user.password

    return response.status(201).json({ token, user })
  }
}

module.exports = SessionsController
