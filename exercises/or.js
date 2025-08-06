import { conectarViaSSH } from "./coalescing_operator.js";

export async function runOrOperator(server) {
  try {
    const testConfig = {
      host: "",
      username: "",
      port: "",
      password: "",
    };

    let config = Object.values(testConfig).every((valor) => !!valor);
    conectarViaSSH(config || server)


    // console.log("✅ Conexão SSH estabelecida com sucesso.");
  } catch (error) {
    console.error("❌ Erro ao conectar via SSH >>:", err.message);
    console.error(err);
  }
}
