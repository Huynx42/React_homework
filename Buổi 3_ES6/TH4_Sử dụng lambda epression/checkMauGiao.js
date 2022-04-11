function checkMG(kids) {
    const mau_giao = [];
        kids.forEach(kid => {
            if (kid.age < 6) {
                mau_giao.push({
                    id: kid.id,
                    name: kid.name
                })
            }
        })
    console.log(mau_giao);
}    

module.exports = {
    checkMG : checkMG
}