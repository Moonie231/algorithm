let a = 3
let b = 20

for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    }
}