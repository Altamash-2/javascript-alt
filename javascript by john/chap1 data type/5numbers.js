let score = 50;
console.log(score, typeof score);

// mathematical operation * / % ** + -
let result = score / 2; //give quotient
console.log(result);
let ans = score % 3; // give remainder
console.log(ans);

//mathematical expression
let results = score * 2 + 4 * 3 - ((8 / 2) % 4); //100+12-0
//using priority and precedence
//1 ()Brackets
// 2 ** power operator
// 3 * / % (from left to right)
// 4 + - (from left to right)
console.log(results);

// concatenation of numbers
let resultLine = 'My total score is =' + score;
console.log(resultLine);
