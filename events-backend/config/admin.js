module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a961a91c98b2dfd434fb9bdbbfcf44b1'),
  },
});
