import math
from collections import deque

def solution(progresses, speeds):
    answer = []
    temp = []
    
    temp =deque(temp)
    #[5,10,1,1,20,1]
    for i in range(len(progresses)):
        temp.append(math.ceil((100-progresses[i])/speeds[i]))

    cnt = 1
    p = temp.popleft()     
                  
    for i in range(len(temp)):      
        if p < temp[i]:              
            answer.append(cnt)
            p = temp[i]   
            cnt = 0 
        cnt += 1                          
    answer.append(cnt)                


    return answer

#다시 해보기
def solution(progresses, speeds):

    answer = []
    time = 0
    count = 0
    while len(progresses)> 0:
        if (progresses[0] + time*speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)
    return answer

