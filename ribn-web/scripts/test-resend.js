const { Resend } = require('resend');

const resend = new Resend('re_7nRtRS1Z_BMJ8gPbGdeti3zo4aXqw5KCB');

async function test() {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hola@ribn.digital',
      subject: 'Prueba de Sistema: ¡Resend conectado!',
      html: '<p>Si te llegó este email, significa que la clave API es <strong>correcta</strong> y la conexión de la web está lista y funcionando.</p>'
    });
    console.log("Success:", response);
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
