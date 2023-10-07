class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        max_list = []

        for i in range(len(nums)-k+1):
            nlist = []
            for j in range(i,i+k):
                nlist.append(nums[j])
            maxx = max(nlist)
            max_list.append(maxx)
        return max_list