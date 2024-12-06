import heapq


class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
        self.ratio = value / weight


# Node class for Branch and Bound
class Node:
    def __init__(self, level, value, weight, bound):
        self.level = level
        self.value = value
        self.weight = weight
        self.bound = bound

    def __lt__(self, other):
        return self.bound > other.bound  # Max-Heap (priority based on bound)


# Calculate the upper bound for a node
def calculate_bound(node, capacity, items):
    if node.weight >= capacity:
        return 0  # Not feasible
    bound = node.value
    total_weight = node.weight
    for i in range(node.level + 1, len(items)):
        if total_weight + items[i].weight <= capacity:
            total_weight += items[i].weight
            bound += items[i].value
        else:
            # Take a fraction of the next item's value
            bound += (capacity - total_weight) * items[i].ratio
            break
    return bound


# Branch and Bound for Knapsack
def knapsack_branch_and_bound(values, weights, capacity):
    # Prepare items sorted by value/weight ratio
    items = sorted([Item(v, w) for v, w in zip(values, weights)], key=lambda x: -x.ratio)

    # Priority queue for nodes
    pq = []
    root = Node(-1, 0, 0, 0)  # Root node
    root.bound = calculate_bound(root, capacity, items)
    heapq.heappush(pq, root)

    max_value = 0

    while pq:
        node = heapq.heappop(pq)  # Get the node with the highest bound
        if node.bound <= max_value:
            continue  # Skip unpromising nodes

        # Check the left child (include the next item)
        if node.level + 1 < len(items):
            left = Node(node.level + 1,
                        node.value + items[node.level + 1].value,
                        node.weight + items[node.level + 1].weight,
                        0)
            if left.weight <= capacity:
                max_value = max(max_value, left.value)
                left.bound = calculate_bound(left, capacity, items)
                if left.bound > max_value:
                    heapq.heappush(pq, left)

        # Check the right child (exclude the next item)
        right = Node(node.level + 1, node.value, node.weight, 0)
        right.bound = calculate_bound(right, capacity, items)
        if right.bound > max_value:
            heapq.heappush(pq, right)

    return max_value


# Example Usage
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50

optimal_value = knapsack_branch_and_bound(values, weights, capacity)
print(f"Maximum value in Knapsack: {optimal_value}")
