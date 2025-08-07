import { checkServerAvailability } from "../config.js";
import { myServers } from "../db.js";
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

// TODO: Aplicar continue
// Exemplo com continue
export async function checkServersWithDoWhile(listServers) {

}

function checkServerStatus(isServerUp) {
  if (isServerUp) {
    return "Up";
  }
  return "Down";
}

// await checkServers(myServers);
// await checkServersWithForOF(myServers);
await checkServersWithDoWhile(myServers);
