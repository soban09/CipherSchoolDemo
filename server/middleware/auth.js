import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const JWTSECRET=process.env.jwt;

export const auth = async (req, res, next) => {
    // console.log('lulla');
    try {
        //   get the token from the authorization header
    const token = await req.headers.authorization.split(" ")[1];
    // console.log(token);
    //check if the token matches the supposed origin
    const decodedToken = jwt.verify(token, JWTSECRET);
        const user = decodedToken
        console.log(user);
        req.user = user
        next();
    }
    catch (error) {
        res.status(401).json({error:"Invalid request!"})
    }
}