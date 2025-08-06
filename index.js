import {conectarViaSSH} from './exercises/coalescing_operator.js'
import { getServer } from './config.js'

const server = getServer(1)
await conectarViaSSH(server)
