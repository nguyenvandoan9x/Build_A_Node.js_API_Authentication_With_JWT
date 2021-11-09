const jwt =require('jsonwebtoken')
module.exports = (req,res,next)=>{
    let token = req.get('auth-token');
    try{
        let user_id = jwt.verify(token,'shhhhh');
        if(!user_id) return res.status(400).send('acsess deline !');
        return next();
    }catch(err)
    {
        return res.status(400).send('acsess deline !');
    }
    
}