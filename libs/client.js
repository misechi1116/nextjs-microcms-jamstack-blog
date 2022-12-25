import { createClient } from "microcms-js-sdk";

export const client = createClient ({
  serviceDomain: "blog-tutorial-nextjs-mise",
  apiKey: process.env.API_KEY,
});
