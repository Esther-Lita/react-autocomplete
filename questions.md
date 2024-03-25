## 1. What is the difference between Component and PureComponent?

A Component will re-render whenever a state or props change, while the PureComponent compares if the actual value has really change to avoid unnecessary updates.

## Give an example where it might break my app.

When a single state change can trigger a cascade of re-renders across many components that share some state or context causing an infinite loop of rendering.

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

This one I don't quite can completely explain but in my head I understand that the Context is used to pass data without the need to use props, and maybe if ShouldComponentUpdate has not been configured properly, the natural behaviour can block the update of data that is supposed to be passed via Context.

## 3. Describe 3 ways to pass information from a component to its PARENT.

The common ways to pass data from a child to a parent component is to define a callback function or a handler function in the parent component and pass it down to the child component as a prop. The child component can then call this function with the data it wants to pass up to the parent in the case of the callback function, in the second case the handler function will accept an argument wich is the data from the children component.

## 4. Give 2 ways to prevent components from re-rendering.

Avoid passing unnecessary props and ensuring that the component states are managed efficiently.

Using hooks like useCallback or useMemo. In useMemo for example we can decide what parameters will make the code re-update when they change.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

## 6. Give 3 examples of the HOC pattern.

## 7. What's the difference in handling exceptions in promises, callbacks and async...await?

A callback is a function that is passed as an argument to another function and is executed after the first function completes its operation.

A promise is an object that represents the eventual result of an asynchronous operation. Promises provide a simpler way to handle asynchronous operations compared to callbacks by allowing you to chain multiple operations together and handle errors in a more elegant way.

Async/await simplifies asynchronous code by allowing the use of the await keyword to pause the execution until the Promise is resolved.

## 8. How many arguments does setState take and why is it async.

setState take an object or a function and a callback function as an optional second argument.

setState being async ensures that if both Parent and Child call setState during a click event, Child isn’t re-rendered twice. It's design to batch the updates and re-render them together.

## 9. List the steps needed to migrate a Class to Function Component.

I haven't worked with a Class Component yet.
I will make sure I am more prepared next time I come across this question.

## 10.List a few ways styles can be used with components.

Inline styles.
CSS Classes.
CSS Modules.
A framework that allows you to inject preconfigured CSS classes into the JSX, like TailwindCSS

## 11. How to render an HTML string coming from the server.
