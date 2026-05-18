const https = require('https');

const ids = [
    "8801190326630779",
    "2336473466435863",
    "1428444772622445",
    "485800006886931"
];

ids.forEach(id => {
    const options = {
        hostname: 'www.facebook.com',
        path: `/photo/?fbid=${id}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    };

    const req = https.request(options, res => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
            const match = data.match(/<meta property="og:image" content="([^"]+)"/);
            if (match) {
                console.log(`ID ${id}: ${match[1].replace(/&amp;/g, '&')}`);
            } else {
                console.log(`ID ${id}: not found`);
            }
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    req.end();
});
