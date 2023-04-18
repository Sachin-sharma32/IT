import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "../react-email-starter/emails/alert";

const alertEmail = (data) => {
  console.log("hello world");
  console.log(process.env.EMAIL, process.env.PASS);
  console.log(data);
  const transporter = nodemailer.createTransport({
    // host: "smtp.zoho.in",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const emailHtml = render(
    <Email
      adminName={data.adminName}
      phone={data.phone}
      userName={data.userName}
      email={data.userEmail}
    />
  );

  const options = {
    from: process.env.EMAIL,
    to: data.adminEmail,
    subject: data.subject,
    html: emailHtml,
  };

  transporter.sendMail(options);
};

export default alertEmail;
