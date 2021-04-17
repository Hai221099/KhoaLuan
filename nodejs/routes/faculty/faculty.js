var express = require("express");
var router = express.Router();
var faculty = require("../../controller/faculty/faculty");

router.get("/faculty", faculty.list);
router.post("/faculty/byId", faculty.list2);
router.post("/faculty/classList", faculty.list3);
router.post("/faculty/create", faculty.create);
router.put("/faculty/update", faculty.update);

module.exports = router;
