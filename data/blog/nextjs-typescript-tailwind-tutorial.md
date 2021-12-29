---

layout: post
title: "NextJS, Typescript and Tailwind: A match made in heaven"
date: 2021-12-29 13:00:00 +0530
categories: web development
excerpt: A tutorial on how you can use NextJS, Typescript and Tailwind.

---

![banner](https://abhirajb.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1640764943781%2F-kwWZmr2Y.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

Tailwind CSS is a utility-first CSS framework that is being used to create markup-based designs. Next.js is a React framework with features like hybrid static and server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
When these technologies are combined, they can be quite useful in the development of websites and web apps.

We'll look at some of the advantages of using Tailwind CSS in this article. Then we'll learn how to build up Next.js with TypeScript and TailwindCSS. We'll start using TypeScript and then go on to TailwindCSS. The tutorial's goal is to assist you in setting up a project using these three technologies.

You'll have a working Next.js application using TypeScript and TailwindCSS once you've finished the lesson. You may extend it and turn it into a useful application!

### Advantages of using Tailwind CSS
- Significant Variables - With Tailwind CSS, you just need to apply text-sm,
text-lg or text-xl to your HTML elements. It indicates that you want a small, large, or extra-large font size, respectively. 
- Predefined class - Tailwind has several classes related to margins like m-6 or m-8. But, it doesn't provide m-7. Another thing m-6 is equal to margin: 1.5rem; and m-8 is equal to margin: 2rem;. So you cannot specify a margin equal to 1.75rem by default (you have to make some configuration changes to use a margin equal to 1.75rem). This means that you don't have to move your pixel one by one anymore which can save you a lot of time.
- Out-of-the-box Features - The creation of reusable Tailwind components (without installing React in your project). PurgeCSS is extremely easy to set up. You can therefore remove unused CSS classes and reduce the size of your style file


## Now let’s start the coding!
### Create a new next.js app
Run the following command in your Terminal and follow the wizard. As a result, a new directory containing the app will be created for you.
```
npx create-next-app
```
### Start the app
Run the development server and Open http://localhost:3000 with your browser to see the result.
```
npm run dev
```
### Create src directory and move pages into src
The src directory is very common in many apps and Next.js supports it by default.
```
cd <your-app-directory>
mkdir src
mv pages src
```
### Support TypeScript
Next.js supports TypeScript out of the box.
```
touch tsconfig.json
npm i -D typescript @types/react @types/node
```
Restart development server by running npm run dev, you will see this in the console:
```
We detected TypeScript in your project and created a tsconfig.json file for you. 
```
Test TypeScript support by renaming index.js to index.tsx and restart the development server
```
mv src/pages/index.js src/pages/index.tsx
```

## Integrate TailwindCSS

Install TailwindCSS and PostCSS. More information can be found in the official TailwindCSS documentation. Installation
```
npm i -D tailwindcss postcss-import autoprefixer
``` 

Configure PostCSS
Create postcss.config.js
```
touch postcss.config.js

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ]
}
```
### Add TailwindCSS to your css
Create src/styles/index.css.
```
mkdir src/styles && touch src/styles/index.css

@import 'tailwindcss/base';
@import 'tailwindcss/components';

/* Your own custom component styles */

@import 'tailwindcss/utilities';
```
Create a  src/pages/_app.tsx file Then add styles/index.css to your application by import the CSS file.
```
touch src/pages/_app.tsx

import { AppProps } from 'next/app'
import '../styles/index.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
```
Now that our project is ready, let’s edit the index.tsx file and put some of our own text.
```html
export default function Home() {
return (
   <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
     <main>
       <h1 className="font-mono text-xl code">
         Welcome to <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
       </h1>
     </main>
   </div>
 )
}
```

Then run the developer server at http://localhost:3000 to see our result.

![code](https://i.imgur.com/xso596P.png)

### Thank you for reading

If you liked this post, subscribe to my newsletter to never miss out on my blogs, product launches and tech news.

[Abhiraj's Dev-letter](https://getrevue.co/profile/abhiraj)

---

