var Windows = /** @class */ (function () {
    function Windows() {
    }
    Windows.showWidth = function () {
        console.log("Width :" + Windows.width);
    };
    Windows.showheight = function () {
        console.log("Height :" + Windows.height);
    };
    return Windows;
}());
Windows.width = 1024;
Windows.height = 768;
Windows.showWidth();
Windows.showheight();
