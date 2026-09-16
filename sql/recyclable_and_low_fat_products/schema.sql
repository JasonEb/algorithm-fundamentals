-- Recyclable and Low Fat Products — https://leetcode.com/problems/recyclable-and-low-fat-products/
--
-- LeetCode's actual submission environment is MySQL, where low_fats and
-- recyclable are ENUM('Y', 'N'). SQLite has no ENUM type, so this uses TEXT
-- with a CHECK constraint instead — same data, same query logic, just
-- runnable locally with the sqlite3 CLI already on this machine.

DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
    product_id INTEGER PRIMARY KEY,
    low_fats   TEXT CHECK (low_fats IN ('Y', 'N')),
    recyclable TEXT CHECK (recyclable IN ('Y', 'N'))
);

INSERT INTO Products (product_id, low_fats, recyclable) VALUES
    (0, 'Y', 'N'),
    (1, 'Y', 'Y'),
    (2, 'N', 'Y'),
    (3, 'Y', 'Y'),
    (4, 'N', 'N');
