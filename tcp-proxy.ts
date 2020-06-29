import net from "net";

net.createServer(inc => {
    const out = net.connect(2525);
    inc.pipe(out);
    out.pipe(inc);
}).listen(25025);

console.log("Net server proxying 25025 => 2525")


