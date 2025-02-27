const express = require("express");
const router = new express.Router();
const Student = require("../db/model/students");

// Post request
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
})
// Get request
router.get("/students", async (req, res) => {
    try {
        const usersData = await Student.find();
        res.send(usersData);
        //console.log(usersData);
    } catch (error) {
        console.log(error);
    }
})
// Get request for indivitual ID
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id; // req.params it is used to access route parameters from the URL.
        const userData = await Student.findById(_id);
        //console.log(userData);
        if (!userData) {
            return res.status(400).send();
        } else {
            res.send(userData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
// Put & Patch Request for Update data
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateData);
    } catch (e) {
        res.status(404).send(e);
    }
})
// Delete Request
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteData = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteData);
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router;