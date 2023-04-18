// @ts-nocheck
import mongoose from "mongoose";
import Connection from "../../models/connection";
import alertEmail from "../../utils/alertEmail";

export default async function verify(req, res) {
  const { name, email, company, phone, message } = req.query;
  const exist = await Connection.findOne({ email: email });
  if (exist) {
    return res.status(500).json({
      status: "Error",
      message:
        "Token expired (You have tried verifying using this link in the past). Try making a new request @ https://www.itxclerate.com.",
    });
  }
  const doc = await Connection.create({
    name,
    email,
    company,
    phone,
    message,
  });

  console.log(doc);

  alertEmail({
    userName: name,
    adminName: "Sachin",
    userEmail: email,
    adminEmail: "sachin2sharma001@gmail.com",
    phone,
    subject: "New connection made",
    message: message,
  });
  res.redirect("https://www.itxcelerate.com/verified");
}
