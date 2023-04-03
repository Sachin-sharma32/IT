import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
import { Column } from "@react-email/column";
import { Row } from "@react-email/row";

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export default function Email({
    adminName = "Sachin",
    userName = "zenorocha",
    email = "sachin2sharma001@gmail.com",
    phone = 68323235323,
    message = "hello",
}) {
    return (
        <Html>
            <Head />
            <Preview>Verify on ITXcelerate</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={{}}>
                        <Image width={100} height={100} 
                            src={`https://theblogforeverything.s3.amazonaws.com/celerate.jpg`}
                            alt="Vercel"
                            style={logo}
                        />
                    </Section>
                    <Section style={{ padding: "20px" }}>
                        <Text style={text}>
                            Hello <strong>{adminName},</strong>
                        </Text>
                        <Text style={text}>
                            A new connection has been made.
                        </Text>
                        <Text style={text}>
                            Name : <strong>{userName}</strong>
                        </Text>
                        <Text style={text}>
                            Email : <strong>{email}</strong>
                        </Text>
                        <Text style={text}>
                            Phone : <strong>{phone}</strong>
                        </Text>
                        <Text style={text}>
                            Message : <strong>{message}</strong>
                        </Text>

                        {/* <Section>
                            <Row>
                                <Column align="right">
                                    <Image width={100} height={100} 
                                        style={avatar}
                                        src={
                                            "https://static.vecteezy.com/system/resources/thumbnails/003/683/447/small/line-stripes-x-alphabet-letter-logo-icon-for-business-and-company-simple-black-and-white-letter-design-for-identity-vector.jpg"
                                        }
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                                <Column align="center">
                                    <Image width={100} height={100} 
                                        src={`https://theblogforeverything.s3.amazonaws.com/pngwing.com+(1).png`}
                                        width="50"
                                        height="50"
                                        alt="invited you to"
                                    />
                                </Column>
                                <Column align="left">
                                    <Image width={100} height={100} 
                                        style={avatar}
                                        src={
                                            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/dtokjerhk1dxyludtlwc"
                                        }
                                        width="64"
                                        height="64"
                                    />
                                </Column>
                            </Row>
                        </Section> */}
                        <Row style={{ marginTop: "30px" }}>
                            <Column align="center">
                                <Button
                                    pX={20}
                                    pY={12}
                                    style={btn}
                                    href={`tel:+91${phone}`}
                                >
                                    CALL
                                </Button>
                            </Column>
                            <Column align="center">
                                <Button
                                    pX={20}
                                    pY={12}
                                    style={btn}
                                    href={`mailto:${email}`}
                                >
                                    MAIL
                                </Button>
                            </Column>
                        </Row>
                        <Hr style={hr} />
                        <Text style={footer}>
                            <span>
                                <a href="/">IT Xcelerate</a>
                            </span>{" "}
                            is a leading provider of technology solutions for
                            businesses of all sizes. Our mission is to help our
                            clients leverage the power of technology to achieve
                            their goals and succeed in the digital age. With a
                            team of highly skilled and experienced
                            professionals, we deliver innovative and
                            cutting-edge solutions that exceed our clients'
                            expectations.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    margin: "0 auto",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
    border: "1px solid #eaeaea",
    backgroundColor: "white",
    borderRadius: "20px",
    margin: "40px auto",
    // overflow: "hidden",
};

const logo = {
    margin: "0 auto",
    width: "100%",
};

const h1 = {
    color: "#000",
    fontSize: "30px",
    fontWeight: "normal",
    textAlign: "center" as const,
    margin: "30px 0",
    padding: "0",
};

const avatar = {
    borderRadius: "100%",
    border: "1px solid black",
};

const link = {
    color: "#067df7",
    textDecoration: "none",
};

const text = {
    color: "#000",
    fontSize: "15px",
    lineHeight: "10px",
};

const black = {
    color: "black",
};

const center = {
    verticalAlign: "middle",
};

const btn = {
    backgroundColor: "purple",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "50px",
    textDecoration: "none",
    textAlign: "center" as const,
    width: "100px",
};

const hr = {
    border: "none",
    borderTop: "1px solid #eaeaea",
    margin: "26px 0",
    width: "100%",
};

const footer = {
    color: "#666666",
    fontSize: "12px",
    lineHeight: "24px",
};
