const express = require("express");
require("./database/config.js");
const cors = require("cors")
const users = require("./database/user.js");

const products = require("./database/products.js");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5400;

app.post("/register", async (req, res) => {
    const { password, mobile, name } = req.body;

 
    if (name && mobile && password) {
        try {
            const existingUser = await users.findOne({ mobile });

            if (existingUser) {
                return res.send({ result: "User already exists" });
            }

            const newUser = new users(req.body);
            const savedUser = await newUser.save();

            return res.send({result:"Register sucessfully"});
        } catch (error) {
            console.error(error);
            return res.status(500).send({ result: "Internal Server Error" });
        }
    } else {
        return res.send({ result: "Enter valid details." });
    }
});




app.post("/login", async (req, res) => {
    const { name, password } = req.body;

    if (name && password) {
        try {
            const result = await users.findOne({ name, password });

            if (result) {
                res.send({ results: "Login Success" });
            } else {
                res.send({ results: "Invalid details" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ results: "Internal Server Error" });
        }
    } else {
        res.send({ results: "Please enter valid details" });
    }
});






app.get("/getproducts", async (req, res) => {
    try {
        const productList = await products.find();
        res.send(productList);
    } catch (error) {
        console.error(error);
        res.status(500).send({ result: "Internal Server Error" });
    }
});












app.listen(port);









