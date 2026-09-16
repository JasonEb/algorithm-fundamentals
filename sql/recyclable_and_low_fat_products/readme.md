# [Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)

```
Table: Products

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id is the primary key for this table.
low_fats is ENUM('Y', 'N') — 'Y' means the product is low fat.
recyclable is ENUM('Y', 'N') — 'Y' means the product is recyclable.

Write a solution to find the ids of products that are both low fat and
recyclable.

Return the result table in any order.
```

**Example**

| product_id | low_fats | recyclable |
|---|---|---|
| 0 | Y | N |
| 1 | Y | Y |
| 2 | N | Y |
| 3 | Y | Y |
| 4 | N | N |

Output: `product_id` 1 and 3.
