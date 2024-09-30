import cowsay from 'cowsay';
import os from 'os';
import http from 'http';

function getSystemInfo() {
    return {
        system: os.type(),
        release: os.release(),
        version: os.version(),
        node: os.hostname(),
        processor: os.arch()
    };
}
function createCowsayMessage(data) {
    const { system, release, version, node, processor } = data;

    const templateMessage = `
    Hello, Stranger!
    Here's your info you requested:
    SYSTEM INFO: ${system}
    SYSTEM RELEASE: ${release}
    SYSTEM VERSION: ${version}
    SYSTEM NODE: ${node}
    SYSTEM PROCESSOR: ${processor}
    `;
    return cowsay.say({ text: templateMessage, e: 'oO', T: 'U ' });
}
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const message = createCowsayMessage(getSystemInfo());
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
