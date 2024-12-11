# Firebase Data Access Error: Handling Nested Data

This repository demonstrates a common error when accessing nested data in Firebase Realtime Database. The issue arises from directly accessing nested properties without checking for their existence, potentially leading to application crashes.

## Problem

The `handleData` function attempts to access a deeply nested property (`data.nested.property`). If either `data.nested` or `data.nested.property` is null or undefined, accessing `data.nested.property` throws an error.

## Solution

The updated `handleData` function includes null checks before accessing the nested property, ensuring that the application gracefully handles missing data.

## How to Reproduce

1. Clone the repository.
2. Run the `bug.js` file. Observe the error.
3. Run `bugSolution.js`. Observe that the error is handled correctly. 