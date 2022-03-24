module.exports = {
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
    DB_URI:
      'mongodb+srv://aris:aris@cluster0.ajiar.mongodb.net/teguh_hotel?retryWrites=true&w=majority',

    STRIPE_API_KEY:
      'pk_test_51KgfQZGI3DcWEABuv64zARv64zK4bl9MzO17431ZToa6BLVMpHZoUVco9xQrFecNlMTHE7dbZakf4WVbS4cRglQ700k3sxieU2',
    STRIPE_SECRET_KEY:
      'sk_test_51KgfQZGI3DcWEABuHIe0cQFQNOwweV7bPW3sOwr9veAh3Cnp9b04OgRCX2GiLnrqFHzeHhXQpjkGqbdD7uLuoWUF00NY2IZ63z',

    STRIPE_WEBHOOK_SECRET: 'we_1KgnLxEiuVeZxW6cTabUTPPI',

    CLOUDINARY_CLOUD_NAME: 'teguhris',
    CLOUDINARY_API_KEY: '372253615142774',
    CLOUDINARY_API_SECRET: 'ahHroCxL3Xi3s_geuf9Wmp4gkq0',

    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',
    SMTP_FROM_EMAIL: '',
    SMTP_FROM_NAME: '',

    SMTP_MAILTRAP_HOST: 'smtp.mailtrap.io',
    SMTP_MAILTRAP_PORT: '255',
    SMTP_MAILTRAP_USER: '54896d28e0564c',
    SMTP_MAILTRAP_PASSWORD: '618393fb0de573',
    SMTP_MAILTRAP_FROM_EMAIL: 'tegihotel',
    SMTP_MAILTRAP_FROM_NAME: 'noreply@teguhhotel.com',

    NEXTAUTH_URL: 'https://teguh-hotel-booking.vercel.app',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
