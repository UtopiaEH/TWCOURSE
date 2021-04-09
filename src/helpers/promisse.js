// console.log('1')
// console.log('2')
// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('3')
//     }, 1000)
// })
// promise.then((value) => console.log(value))
// console.log('4')
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('5')
//     }, 0)
// })
// promise1.then((value) => console.log(value))
// console.log('6')
//

// 1
// 2
// 3
// 4

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('3')
//     }, 1000)
//
//     reject('Error')
// })
// promise.then((value) => console.log(value))
// promise.catch((value) => console.log(value))

async function promisse() {
    await setTimeout(() => {
        console.log('test')
    }, 5000)

    console.log(1)
}
promisse()
// promisse.then((value) => console.log(value))