//이상한 문자 만들기(문제 14)
//공백을 기준으로 나눠서 map돌리고 for문과 조건문을 활용해 결과반환
function solution(s) {
    return s.split(' ').map(w=> {
        let result = '';
        for(let i = 0; i < w.length; i++) {
            if(i%2) {
                result += word[i].toLowerCase();
            } else {
                result += word[i].toUpperCase();
            }
        }
        return result;
    }).join(' ');
}

//map안에서 map을 사용한 다른 사람풀이(idx를 뽑아내어 홀/짝을 구분해서 삼항연산자 적용)
function toWeirdCase(s) {
    return s.split(' ').map((a) => {
      return a.split('').map((b, i) => {
        return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
      }).join('');
    }).join(' ');
  }

//약수의 합(문제 15)
function solution(n) {
    let result=0;
    for(let i =1; i<=n; ++i){
        if(n%i===0){
        result += i;
        }
    }
    return result
}

//전부 계산하지 않고 제곱근만큼만 계산한 다른 사람풀이
function solution(n) {
    var answer = 0;                                // 25
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){           // i는 1부터 6까지 루프
        if (!(n%i)) {                              // 0이면 구문실행
            answer += (i+n/i);                     // 1+25 5+5 
        }
    }
    i--;                                           // i=5
    return (i === n/i) ? answer-i : answer;        // 1+5+25만 남는다
}

//문자열을 정수로 바꾸기(문제16)
//문자열 slice와 parseInt를 조합해서 해결
function solution(s) {
    return s[0]==="-"?0-parseInt(s.slice(1)):parseInt(s)
    }

//수박수.. (문제17)
//홀수면 slice(0,-1)인 삼항연산자를 사용해서 해결
function solution(n) {
    let word = ['수','박'];
    let result =""
    
    for(let i=0;i<n/2;++i)
    {result+=(word[0]+word[1])}

    return n%2==0? result: result.slice(0,-1)     
}

// //소수찾기(문제18)
// function solution(n) {
//     const s = new Array(n).fill(true);                
//     s[0] = false;                                     
//     for (let i = 2; i ** 2 <= n; i++) {
//       if (s[i - 1] === true) {
//         for (let j = i ** 2; j <= n; j += i) {
//           s[j - 1] = false;
//         }
//       }
//     }
//     return s.filter((e) => e).length;
//   }