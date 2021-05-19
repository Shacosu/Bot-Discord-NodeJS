const cheerio = require('cheerio');
const axios = require('axios');

module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            axios.get('http://cfx.re/join/a97le9')
                .then(res => {
                    const $ = cheerio.load(res.data);
                    let text = ($("body > main > aside > span ").text());
                    const resultado = parseInt(text.substring(15, 18)) || parseInt(text.substring(15, 17)) || -1;
                    if (resultado >= 0) {
                        const status = `${resultado} jugador/es`;
                        client.user.setActivity(status, { type: 'WATCHING' })
                    } else if (resultado > 99) {
                        const status = `${resultado} jugador/es`;
                        client.user.setActivity(status, { type: 'WATCHING' })
                    }
                })
            return setStatus;
        }(), seconds * 1000)
    }
}