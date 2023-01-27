## is JSX mandatory for React?
No, it is not mandatory but it makes writing code more convenient and readable

## is ES6 mandatory ?
it is not mandatory but better to use it, as it is widely used in the industry. Also have new features added.

## parameters vs arguments
parameters are added while defining the function
arguments are the parameters while calling the function

## calling a component in JSX
component can be called in 3 ways in React
<component />
{component}
<component></component>

## how to write comments in JSX
same as JS
using //
for multi-line comments /* */

## React.Fragment
It is an empty tag  as jsx. Requires on one parent tag, so to avoid any extra div, Fragment is used to wrap all the children tags. It can also be used as <> </>.

## What is virtual DOM?
it is programming concept in which virtual representation of DOM is kept in the memory and synced with the real DOM using library called ReactDOM. This process is called reconciliation.
Because of this react does not have to rebuild everytime whenever there are any changes.
React elements are Js objects representing the UI

## Reconciliation
The process of reconciliation uses diffing algorithm to make the updates in an react app really fast.
The algorithm compares the two dom trees and identify the difference

## React Fiber
It is the reimplementation of the core algorithm of React.Its highlighting feature is incremental rendering; ability to split rendering work into smaller chunks, and spread it over multiple frames.

## WHy do we need keys in React? When we should definitely use them?
