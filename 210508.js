// 직사각형 별찍기 
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