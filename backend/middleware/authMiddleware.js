import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: token_decode.id }; // 👈 req.body me nahi, req.user me daalo
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authMiddleware;
