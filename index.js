import { conectarViaSSH } from "./exercises/coalescing_operator.js";
import { runOrOperator } from "./exercises/or.js";
import { getServer, checkServerAvailability } from "./config.js";

const server = getServer(1);
checkServerAvailability(server.host).then((online) => {
  online ||
    (console.log("❌ Servidor está fora do ar"),
    console.log("Trocando para VPN"),
    (server.host = process.env.SSH_VPN_HOST));

  online && console.log("✅ Servidor está online");

  runOrOperator(server);
});
