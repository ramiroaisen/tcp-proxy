import net from "net";

net.createServer(inc => {
    const out = net.connect(25);
    inc.pipe(out);
    out.pipe(inc);
}).listen(2525);

console.log("Net server proxying 2525 => 25")


