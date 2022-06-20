import 'dotenv/config';

export default {
  name: 'sms',
  version: '0.0.1',
  extra: {
    HOST_IP: process.env.HOST_IP,
  },
};