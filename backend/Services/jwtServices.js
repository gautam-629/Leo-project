
import jwt from 'jsonwebtoken';

class JwtServices{
    static sign(payload,expiry='1y',secret){
       return jwt.sign(payload,secret,{expiresIn:expiry})
    }
   static  async verifyToken(token,secret){
        return jwt.verify(token,secret)
    }
}
export default JwtServices;