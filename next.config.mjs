import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig, {
  provider: "amazon-s3",
  providerConfig: {
    "amazon-s3": {
      accessKeyId: "AKIASM6UBET66FUHOUTK",
      secretAccessKey: "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",
      bucket: "content-master-assets-europe",
      endpoint: "https://s3.eu-west-1.amazonaws.com",
    },
  },
});
