import { checkServerAvailability } from "../config.js";

export async function checkServers(listServers) {
  for (let i = 0; i < listServers.length; i++) {
    let asd = await checkServerAvailability(listServers[i].ip);
    let statusServer = checkServerStatus(asd)
    listServers[i]["status"] = statusServer;
  }
  console.log(listServers);
  return listServers;
}

let myServers = [
  {
    ip: "192.168.0.15",
    machine: "celular",
  },
  {
    ip: "192.168.0.20",
    machine: "notebook",
  },
  {
    ip: "192.168.0.27",
    machine: "notebook",
  },
  {
    ip: "192.168.0.37",
    machine: "notebook",
  },
];

function checkServerStatus(isServerUp){
    if(isServerUp){
        return 'Up'
    }
    return 'Down'

}

await checkServers(myServers);
