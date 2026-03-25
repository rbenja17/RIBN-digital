"use server";

import { Resend } from 'resend';

export async function submitContactForm(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const project = formData.get("project") as string;

  if (!name || !email || !project) {
    return { success: false, message: "Por favor, completá todos los campos." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      success: false,
      message: "Error de configuración del servidor. Por favor, escribinos a hola@ribn.digital",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'RIBN Website <contacto@ribn.digital>',
      to: ['hola@ribn.digital'],
      subject: `Nuevo Proyecto de: ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo contacto desde la web de RIBN</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sobre su proyecto:</strong></p>
        <p>${project}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", JSON.stringify(error));
      return {
        success: false,
        message: "Hubo un error con el servidor de correos. Por favor, intentá de nuevo.",
      };
    }

    console.log("Email sent successfully:", data?.id);
    return {
      success: true,
      message: "¡Mensaje enviado! Te respondemos en menos de 24hs.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Hubo un error al enviar. Por favor, escribinos a hola@ribn.digital",
    };
  }
}
