let a = 10

for (let i = 0; i <= a; i++) {
    if (a % i === 0){
        console.log(i)
    }
}

for (let i = 1; i <= 100; i++) {
    let b = a * i
    if (b > 100){
        break
    }
    console.log(b)
}