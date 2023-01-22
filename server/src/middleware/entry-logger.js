
const entryLogger = (req,res,next)=>{

    // res.session.uID = 2;
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('\t::(>)ENTER: ',fullUrl);
    next();
}

const exitLogger = (req,res,next)=>{
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    
    res.on("finish",()=>{
        console.log('\t::(<)EXIT: ',fullUrl);
    })
   
    next();
}

module.exports = {
    entryLogger,
    exitLogger
}