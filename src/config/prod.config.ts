export const prodConfig = {
  name: "PROD",
  baseUrl: process.env.PROD_BASE_URL || "https://www.saucedemo.com",
  credentials: {
    username: process.env.PROD_USERNAME || "",
    password: process.env.PROD_PASSWORD || "",
  },
};
