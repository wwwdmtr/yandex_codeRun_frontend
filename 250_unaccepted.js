module.exports = function(inputString) {
    const fullPattern = /^([G-HK-NO-Q][U]?[3-8]{3})([BT])((?:[CKMB][GJP])|(?:[ORS][J8ME]))([0-9A-Y]{1,24})Z$/;

    const match = inputString.match(fullPattern);
    if (!match) {
        throw new Error("Invalid input string format");
    }

    const spaceCode = match[1];
    const industry = match[2];
    const subCode = match[3];
    const id = match[4];

    return [spaceCode, industry, subCode, id];
};
