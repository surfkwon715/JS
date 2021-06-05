
//slice와 sort함수 사용 + 반복문내에서 변수 선언 후에 push
function solution(array, commands) {
    const answer = [];
    
    if(array.length===1){
        answer.push(array);
        return;
    }
    
    for(let i=0; i<commands.length; i++){
     const result = array
        .slice(commands[i][0]-1,commands[i][1])
        .sort(function(a,b){return a-b})
    answer.push(result[commands[i][2]-1]);
   }
    return answer;
}