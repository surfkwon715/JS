//김서방 (문제19)
//indexOf 사용해서 해결
function solution(seoul) {
    let idx = seoul.indexOf("Kim")
    return `김서방은 ${idx}에 있다`
}

// findIndex는 콜백함수를 뒤에 집어넣어 사용할 수 있다
// 소수에서 findIndex를 사용해서 소수인 인덱스 찾기(MDN)
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
  console.log([4, 6, 7, 11].findIndex(isPrime)); // 2, 첫번째 요소만 반환

  