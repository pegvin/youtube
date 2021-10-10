const myModule = require("./formatData")
const os = require('os-utils');

const currentCpuCount = os.cpuCount()
const currentPlatform = os.platform()
const totalMem = os.totalmem() / 1024

function showData(loop=false) {
	os.cpuUsage((v) => {
		if (loop) console.clear()
		console.log(myModule(
			cpu = v * 100,
			freemem = os.freememPercentage() * 100,
			mem = totalMem,
			platform = currentPlatform,
			cpuCount = currentCpuCount,
			uptime = os.sysUptime()
		))
	});
}

if (process.argv[2] == "loop") {
	setInterval(() => showData(loop=true), 1000)
} else {
	showData()
}
