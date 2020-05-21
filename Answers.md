1. What problem does the context API help solve?
    Answer: It provides a way to share values (data) between components without having to pass the data via props through every level of a tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    
    Actions: They are javascript objects that have a type attribute to indicate the type of action performed (what happened). It carries a "payload" of information to the store. Example: { type: GET_ORDER_STATUS , payload: {orderId,userId } }

    Reducers:  These are functions (or pure functions) that determine changes in the state of our application. The reducer uses the action it receives to determine what will change in the state. Simply put: it is a function that return the next state of our app.

    Store: Everything that changes in our application is represented by a single javascript object in the store. The store contains the state for the application.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Application state is Global and the component state is local. 
    It is best to use application state when the number of components is large. This way the passing of data will be easier to manage and not as cumbersome as passing down props to sub components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a Middleware that lets our action creators return a function called a thunk, instead of an action. This thunk can return an action when invoked but it also has access to the Redux store's dispatch function, meaning it can also dispatch other actions. Normally, API calls are invoked inside these thunks and different actions are dispatched depending on these API responses.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I personally like React Context to manage state. The idea of how simple it is to pass down data via context instead of using props is great. It's impressive how just 3 lines of code can create a context and connect the dots between my components so they can share data (instead of using props). 
