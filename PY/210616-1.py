def solution(n):
    answer = [1,1,2]
    
    for i in range(3, n + 1):
        answer.append((answer[-1] + answer[-2]) % 1000000007)

    return answer[n]

def solution(n):
    a, b = 1, 1
    for i in range(1, n):
        a, b = b, (a + b) % 1000000007
    return b

    1 1 