
const router = require("express").Router();
const photosController = require("../../controllers/photoController");
router.route("/")
  .get(photosController.findAll)
  .post(photosController.create);

// Matches with "/api/photos/:id"
router
  .route("/:id")
  .get(photosController.findById)
  .put(photosController.update)
  .delete(photosController.remove);

module.exports = router;