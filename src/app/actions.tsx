"use server";

import { google } from "googleapis";
import { redirect } from "next/navigation";
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ThankYouEmail } from '../../emails/thank-you-email'
const resend = new Resend('re_NcXLHGCU_CaFepz55tVNVqAvVpjA3htfA');

const sheets = google.sheets("v4");

const sheetId = "1LIrTwzVueNUqiplN5LOGkyex7X3XToVTtkI825R0a4E";

 

const signup = async (
  previousState: { submitted: boolean; error: string[] },
  formData: FormData
) => {
  if (!formData.has("language-en") && !formData.has("language-ar")) {
    return { submitted: true, error: ["language-required"] };
  }

  // Extract form values
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  const code = formData.get("code") as string;
  const phone = formData.get("phone") as string; // keep as string for now
  const gender = formData.get("gender") as string;
  const languageEn = formData.get("language-en") as string;
  const languageAr = formData.get("language-ar") as string;

  // Sanitize inputs
  const sanitizedValues: { [key: string]: string } = {
    name: name.trim(),
    email: email.trim(),
    country: country.trim(),
    code: code.trim(),
    phone: phone.trim(),
    gender: gender.trim(),
    "language-en": languageEn?.trim() || "",
    "language-ar": languageAr?.trim() || "",
  };

  // Serialize the data
  const serializedData = new URLSearchParams(sanitizedValues).toString();
 
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyRSLt5AhNQnH4BKhSa4u8LvpOsqUluaVSLAZaMwtN8GH3nNkNB5Fyg0VbHDhnNfb4/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: serializedData,
      }
    );

    const result = await response.json();
    if (result.result === 'success') {
      alert('Successfully Registered.');
      form.reset();
    } else {
      alert('There was an error submitting your form.');
    }
  } catch (error) {
  }

  redirect("/thank-you");
};


export { signup };
