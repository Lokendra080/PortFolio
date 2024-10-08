const express = require('express')
const router = express()
const USER = require("../../models/userSChema")
require("../connet")





//GetNewUserData Api
router.post("/xyz", (req, res) => {
    // console.log(req.body);
    const { userName, userEmail, userNumber, userMsg } = req.body
    if (!userName || !userEmail || !userNumber || !userMsg) {
        res.status(422).json({ error: "Fill the all data" })
        // console.log("no data available")
    }

    USER.findOne({ userEmail: userEmail})
        .then((userExist ) => {
            if (userExist) {
                return res.status(421).json({ error: "This Email  is already register" })
            } else {
                const newUser = new USER({
                    userName, userEmail, userNumber, userMsg,
                });
                newUser.save()
                    .then(() => {

                        res.status(201).json({ massage: "data send succesffuly" })
                    })
                    .catch((err) => {

                        res.status(500).json({ error: "data not send " })
                    })
            }
        })
        .catch((err) => {
            console.log(err)
        })

})



  

module.exports = router;