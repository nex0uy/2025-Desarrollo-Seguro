import jwt from 'jsonwebtoken';

const generateToken = (userId: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not set');
  return jwt.sign(
    { id: userId }, 
    secret, 
    { expiresIn: '1h' }
  );
};

const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not set');
  return jwt.verify(token, secret);
};

export default {
  generateToken,
  verifyToken
}