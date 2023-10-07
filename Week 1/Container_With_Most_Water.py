class Solution:
    def maxArea(self, height: List[int]) -> int:
        l,r = 0,len(height)-1
        max_area = 0

        for i in range(len(height)-1):
            area = ((r-l)*min(height[l],height[r]))
            if area>max_area:
                max_area = area
            if height[l]>height[r]:
                r-=1
            else:
                l+=1
        return max_area