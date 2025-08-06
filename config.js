import dotenv from "dotenv";
import ping from "ping";

dotenv.config();

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
    case "1":
    case "um":
    case "one":
    case 1:
      return servers[0];
    case "2":
    case "dois":
    case "two":
    case 2:
      return servers[1];
    default:
      throw new Error("Invalid server");
  }
}

/**
 * Verifica se o host está online usando ping
 * @param {string} host - endereço IP ou hostname do servidor
 * @returns {Promise<boolean>} - true se o host responder, false caso contrário
 */
export async function checkServerAvailability(host) {
  try {
    const res = await ping.promise.probe(host, {
      timeout: 2,
      extra: ["-c", "1"], // Envia apenas 1 pacote
    });

    return res.alive;
  } catch (error) {
    console.error(`Erro ao tentar pingar o host ${host}:`, error);
    return false;
  }
}
