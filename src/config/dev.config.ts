export const devConfig = {
  name: "DEV",
  baseUrl: process.env.DEV_BASE_URL || "https://www.saucedemo.com",
  credentials: {
    username: process.env.DEV_USERNAME || "standard_user",
    password: process.env.DEV_PASSWORD || "secret_sauce",
  },
};
