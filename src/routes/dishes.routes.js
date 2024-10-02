const { Router } = require("express")
const multer = require("multer")

const DishesController = require("../controllers/DishesController")
const DishesImageController = require("../controllers/DishesImageController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const uploadConfig = require("../configs/upload")

const dishesRoutes = Router()
const dishesController = new DishesController()
const dishesImageController = new DishesImageController()
const upload = multer(uploadConfig.MULTER)

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/", dishesController.create)
dishesRoutes.delete("/:id", dishesController.remove)
dishesRoutes.put("/:id", dishesController.update)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.get("/", dishesController.index)

dishesRoutes.patch(
  "/:id/picture",
  upload.single("picture"),
  dishesImageController.updatePicture
)

module.exports = dishesRoutes
