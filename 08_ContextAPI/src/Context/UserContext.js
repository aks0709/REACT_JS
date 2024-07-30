import React from "react";
//create context is  used to create the context
const userContext=React.createContext();
//this is global user context,
//it is like a global variable
export default userContext;


//we need wrapper  that wraps with user context

//when we wrap this then it becomes context provider and everything under this wrapper get access to our global user context
