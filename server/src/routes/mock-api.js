const express = require('express');
const router = new express.Router();


router.put('/update-user-exercise-progress',async (req,res,next)=>{
    try{
        return res.status(200).send(result.rows);
        
    }catch(e){
        console.log("ISSUE happened during exercise update\n");
        return res.status(500).send(e);
    }
})

const dummyWorkoutList  = [
    {id:1, name:'chest', description:'push-up', exercises:[1,3,4,5]},
    {id:2, name:'arms', description:'pull-up', exercises:[1,3,4,5]},
    {id:3, name:'stomatch', description:'squat', exercises:[1,3,4,5]},
    {id:4, name:'legs', description:'deadlift', exercises:[1,3,4,5]},
  ];

router.get('/workout/list', async(req,res,next)=>{

    return res.status(200).send(dummyWorkoutList);
});
module.exports = router;