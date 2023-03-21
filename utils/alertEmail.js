import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "../react-email-starter/emails/alert";

const alertEmail = (data) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });
    console.log(transporter);

    const emailHtml = render(
        <Email
            adminName={data.adminName}
            phone={data.phone}
            userName={data.userName}
            userEmail={data.userEmail}
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
