// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["spring", "summer", "winter"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 바(|)를 이용해 여러 타입중 하나를 만족하는 타입을 정의하는 문법을 유니온(Union) 타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법 - [] 대괄호를 계속 달아준다.
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플
// 길이와 타입이 고정된 배열
// push, pop 등 배열 메서드 사용할 때 각별히 주의해서 사용
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플을 유용하게 사용하는 상황
// 회원 정보를 2차원 배열로 저장하는 상황을 가정
// 순서를 잘 못 배치해 요소를 추가할 경우 문제가 될 수 있다.
// 타입스크립트에서는 튜플을 사용하면 위와 같은 실수를 빨리 바로잡을 수 있다.
const users: [string, number][] = [
    ["이지은", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    //[5, "최아무개"],
];