const os = require('os');

//info about current user
const user = os.userInfo();

//method return the system uptime in seconds

console.log(`The System uptime is ${os.uptime()}`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);