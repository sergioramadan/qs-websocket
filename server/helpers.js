const request = require('request');

function currencyWatcher () {
    this.currency = null;
    this.socket = null;
    this.value = null;
    this.interval = null;

    const getCurrencyService = async () => { 
        return new Promise((resolve, reject) => {
            request(`https://https://blockchain.info/tobtc?currency=${this.currency}&value=${this.value}`, { json: true }, (err, res, body) => {
                if (err) reject(err)
                resolve(body)
            });
        })
    };

    const recursiveInterval = async () => {
        let newPrice = await getCurrencyService();
        socket.emit('setPrice', newPrice);
    };

    const setWatcher = ({ currency, socket, value, interval }) => {
        this.currency = currency;
        this.socket = socket;
        this.value = value;
        this.interval = interval;
    };

    const startWatcher = () => {
        recursiveInterval();
    };

    const stopWatcher = () => {
        clearInterval(recursiveInterval);
    };

    return {
        setWatcher,
        startWatcher,
        stopWatcher
    }
}

module.exports = { currencyWatcher };
