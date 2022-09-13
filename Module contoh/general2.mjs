var awesomeNewModule = (function () {
    var exports = {};
    exports.helloMars = function () {
        console.log("Hello mars!");
    };
    exports.goodbye = function () {
        console.log("Goodbye!");
    };
    exports.baba = function () {
        console.log("Kebab");
    }
    exports.bom = () =>  {
        console.log("Duaaar");
    }
    return exports
}())

export default awesomeNewModule