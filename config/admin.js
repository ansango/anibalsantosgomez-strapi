module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ee6191e725a51fbb52ce958d6bbcf0f'),
  },
});
