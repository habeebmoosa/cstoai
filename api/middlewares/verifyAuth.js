import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "Please authenticate with valid crendential" });
    }

    try {
        
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.username = data.username;
        req.userId = data.id;
        req.position = data.position;

        next();
    } catch (error) {
        res.status(401).json({ message: "Please authenticate with valid crendential" });
    }
}