
function solution(n, lost, reserve) {
    
    //도난당함 + 여벌옷 있는 사람이 같은 경우 그냥 지워준다
    let realLost = lost.filter(a => !reserve.includes(a));
    let realReserve = reserve.filter(a => !lost.includes(a));
    
    //-1 +1되는 값을 찾고 b에 해당하지 않는 것들만 남긴다
    //realReserve에서는 남은 값과 b와 같지 않을 때만 남긴다
    //filter함수는 콜백함수가 true인 것만 남긴다
    return n - realLost.filter(a => {
        let b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
}

function solution(n, lost, reserve) {

    //도난당함 + 여벌옷 있는 사람이 같은 경우 그냥 지워준다
    let tmp = reserve.slice()
    for (let i in tmp) {
      let key = lost.indexOf(tmp[i])

      if (key != -1) {
        lost.splice(key, 1);
        reserve.splice(reserve.indexOf(tmp[i]), 1);
      }
    }

    //i-1이 있으면 i-1로 찾고 + 없으면 i+1로 찾는다
    for (let i of reserve) {
      let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1)

      if (key != -1) {
        lost.splice(key, 1)
      }
    }

    return n - lost.length
  }
