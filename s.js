const cake3 = [{
    weight: 1,
    value: 107
}, {
    weight: 5,
    value: 200
}, {
    weight: 2,
    value: 600
}, {
    weight: 1,
    value: 800
}, {
    weight: 7,
    value: 900
}, {
    weight: 8,
    value: 1600
}, {
    weight: 1,
    value: 5000
}, {
    weight: 1,
    value: 100
}]
var capacity = 20;
function newFunct(cake, cap) {
    var a = 0;
    var b = 0;
    console.log(b);
    cake.sort(function (value1, value2) {
        if (value2.value - value2.weight > value1.value - value1.weight) {
            return 1;
        } else {
            return -1;
        }
    })
    console.log(cake)
    for (var i = 0; i < cake.length; i++) {

        if (cap >= b + cake[i].weight) {
            a = a + cake[i].value;
            b = b + cake[i].weight;


        }
    }
    return a;
}
console.log(newFunct(cake3, capacity));