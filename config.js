import dotenv from 'dotenv'
dotenv.config()

export const servers = [
  {
    host: process.env.SSH_HOST,
    username: process.env.SSH_USER,
    port: process.env.SSH_PORT,
    password: process.env.SSH_PASSWORD,
  },
  {
    host: process.env.SSH_HOST_2,
    username: process.env.SSH_USER_2,
    port: process.env.SSH_PORT_2,
    password: process.env.SSH_PASSWORD_2,
  },
];

export function getServer(serverName) {
  switch (serverName) {
    case '1':
    case 'um':
    case 'one':
    case 1:
      return servers[0]

    case '2':
    case 'dois':
    case 'two':
    case 2:
      return servers[1]

    default:
      throw new Error('Invalid server');
  }
}
