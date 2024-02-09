import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        const user = await User.findById(decodedToken.userId);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const authenticatedToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (error) => {
        if (error) {
          console.log("Error Message ", error);
          res.direct("/login");
        } else {
          next();
        }
      });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    res.status(401).json({
      succeded: false,
      err: "Not authorized !",
    });
  }
};

export { authenticatedToken, checkUser };
