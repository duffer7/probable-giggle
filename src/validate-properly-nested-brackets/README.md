# Bracket Sequence Validator

A lightweight, efficient TypeScript utility to check whether all brackets (`()`, `{}`, `[]`) in a given string or code snippet are properly matched and nested.

## 📊 Complexity Summary

| Metric               | Complexity | Description                                                                |
| :------------------- | :--------- | :------------------------------------------------------------------------- |
| **Time Complexity**  | **$O(N)$** | Single-pass string sanitization and stack iteration ($N$ is string length) |
| **Space Complexity** | **$O(N)$** | Used for storing filtered brackets and stack elements                      |

---

## 📌 Problem Statement

Given a string containing brackets along with arbitrary characters, determine if the brackets are correctly paired and nested according to standard syntax rules.

### Rules for Valid Brackets:

1. Every open bracket must be closed by the same type of bracket.
2. Open brackets must be closed in the correct order (_LIFO - Last In, First Out_).
3. Any non-bracket characters are ignored during validation.
