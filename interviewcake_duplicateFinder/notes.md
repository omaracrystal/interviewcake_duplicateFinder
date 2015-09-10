## brute force
A brute force algorithm simply enumerates all possible answers to the question and checks them for correctness.

It's seldom the most efficient approach, but it can be helpful to consider the time cost of the brute force approach when building an optimized solution. If your solution isn't faster than the brute force approach, it may not be optimal.

## hash table
A **hash table** (also called a **hash, hash map or dictionary**) is a data structure that pairs keys to values.
```
  lightbulb_to_hours_of_light = {
    'incandescent': 1200,
    'compact fluorescent': 10000,
    'LED': 50000
}
```
**Hash maps:**
- take on average O(1)O(1) time for insertions and lookups
- are unordered (the keys are not guaranteed to stay in the same order)
- can use many types of objects as keys (commonly strings)

Hash maps can be thought of as arrays, if you think of array indices as keys!

In fact, hash maps are built on arrays. So if you ever want to use a hash map but know your keys will be sequential integers (like 1..1001..100), you can probably save time and space by just using an array instead.

**Note**: hash maps have an average case insertion and lookup cost of O(1)O(1). In industry, we often confuse the average-case cost with worst case cost, but they're not really the same. Because of hash collisions and rebalancing, a hash map insertion or lookup can cost as much as O(n)O(n) time in the worst case. But usually in industry we assume hashing and resizing algorithms are clever enough that collisions are rare and cheap.
