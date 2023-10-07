class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()  # creating empty set to store elements of nums

        for n in nums:

            if n in seen:  # checking if number already exists in nums
                return True
            seen.add(n)  # adding the number to set if it doesn't already exist

        return False