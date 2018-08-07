'use strict'

const Controler = require('egg').Controller;

class HomeControler extends Controler {
    async index() {
        this.ctx.body = 'Hello world!';
    }
}

module.exports = HomeControler;
