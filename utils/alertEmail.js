import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "../react-email-starter/emails/alert";

const alertEmail = (data) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        auth: {
            user: "contact@theblogforeverything.com",
            pass: "Feb@2023",
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
        from: "contact@theblogforeverything.com",
        to: data.adminEmail,
        subject: data.subject,
        html: emailHtml,
    };

    transporter.sendMail(options);
};

export default alertEmail;
