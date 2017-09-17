var numberConst;
(function (numberConst) {
    numberConst[numberConst["pi"] = 3.14] = "pi";
    numberConst[numberConst["e"] = 2.71] = "e";
})(numberConst || (numberConst = {}));
console.log(numberConst.pi * (6 * 6));
