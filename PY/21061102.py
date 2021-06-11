def solution(clothes):

    hash={}
    
    for i in range(len(clothes)):
        if clothes[i][1] not in hash.keys():
            hash[clothes[i][1]]=1
        else:
            hash[clothes[i][1]]+=1
    #참고) values를 리스트로 만드는 => list(hash.values())
    
    answer=1
    for i in hash:
        answer *= (hash[i]+1)
    return answer-1
        