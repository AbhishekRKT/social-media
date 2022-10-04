const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("inside root")
    res.send("hey it's user route");
});

module.exports = router;