const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config.env.local') });

module.exports = {
  apps : [{
    name: "SankhyaVendas",
    // CORREÇÃO: Aponta para o servidor otimizado
    script: ".next/standalone/server.js",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 5000,
      HOSTNAME: "0.0.0.0",
      // Garante que as vars do .env sejam passadas
      SANKHYA_TOKEN: process.env.SANKHYA_TOKEN,
      SANKHYA_APPKEY: process.env.SANKHYA_APPKEY,
      SANKHYA_USERNAME: process.env.SANKHYA_USERNAME,
      SANKHYA_PASSWORD: process.env.SANKHYA_PASSWORD,
      GEMINI_API_KEY: process.env.GEMINI_API_KEY,
      ORACLE_USER: process.env.ORACLE_USER,
      ORACLE_PASSWORD: process.env.ORACLE_PASSWORD,
      ORACLE_CONNECT_STRING: process.env.ORACLE_CONNECT_STRING,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
    }
  }]
};
