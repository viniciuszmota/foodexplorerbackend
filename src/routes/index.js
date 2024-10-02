const { Router } = require("express")

const categoriesRoutes = require("./categories.routes")
const favoritesRoutes = require("./favorites.routes")
const sessionsRoutes = require("./sessions.routes")
const dishesRoutes = require("./dishes.routes")
const usersRoutes = require("./users.routes")
const filesRoutes = require("./files.routes")

const routes = Router()

routes.use("/categories", categoriesRoutes)
routes.use("/favorites", favoritesRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/dishes", dishesRoutes)
routes.use("/users", usersRoutes)
routes.use("/files", filesRoutes)

module.exports = routes
