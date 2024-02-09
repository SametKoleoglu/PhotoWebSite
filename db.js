import mongoose from "mongoose";

const connec = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "",
    })
    .then(() => {
      console.log("Successfully");
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
};

export default connec;
