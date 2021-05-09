// 직사각형 별찍기(문제 1)
// split() Number For문 repeat을 조합해서 해결
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const row = Number(n[0]) 
    const column = Number(n[1]);
    
    for(let i =0; i<column; ++i){
       console.log("*".repeat(row))
    }
});

// For문 사용하지 않은 다른 사람의 풀이
// 줄바꿈과 백틱과 repeat을 조합해서 해결
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});

// x만큼 간격이 있는 n개의 숫자(문제 2)
// 배열 For문 .push를 조합해서 해결
function solution(x, n) {
    const arr =[];
    for(let i=1;i<n+1;++i){
        arr.push(i*x)
    }
    return arr;
}

// For문 사용하지 않은 다른사람 풀이
// Array(n).fill(x) .map(item,index)을 조합해서 사용
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

//[...Array(n).keys()]의 item을 index로 사용
function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}

//행렬의 덧셈(문제 3)
//이중배열 선언/접근 For문을 조합해서 해결  
function solution(arr1, arr2) {
    let answer = [[]];
    for(let i=0; i<arr1.length; ++i){
        // answer[i]를 반드시 선언해주어야한다
        answer[i]=[];
        for(let j=0; j<arr1[0].length;++j){
        answer[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
 return answer;
}

//map(item,index)를 활용해 이중배열 접근/연산을 한 다른 사람풀이 
//map의 index를 활용해서 해결
function solution(arr1, arr2) {
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

//핸드폰 번호 가리기(문제 4)
//split fill(,0,-4) join 조합해서 해결
function solution(phone_number) {
    return phone_number.split("").fill("*",0,-4).join("")
  }

//repeat과 slice를 조합한 다른사람풀이
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }

//하샤드 수(문제 5)
function solution(x) {
    let result=0;
    let arr = String(x).split("")
      for(let i=0; i<arr.length; i++){
          result += parseInt(arr[i])
      }
    return x%result===0?true:false;
}

//reduce를 사용한 다른사람 풀이
//문자열로 바꾸고 reduce 내에서 다시 숫자로 연산처리 + 0=false 1=true에 !를 사용
function solution(n){
    return !(n%(n+'').split('').
             reduce(function (prev,curr) {return +prev + +curr;}));
  }


