class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        stack = []
        cnt = 0
        for i in s:
            if i == '(':
                stack.append(i)
                continue
            if i==')':
                if not stack:
                    cnt+=1
                else:
                    if stack[-1]=='(':
                        stack.pop()
                continue
            cnt+=1
        return cnt+len(stack)
            