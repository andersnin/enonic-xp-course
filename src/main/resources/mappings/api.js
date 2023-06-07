var projectLib = require("/lib/xp/project");
var extra = require("/lib/extra");

exports.get = function () {
    var project = projectLib.get({
        id: 'xp-vanilla-starter'
    });
    var result = extra.stringify(project);
    return {
        contentType: "application/json",
        body: result
    }
}
