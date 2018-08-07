'use strict'

module.exports = appInfo => {
    const config = {
        keys: 'joyu|station#233',
    };

    config.cluster = {
        listen: {
            path: '',
            port: 8001,
            hostname: ''
        }
    }

    config.static = {
        'prefix': 'assets'
    }

    return config;
}
