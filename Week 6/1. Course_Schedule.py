class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        g = [[] for _ in range(numCourses)]

        for x, y in prerequisites:
            g[y].append(x)

        vis = set()

        @lru_cache(maxsize=None)
        def find(u):
            vis.add(u)
            pos = all(v not in vis and find(v) for v in g[u])

            vis.remove(u)
            return pos

        return all(find(i) for i in range(numCourses))