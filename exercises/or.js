import { NodeSSH } from "node-ssh";

const ssh = new NodeSSH();

export async function orOperator(server) {
  try {
    const testConfig = {
      host: '',
      username: '',
      port: '',
      password: '',
    };

    const fakeServer = todosValoresSaoTruthy(testConfig) //uso de or


    await ssh.connect(fakeServer || server);
    console.log("✅ Conexão SSH estabelecida com sucesso.");

    const result = await ssh.execCommand("ls");
    console.log(result.stdout);
    console.log("❌ Esse é o meu CONSOLE.LOG");

    ssh.dispose();
  } catch (error) {
    console.error("❌ Erro ao conectar via SSH:", err.message);
    console.error(err);
  }
}

function todosValoresSaoTruthy(obj) {
    return Object.values(obj).every((valor) => !!valor);
  }
