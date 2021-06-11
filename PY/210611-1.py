def solution(n):
    answer = 0
    _len = len(bin(n)[2:])
    cnt1 = bin(n)[2:].count("1")
    
    #64부터 - 128미포함
    for i in range(2**(_len-1),2**(_len+1)):
        if i>n and bin(i)[2:].count("1")==cnt1:
            answer += i
            break
    return answer

#효율성 통과
def solution(n):
    _len = len(bin(n)[2:])
    cnt1 = bin(n)[2:].count("1")
    
    #79부터 - 128미포함
    for i in range(n+1,2**(_len+1)):
        if bin(i)[2:].count("1")==cnt1:
            return i
            break

    
            