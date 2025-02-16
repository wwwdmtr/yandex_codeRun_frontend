module.exports = function (N, staff, K) {
    // Ваш код
    let x = 0, i = 0;
    staff.sort((a, b) => b - a);
    while (K > 0){
        x += staff[i++];
        K--;
    }

    return x 
}
