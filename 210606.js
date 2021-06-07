
function solution(n, lost, reserve) {
    
    let realLost = lost.filter(a => !reserve.includes(a));
    let realReserve = reserve.filter(a => !lost.includes(a));
    
    return n - realLost.filter(a => {
        let b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
}