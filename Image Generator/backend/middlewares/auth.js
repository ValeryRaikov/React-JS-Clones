import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({success: false, message: "Not Authorized."})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecode.id) {
            return res.json({success: false, message: "Not Authorized."})
        } 

        req.body.userId = tokenDecode.id;

        next();
    } catch (err) {
        console.error(err);
        res.json({success: false, message: err.message});
    }
}

export default userAuth;