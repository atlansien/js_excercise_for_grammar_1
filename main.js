// 名前
const lastName = "山田";
const firstName = "太郎";
const fullName = lastName + " " + firstName;

// 日数
const myAge = 24;
const friendAge = 87;
const totalAge = myAge + friendAge;
const numberOfDays = totalAge * 365;

// ケーキの個数
const numberOfChildren = 3;
const numberOfCakes = 10;
// 1人あたりのケーキの個数
const numberOfCakesByChild = numberOfCakes / numberOfChildren;
// 余るケーキの個数
const numberOfRestOfCakes = numberOfCakes % numberOfChildren;

// ここから出力させる
// 名前
console.log(lastName);
console.log(firstName);
console.log(fullName);
//年齢・日数
console.log(myAge);
console.log(friendAge);
console.log(totalAge);
console.log(numberOfDays);
// 子供の数・ケーキの個数
console.log(numberOfChildren);
console.log(numberOfCakes);
console.log(numberOfCakesByChild);
console.log(numberOfRestOfCakes);