const express=require("express");
const router=express.Router();
const Person=require("../models/Person");
const { 
    getAllPeople,
    addNewPerson,
    addManyPeople,
    findAllByName,
    findOnePerson,
    findOnlyById,
    findEditAndSave,
    findOneAndUpdate,
    findByIdAndRemove,
    deleteMary,
    burritos } = require("../controllers/person.controllers");


router.get("/all",getAllPeople);
router.post("/newPerson",addNewPerson)
router.get("/people",addManyPeople);
router.get("/:name",findAllByName);
router.get("/food/findOneFood", findOnePerson);
router.get("/user/:id",findOnlyById);
router.put("/findEditSave/:id", findEditAndSave);
router.put("/findOneAndUpdate/:personName",findOneAndUpdate);
router.delete("/findByIdAndRemove/:personID", findByIdAndRemove);
router.delete("/deleteMary",deleteMary);
router.get("/queryChain/burritos",burritos);

module.exports=router;