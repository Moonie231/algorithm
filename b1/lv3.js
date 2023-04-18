let a = 5
let b = 5
let c = 5

if (a + b < c || a + c < b || b + c < a) {
    console.log('k phai tam giac')
} else if (a === b && b === c) {
    console.log('tam giac deu')
} else if (a === b || c === b || a === c) {
    console.log('tam giac can')
} else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
    console.log('tam giac vuong')
} else {
    console.log('tam giac thuong')
}