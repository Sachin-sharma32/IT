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

  const emails = [
    { adminName: "Sachin", adminEmail: "sachin2sharma001@gmail.com" },
    { adminName: "Sachin", adminEmail: "sachin@itxcelerate.com" },
    { adminName: "Rahul", adminEmail: "cnrahul.noble@gmail.com" },
    { adminName: "Rahul", adminEmail: "rahul.cn@itxcelerate.com" },
    { adminName: "Team", adminEmail: "contact@itxcelerate.com" },
    { adminName: "Vishakha", adminEmail: "vishakha@itxcelerate.com" },
    { adminName: "Vishakha", adminEmail: "vishakha25vs@gmail.com" },
  ];
  emails.map((admin) => {
    alertEmail({
      userName: name,
      adminName: admin.adminName,
      userEmail: email,
      adminEmail: admin.adminEmail,
      phone,
      subject: "Query from existing connection.",
      message: message,
    });
  });
  res.redirect("https://www.itxcelerate.com/verified");
}
