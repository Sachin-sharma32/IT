import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "../react-email-starter/emails/yelp";

const sendEmail = (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    auth: {
      user: "contact@theblogforeverything.com",
      pass: "Feb@2023",
    },
  });
  transporter;

  const emailHtml = render(<Email username={data.name} link={data.url} />);

  const options = {
    from: "contact@theblogforeverything.com",
    to: data.email,
    subject: data.subject,
    html: emailHtml,
  };

  transporter.sendMail(options);
};

export default sendEmail;
