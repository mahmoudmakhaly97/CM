"use server";

import { google } from "googleapis";
import { redirect } from "next/navigation";
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ThankYouEmail } from '../../emails/thank-you-email'
const resend = new Resend('re_NcXLHGCU_CaFepz55tVNVqAvVpjA3htfA');

const sheets = google.sheets("v4");

const sheetId = "1LIrTwzVueNUqiplN5LOGkyex7X3XToVTtkI825R0a4E";

async function insertToSheet({ values }: { values: string[] }) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      project_id: "trans-vehicle-351009",
      client_email:
        "content-master-form@trans-vehicle-351009.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3dbhjC6vLQnpz\nefLQ5wozCzIPipO3+oQpKqMf7jneBgBV+oHDpRJUcjJZPtPaigsBzMS6Kys1Nx9k\nCh4CqIoKAh4XbYhWc4QLwlVNiy3Tr6PkGRqT9X1+/4Rf+x/l0zN0/WG+a4NmtCMS\nGJawNAEMpAwUwJBuQ+68jQs6/n914ZpUQXCbv0xMRXtWXOdiBiaJNdLWQu97azpd\nancyPFGu+u4fh70fVuCYRXRAsqIFDRVAKB+CvpCEz7zsfGKlebO06tXYdU7HW55f\n9fVyyDFvWeiiWJoXcv87Ypyr25gnWv9z/zPL4XVglzy0I97ZUrIrMMxD71ZrSbpd\n2tNNLuflAgMBAAECggEASK+h6dAOdR42ILlgvGbFcjrNzz2C0EI3iY3kinqav74V\n9Pqm3gpxTDbgft53Fl9aBBEKoo4G9PMNg1fE0x3Oby+ul26ktUfYOcZ5gJsTgYrV\nvsI5dwSs/5uh6Vs4JJj8iq33Q3gaXB8jxAAs98vq3ITEapZuwtk0Zczl9a4udtfK\nw3tBKOfLbCVbLV9A3iCi5LpKJEjjFYM2ULWTXShLbhdoo5/0t2FVBETr+062ezgt\nWQUqqCVrsthbicMR/HddoJPJ49IRamBXBKkql2rZuuqeSbtOJeY/vbeu6Jlzl8LX\n1Lb9T3ui7MIqqJiWlUv02atuYD18qvu2TaClDpfrQwKBgQDq0Ld9hndDfePh4mze\nvT4jiZN5utd6OyWhNDykPQafAGVm9Y3RB8NA9xXGneccIDogvulYUWD/xbkv+/s6\n8YzWQyXfONe/MXrVLLQcgOOn69IRM/DuqkFpHvxIUqLkWpMw1GfbpE0Zx16UWYQu\noLBWUvymAV6DeLjSYu44joMOPwKBgQDIAuZ6IiSpQYeKHVW0bB2EBxnKASZIL3vN\nFxkmBQW8otBSPoMZrEcyHf6zNYSr9MKLMkhPa3SRjB7GOG+5+Bu3Fm3oGYpGHW9k\nFrzQdIxC00sYxRinaq9/To3tiJs6jcpcGRLTe+u+/ZKZbfDGHWNIaSbD3Pe3Rd9y\na5ON1PBI2wKBgD2gaYfYMpTUBWrTMh+DKzvIb5wTHVpHC6kzPHceTQ6N3A8Zgw7J\nKsVyE5T8/Bq1movdjwBO21ZFXkTprRXbL0tMdDQRhw32vnYUNXEForn/ejJpn2ID\n7QbZyvxwM7Aa1WaLWHacuF97o6brl3VlVuJRBV3MHjIDDP6qWDsfq+WhAoGBAMfK\npeGQY6Cy9aqQXQFKEj3FPgycE1p+HCOlFBj3YWCqHoBZM2ocvk2gysDHEA0ZBJA5\nHSRASYPuPPtyeqCA52Z/QDBd+tLJKnEHiXqNQWKrX9ORZmwt1LrNhFanY7Ac3Owc\nm8KngbkZ4SvkN2QfDQLTDscN3mCzql3Iee9uqsuLAoGBANkcxIGFWOOyuyrhPib8\nIFFeVqado8MdzEhZkb+QDp53wRUM/PUrMGI6/eB9jYHGd2aseNwfRraYPhaBzffF\nyoVTEJfSY37n1VsbcWJbZi6TXFB7O+9LmODYGRglS4l9xbEbLUUaQ3p3jvMNnRBX\nzDtpMijv6Z4ITiMW9KXqBm20\n-----END PRIVATE KEY-----\n",
    },

    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const authToken = await auth.getClient();

  // @ts-ignore
  return sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    auth: authToken,
    valueInputOption: "RAW",
    resource: {
      values: [values],
    },
    range: "Sheet1",
  });
}

const signup = async (
  previousState: { submitted: boolean; error: string[] },
  formData: FormData,
) => {
  if (!formData.has("language-en") && !formData.has("language-ar")) {
    return { submitted: true, error: ["language-required"] };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string

  await insertToSheet({
    values: [
      name,
      formData.get("phone") as string,
      email,
      formData.get("age") as string,
      formData.get("gender") as string,
      formData.get("emirate") as string,
      formData.get("social-media") as string,
      formData.get("industry") as string,
      (formData.get("industry-other") as string) ?? "",
      [
        formData.has("language-en") ? "en" : null,
        formData.has("language-ar") ? "ar " : null,
      ]
        .filter(Boolean)
        .join(", "),
    ],
  });


  const html = render(<ThankYouEmail name={name} />);


  const { data, error } = await resend.emails.send({
    from: 'Content Masters <thank-you@content-masters.cdexeg.com>',
    to: [email],
    subject: 'Thank You for Signing Up!',
    html: html,
  });

  if (error) {
    console.log("SSS", { error });

    return { submitted: true, error: ["unkown"] };
  }

  const { data: data2, error: error2 } = await resend.emails.send({
    from: 'Content Masters <form@content-masters.cdexeg.com>',
    to: ["talent@magnitudedigital.ae"],
    subject: `New Sign Up "${name}"`,
    html: `
    <p><strong>Name</strong>: ${name}</p>
    <p><strong>Email</strong>: ${email}</p>
    <p><strong>Phone</strong>: ${formData.get("phone")}</p>
    <p><strong>Age</strong>: ${formData.get("age")}</p>
    <p><strong>Gender</strong>: ${formData.get('gender')}</p>
    <p><strong>Emirate</strong>: ${formData.get('emirate')}</p>
    <p><strong>Social Media</strong>: ${formData.get('social-media')}</p>
    <p><strong>Industry</strong>: ${formData.get('industry') === "Other" ? formData.get('industry-other') : formData.get('industry')}</p>
    <p><strong>Language</strong>: ${[
        formData.has("language-en") ? "en" : null,
        formData.has("language-ar") ? "ar " : null,
      ]
        .filter(Boolean)
        .join(", ")}
    </p>
    `,
  });


  if (error2) {
    console.log("SSS", { error2 });

    return { submitted: true, error: ["unkown"] };
  }

  redirect("/thank-you");

};

export { signup };
