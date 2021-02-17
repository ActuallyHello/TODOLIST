const { Identity } = require("./index");

exports.Status = class Status {
    constructor (name) {
        this.id = Identity.ID++;
        this.name = name;
    }
}