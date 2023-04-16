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
    {id:2, name:'arms', description:'pull-up', exercises:[2,3,4,5]},
    {id:3, name:'stomatch', description:'squat', exercises:[3,3,4,5]},
    {id:4, name:'legs', description:'deadlift', exercises:[4,3,4,5]},
  ];

router.get('/workout/list', async(req,res,next)=>{
    return res.status(200).send(dummyWorkoutList);
});

router.get('/workout/:id',async (req,res,next)=>{
    const {id} = req.params; //IMPORTANT: get request should be made in this manner for (i.e pfrefer id in params instead of body)

    const eD = dummyWorkoutList.find((e)=>e.id == id); 

    if(eD)
        return res.status(200).send(eD);
    else
        return res.status(404).send({error:'Exercise Not Found'});
});

module.exports = router;