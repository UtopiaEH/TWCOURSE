export {}

let c: number = 0 //boolean, string
function show(obj: ITest): void {
    obj.v[0].a
}

const arr: string[] = [ 'a', 'b' ]

// const arr: Array<string> = ['a', 'b']

interface ITest {
    a: string
    b: string[],
    v: { a: string, b: boolean }[]
}

// int myNum = 5;
// let num: number = 5


const test: ITest = {
    a: '1',
    b: [ 'a', 'b' ],
    v: [
        {
            a: 'sd',
            b: true
        }
    ]
}

const res = show(test)

console.log('>>TS', res)