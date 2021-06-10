def solution(prices):
    answer = []
    #각 자리수 만큼 돌려준다
    for i in range(len(prices)):
        temp = []
        #순서에 맞게 해당하는 만큼 for문을 돌려준다(여기서 낭비되는 부분)
        for j in range(len(prices)-(i+1)):
            #temp에 한동안 안들어오면 낭비된다
            if len(temp)==1:
                break
            if prices[i]>prices[i+1:][j]:
                temp.append(prices[i+1:][j]) 
                
        #끝까지 하나도 안 들어온 경우
        if len(temp)>0:
            answer.append(prices.index(temp[0],i)-i)
        else:
            answer.append(len(prices)-(i+1))
                
    return answer
 

def solution(prices):
    #이렇게 표현하지 않으면 인덱싱에서 문제발생
    answer = [0] * len(prices)

    for i in range(len(prices)-1):
        for j in range(i, len(prices)-1):
            if prices[i] > prices[j]:
                break
            # 자기보다 작은 수가 없으면 하나씩 더해준다
            else:
                answer[i] +=1
    return answer


from collections import deque
def solution(prices):
    answer = []
    prices = deque(prices)
    while prices:
        c = prices.popleft()

#deque로 popleft한 값을 하나씩 빼서 원래의 for문과 비교해준다
        count = 0
        for i in prices:
            if c > i:
                count += 1
                break
            count += 1

        answer.append(count)

    return answer

#시간나면 다시 해볼 것
def solution(p):
    ans = [0] * len(p)
    stack = [0]
    for i in range(1, len(p)):
        if p[i] < p[stack[-1]]:
            for j in stack[::-1]:
                if p[i] < p[j]:
                    ans[j] = i-j
                    stack.remove(j)
                else:
                    break
        stack.append(i)
    for i in range(0, len(stack)-1):
        ans[stack[i]] = len(p) - stack[i] - 1
    return ans