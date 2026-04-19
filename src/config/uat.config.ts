export const uatConfig = {
  name: "UAT",
  baseUrl: process.env.UAT_BASE_URL || "https://www.saucedemo.com",
  credentials: {
    username: process.env.UAT_USERNAME || "",
    password: process.env.UAT_PASSWORD || "",
  },
};
