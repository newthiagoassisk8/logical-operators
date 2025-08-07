import { checkServerAvailability, servers } from "../config.js";
import { myServers ,myServersWithMissingInfo} from "../db.js";
// Exemplo com for
export async function checkServers(listServers) {
  for (let i = 0; i < listServers.length; i++) {
    let isTheServerUp = await checkServerAvailability(listServers[i].ip);
    let statusServer = checkServerStatus(isTheServerUp);
    listServers[i]["status"] = statusServer;
  }
  console.log(listServers);
  return listServers;
}
// Exemplo com for of
export async function checkServersWithForOF(listServers) {
  for (let server of listServers) {
    let isTheServerUp = await checkServerAvailability(server.ip);
    let statusServer = checkServerStatus(isTheServerUp);

    server["status"] = statusServer;
  }
  console.log(listServers);

  return listServers;
}

// Exemplo com for each
export async function checkServersWithForEach(listServers) {

  listServers.forEach(async (el) => {
    let isTheServerUp = await checkServerAvailability(el.ip);
    let statusServer = checkServerStatus(isTheServerUp);
    el["status"] = statusServer;
  });
  console.log(listServers);
  return listServers;
}

// Exemplo com do while
export async function checkServersWithDoWhile(listServers) {
  let i = 0;
  do {
    let isTheServerUp = await checkServerAvailability(listServers[i].ip);
    let statusServer = checkServerStatus(isTheServerUp);
    listServers[i]["status"] = statusServer;
    i += 1;
  } while (i < listServers.length);
  console.log(listServers);
  return listServers;
}

// TODO: Aplicar continue Descobrir essa porque saída tá dando errado
export async function foo(listServers) {
  let i = 0
  do {
    const server = listServers[i];
    if(!server?.ip){
      i++
      continue;
    }
    const statusServer = await checkServerStatus(server.ip)
    listServers[i]['status'] = statusServer
    console.log(server)
    i++

  } while (i < listServers.length);


}

await foo(myServersWithMissingInfo)
function checkServerStatus(isServerUp) {
  if (isServerUp) {
    return "Up";
  }
  return "Down";
}

// await checkServers(myServers);
// await checkServersWithForOF(myServers);
// await checkServersWithDoWhile(myServers);
