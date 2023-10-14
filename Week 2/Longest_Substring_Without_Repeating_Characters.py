class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len, l = 0, 0
        char_map = {}

        for r in range(len(s)):
            if s[r] not in char_map or char_map[s[r]] < l:
                char_map[s[r]] = r
                max_len = max(max_len, r - l + 1)
            else:
                l = char_map[s[r]] + 1
                char_map[s[r]] = r

        return max_len