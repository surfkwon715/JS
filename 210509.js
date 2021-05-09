// 평균구하기(문제 6)
function solution(arr) {
    let result=0;
    for(let i=0;i<arr.length;++i){
        result+=arr[i];
    }
    return result/arr.length;
}

//reduce를 사용한 다른 사람풀이
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
  }

//콜라츠 추측(문제 7)
function solution(num) {
    let count =0;
    while(num!==1){
       if(count>=500){
           return -1
       }else{
           num = num%2===0? num/2: num*3+1;
       }
        count+=1; 
    }
    return count
}

//조건문을 합치고 삼항연산자로 코드를 줄였다(코테에서는 비효율적)
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

//최대공약수와 최소공배수(문제 8)
//재귀함수와 삼항연산자 조합해서 해결
//2와 5가 들어갔다면 (2,5)-(5,2)-(2,1) 최대공약수 1
function solution(n, m) { 
    let answer = [];
    answer.push(gcd(n,m)) 
    answer.push(lcm(n,m)) 
    return answer; } 

function gcd(minNum, maxNum)
{ return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum); } 
function lcm(minNum, maxNum)
{ return minNum * maxNum / gcd(minNum, maxNum);}

//짝수와 홀수(문제 9)
function solution(num) {
    return num%2===0? "Even":"Odd"
   }

//제일 작은 수 제거하기(문제 10)
//splice와 indexOf 조합해서 해결(최솟값 인덱스로부터 1개 제거)
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    if(arr.length<1){return [-1]}
    return arr
}