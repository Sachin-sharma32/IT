import mongoose from "mongoose";
import Connection from "../../models/connection";
import alertEmail from "../../utils/alertEmail";

export default async function verify(req, res) {
    const { name, email, company, phone, message } = req.query;
    const exist = await Connection.findOne({ email: email });
    if (exist) {
        return next(new AppError("Token Expired", 400));
    }
    const doc = await Connection.create({
        name,
        email,
        company,
        phone,
        message,
    });

    alertEmail({
        userName: name,
        adminName: "Sachin",
        userEmail: email,
        adminEmail: "sachin2sharma001@gmail.com",
        phone,
        subject: "New connection made",
        message: message,
    });
    res.redirect("https://www.itxcelerate.com");
}
