import { NodeSSH } from "node-ssh";

const ssh = new NodeSSH();

/**
 * Estabelece uma conexão SSH usando Node.js
 * @param {string} host - IP ou hostname do destino
 * @param {string} username - Nome de usuário SSH
 */

export async function conectarViaSSH(server) {
  try {


    const config = server;


    await ssh.connect(config);

    console.log("✅ Conexão SSH estabelecida com sucesso.");

    const result = await ssh.execCommand("ls");
    console.log(result.stdout);
    console.log('❌ Esse é o meu CONSOLE.LOG')

    ssh.dispose();
  } catch (err) {
    console.error("❌ Erro ao conectar via SSH:", err.message);
    console.error(err);
  }
}
