module.exports = function check(str, bracketsConfig) {
    let out = str;
    for (let i = 0; i <= str.length / 2; i++) {
        bracketsConfig.forEach((item) => {
            out = out.replace(item[0] + item[1], '');

        });
    }
    return !out.length;
}