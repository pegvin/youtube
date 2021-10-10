function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return hDisplay + mDisplay + sDisplay; 
}

module.exports = (cpu, freemem, mem, platform, cpuCount) => {
return `CPU Usage: ${cpu.toFixed(2)}%
Free Memory: ${freemem.toFixed(2)}%
Total Memory: ${mem.toFixed(2)}GB
Platform: ${platform[0].toUpperCase() + platform.slice(1)}
CPU Count: ${cpuCount} Cores
Up Time: ${secondsToHms(uptime)}`
}