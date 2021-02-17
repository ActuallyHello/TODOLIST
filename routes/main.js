const { MainDTO } = require("../modules");
const bd = require("../dal/localstorage");

module.exports = (request, response) => {
    const model = new MainDTO("TODO LIST"
        , bd.getTasks()
        , bd.getStatuses());

    response.render("main", model);
}