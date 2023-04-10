// @ts-nocheck
import { render } from "@react-email/render";
import Email from "../../react-email-starter/emails/yelp";
import sendEmail from "../../utils/verifyEmail";
import createConnection from "../../utils/mongoose";
import Connection from "../../models/connection";
import alertEmail from "../../utils/alertEmail";

export default async function connection(req, res) {
  createConnection();

  if (req.method === "POST") {
    const { name, email, company, phone, message } = req.body;
    const exist = await Connection.findOne({ email: email });
    if (exist) {
      const doc = await Connection.create(req.body);
      res.status(200).json({
        status: "success",
        message: "Your request has been sent successfully",
        data: {
          doc,
        },
      });
      const emails = ["sachin2sharma001@gmail.com"];
      alertEmail({
        userName: name,
        adminName: "Sachin",
        userEmail: email,
        adminEmail: "cnrahul.noble@gmail.com",
        phone,
        subject: "Query from existing connection.",
        message: message,
      });
      return;
    }
    const url = `https://www.itxcelerate.com//api/verify?name=${name}&email=${email}&company=${company}&phone=${phone}&message=${message}`;
    const newURL = url.replace(/ /g, "%20");
    sendEmail({
      email: email,
      subject: "Welcome to ITXcelerate",
      name: name,
      url: newURL,
      message: message,
    });
    res.status(200).json({
      status: "success",
      message: "A verification link has been sent to your email",
    });
  }
}
