import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      msg: "Login Again",
    });
  }
  console.log(decoded);
  req.user = decoded;
  next();
};
