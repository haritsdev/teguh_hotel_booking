import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_MAILTRAP_HOST,
    port: process.env.SMTP_MAILTRAP_PORT,
    auth: {
      user: process.env.SMTP_MAILTRAP_USER,
      pass: process.env.SMTP_MAILTRAP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.SMTP_MAILTRAP_FROM_NAME} < ${process.env.SMTP_MAILTRAP_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

export default sendEmail;
