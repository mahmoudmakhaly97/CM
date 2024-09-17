import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotionMagicLinkEmailProps {
  name?: string;
}

const logoLink = "https://content-masters.cdexeg.com/logo.png"

export const ThankYouEmail = ({
  name,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank You for Signing Up!</Preview>
    <Body style={main}>
      <Container style={{
        paddingLeft: "12px",
        paddingRight: "12px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}>
        <Img
          src={logoLink}
          height={100}
          style={{ marginTop: "30px", marginBottom: "30px", marginInline: 'auto' }}

          alt="Content Masters's Logo"
        />
        <Text style={{ ...text, marginBottom: "14px" }}>
          Dear {name},
          <br />
          Thank you for signing up for our program! We appreciate your interest and are thrilled to see such enthusiasm.
          Our team is currently reviewing all applications, and we will reach out to those who are accepted as soon as possible. In the meantime, if you have any questions, feel free to contact us.
          <br />
          <br />Thank you again for your interest, and we hope to connect with you soon!
          Best regards,
          <br /><br />
          Content Masters Team
        </Text>
      </Container>
    </Body>
  </Html>
);

ThankYouEmail.PreviewProps = {
  loginCode: "sparo-ndigo-amurt-secan",
} as NotionMagicLinkEmailProps;

export default ThankYouEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",

};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
