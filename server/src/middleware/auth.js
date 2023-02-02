const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ","");

        if(token == null)
            return res.sendStatus(401);
        
            jwt.verify(token,"userauth",(err,user)=>{
                console.log('ERR: ',err);
                if(err)
                    return res.status(403).send(err);
                console.log('USER: ',user);

                req.token = token;
                req.user_id = user.user_id;
                next();
        });

        
         
    }catch(e){
        console.log('ISSUE in authorization attemp');
        res.status(500).send('failed');
    }
}

module.exports = auth;