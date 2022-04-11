const team = [
        {member: 'John',km: 3},
        {member: 'Jane',km: 4},
        {member: 'David',km: 5},
        {member: 'Peter',km: 2},
        {member: 'Peter',km: 9}
    ];
let sum = 0;

for (let tea of team) {
        sum += tea.km;
}
// for (let {km} of team) {
//     sum += km;
// }

console.log(sum);