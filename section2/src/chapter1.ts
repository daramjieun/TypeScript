// 원시타입과 리터럴타입

// 원시타입 : 하나의 값만 저장하는 타입
// number, string, boolean, null, undefined
// 타입에 맞는 값만 할당 가능하다.
// 타입에 맞는 메서드만 사용 가능하다.

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;


// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

// null 값을 다른 타입의 변수에 할당하기
//let numA: number = null;  // ❌

//리터럴 타입
let numA: 10 = 10;

let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;