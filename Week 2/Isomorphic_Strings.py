class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        m1 = []
        m2 = []

        for i in s:
            m1.append(s.index(i))
        for i in t:
            m2.append(t.index(i))
        return m1 == m2