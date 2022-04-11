function checkTH(kids) {
    const kids2 = kids
    .filter(kid => kid.age < 11 && kid.age > 5)
    .map(kid => ({
        id: kid.id,
        name: kid.name
    }));
    console.log(kids2);
}

module.exports = {
    checkTH : checkTH
}