# euler-problems
Personal solutions to ProjectEuler problems

## 01: Multiples of 3 and 5
**Problem Statement**: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
**Solutions**
1. Brute force: Loop all numbers and determine if a multiple of 3 or 5, add to sum.
2. Deliberate: Loop all n multiples and determine if a multiple of 5 was a multiple of 3, only then do not add to sum.
3. Deliberate. Calculate an upper bound, loop all n multiples up to the upper bound.
Go to [problem](./01-Multiples_of_3_and_5/index.html)

## 02: Even Fibonacci Numbers
**Problem Statement**: Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
**Solutions**
1. Brute force: Loop all fibonacci numbers and determine if even, add to sum.
2. Brute force: Store all fibonacci numbers and loop every third, add to sum.
3. Deliberate: Loop every 3rd fibonacci number by calculation, then add to sum.
Go to [problem](./02-Even_Fibonacci_Numbers/index.html)

## 03: Largest Prime Factor
**Problem Statement**: The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
**Solutions**
Go to [problem]