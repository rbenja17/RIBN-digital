require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error('ERROR: RESEND_API_KEY is not set. Create a .env.local file with RESEND_API_KEY=your_key');
  process.exit(1);
}

const resend = new Resend(apiKey);

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
