const axios = require('axios');
const API_ENDPOINT = 'https://api.ngrok.com/tunnels';
const map = require('./homeUrlMap');

function updateUrl() {
    axios
        .get(API_ENDPOINT, {
            headers: {
                Authorization: process.env.NGROK_API,
                'Ngrok-Version': 2,
            },
        })
        .then((res) => {
            const data = res.data;

            const tunnelsCount = data.tunnels.length;
            if (tunnelsCount <= 0) {
                return;
            }

            const httpsTunnels = data.tunnels.filter((tunnel) =>
                tunnel.public_url.startsWith('https')
            );

            httpsTunnels.forEach((tunnel) => {
                axios
                    .get(tunnel.public_url + '/id', {
                        headers: {
                            'ngrok-skip-browser-warning': ' ',
                        },
                    })
                    .then((res) => {
                        map.set(res.data.HOME_ID, tunnel.public_url);
                    });
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

updateUrl();
setInterval(() => {
    updateUrl();
}, 10 * 60 * 1000);
