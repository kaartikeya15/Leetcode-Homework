class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        def solve(node, cnt, ans, k):
            if not node:
                return
            # left, root, right
            solve(node.left, cnt, ans, k)
            cnt[0] += 1
            if cnt[0] == k:
                ans[0] = node.val
                return
            solve(node.right, cnt, ans, k)

        cnt = [0]
        ans = [0]
        solve(root, cnt, ans, k)
        return ans[0]