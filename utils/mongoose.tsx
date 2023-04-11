import mongoose from "mongoose";

const createConnection = () => {
    const connect = mongoose.connect(process.env.DB).then((connection) => {
        console.log("connected to DB");
    });
};

export default createConnection;
