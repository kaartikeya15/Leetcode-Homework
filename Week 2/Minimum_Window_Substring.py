class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "" or len(s) < len(t): return ""

        t_map, window_map = {}, {}
        for c in t:
            t_map[c] = t_map.get(c, 0) + 1
            window_map[c] = 0

        need, have = len(t_map), 0
        l = 0
        res, resLen = "", float("infinity")
        for r in range(len(s)):
            if s[r] in t_map:
                window_map[s[r]] += 1
                if window_map[s[r]] == t_map[s[r]]:
                    have += 1
            while (have == need):
                if resLen > r - l + 1:
                    resLen = r - l + 1
                    res = s[l:r + 1]
                if s[l] in window_map:
                    window_map[s[l]] -= 1
                    if t_map[s[l]] > window_map[s[l]]:
                        have -= 1
                l += 1
        return res