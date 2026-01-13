module.exports = {
  reactStrictMode: true,
  env: {
    projectId: process.env.projectId,
    dataset: process.env.dataset,
    useCdn: process.env.useCdn,
    apiVersion: process.env.apiVersion,
  },
  async redirects() {
    return [
      {
        source: '/albums',
        destination: '/music',
        permanent: true,
      },
    ];
  },
};