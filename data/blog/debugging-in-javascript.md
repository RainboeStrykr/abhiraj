---

layout: post
title: "Debugging in Javascript"
date: 2022-05-29 10:00:00 +0530
categories: javascript
excerpt: Since Javascript is interpreted at run time and executed inside the browser, debugging is performed with tools built into the browser.

---

![banner](https://blog.abhiraj.co/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1653837312764%2FzYN5umjWR.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

Programmers spend a lot of time diagnosing and remedying errors and omissions in their code. Debugging slows down the Javascript execution and shows how data is modified line by line. Since Javascript is interpreted at run time and executed inside the browser, debugging is performed with tools built into the browser.

## Errors in Javascript

### 1️⃣ SyntaxError
An error in the way the code is written causes a syntax error. This error occurs while the Javascript engine is interpreting the code at run time.

### 2️⃣ TypeError
This error occurs when the wrong data type is used. For example, applying the string.substring method to a variable that is a number.

### 3️⃣ RangeError 
When the code attempts to use a number that is outside the range of possible values, Javascript detects a RangeError

### 4️⃣ URIError
 Some alphanumeric characters are not allowed to be used in a URL. A URlError is thrown when there is a problem encoding or decoding a URI because of the use of a reserved character.

### 5️⃣ ReferenceError
This error occurs when the code refers to a variable that either does not exist or is not in scope for the executing code.

### 6️⃣ EvalError
This error occurs when there is a problem with the eval() function. Newer versions of Javascript do not throw this error.

## Developer Tools

All modern browsers contain a set of developer tools to help programmers work with HTML, CSS, and Javascript. The developer tools contain functionality to debug Javascript and view the state of HTML elements in the browser. To open the developer tools for the Google Chrome browser, press Command+Option+I (Mac) & Control+Shift+I (Windows, Linux).

### The Console
Web Developers can output messages to the console log to make sure their code is executing as expected. The "Console" tab contains two areas:

1️⃣ Console Output log: Displays system and user messages from the Javascript execution.

2️⃣ Console Command Line Interface: Accepts any Javascript instructions and executes them immediately.

### Javascript debugger

The Javascript debugger can be found under the Sources tab. The debugger makes it possible to step through the code line by line to see what is happening to the variables as the code executes. On the left is a list of all the source files used by the HTML document. Select the file to debug from this list.

### Scope

In the "Sources" tab, the window on the right contains the scope. The local and global sections under this show the variables that are defined in the current scope. The scope pane is only populated with variables when the script is being debugged.

### Breakpoints

The Javascript engine pauses the execution of code when it hits a breakpoint. This allows programmers to examine it. The execution can proceed in the sine of the following ways.

1️⃣ Resume Script Execution: Resumes execution until the program hits another breakpoint or the program ends.

2️⃣ Step-Over: Executes the next line of code in a single step and then pauses on the following line. It steps over a function without debugging the individual steps of the function.

3️⃣ Step into: Executes the next line of code and then pauses on the following line. It will step into a function line by line.

4️⃣ Step out: Executes the remaining code in the current function, and pauses when the runtime returns to the line of code after the function was called.

## Error Handling

In Javascript the try...catch statement allows programmers to handle errors in the code. Normally program execution stops when an error is thrown by the Javascript engine. However,  if the code is wrapped in a try block, the execution will jump to the catch block if an exception is thrown and the program will continue as normal. It is also possible to manually raise an error of using the "throw" statement.

**Try...Catch Statement**

```js
try{
     noSuchCommand(); // This function does not exist
}
catch (err) {  // The code jumps to the catch block instead of stopping the program execution
           console.error(err.message)
}
console.log("Script continues to run after the exception"); // The error message displayed in the console
```

**Throw statement**
```js
throw("Oops there was an error"); // The throw operator generates an error
```

### Thank you for reading

If you liked this post, subscribe to my [newsletter](https://abhirajbhowmick.substack.com)
to never miss out on my blogs, product launches, and tech news, and follow me on [Twitter](https://twitter.com/rainboestrykr) for daily threads on web dev resources.
