console.log("Hello")
document.body.style.backgroundColor = "gray";


// const x = new v.NDArray([1, 2, 3]);
var p=math.matrix([[1,2],[3,4]]);
const peval=math.eigs(p).values;
const ev1=peval.toArray()[0];
const ev2=peval.toArray()[1];
const pevec=math.eigs(p).vectors;
const v1=math.matrix(pevec.toArray()[0]);
const v2=math.matrix(pevec.toArray()[1]);
console.log(peval)
console.log(v1)
console.log(v2)
// console.log(math.multiply(p,v1))