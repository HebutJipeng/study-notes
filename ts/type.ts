// 元组 Tuple
let x: [string, number];
x = ['hello', 10]; // ok
// x = [10, 'hello']; // err

x[0].substr(1);
// x[1].substr(1) // err

// 联合类型？

// 枚举 enum
enum Color { Red = 1, Yellow, Blue }
let c: Color = Color.Red
let colorName: string = Color[2] //