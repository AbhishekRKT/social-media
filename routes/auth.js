const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.get("/register", async (req, res) => {
    console.log("inside register");
    const user = await new User({
        username: "Abhishek",
        email: "abhishek@gmail.com",
        password: "123456"
    });
    console.log(user);
    console.log("before save")

    await user.save(function (err, comment) {
        if (err) console.log(err);
        else {
            console.log('fallowing comment was saved:', comment);
            res.send("ok");

        }
    });
})
// .catch((err) => {
//     console.error(`Error connecting to the database. n${err}`);
// })


module.exports = router;