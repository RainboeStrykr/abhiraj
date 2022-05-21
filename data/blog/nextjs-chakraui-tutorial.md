---

layout: post
title: "How to use ChakraUI with NextJS?"
date: 2022-05-20 10:00:00 +0530
categories: javascript
excerpt: It's never easy to design a user interface, but Chakra UI is a wonderful UI package for getting your Next.js application up and running quickly while yet retaining aesthetics. You'll learn how to set up a small Next.js app with Chakra UI in this tutorial.

---

![banner](https://cdn.useflipp.com/5a5e27d8-2b95-4360-8f9e-d23ff12b038b.png)


Hello, my fellow readers! It's been a long time, am I right? Well, I apologise for not being able to create content for you, mainly due to my board examinations. 
It's never easy to design a user interface, but Chakra UI is a beautiful UI package for getting your Next.js application up and running quickly while yet retaining aesthetics. You'll learn how to set up a small Next.js app with Chakra UI in this tutorial.

Each component of the Chakra is designed to be accessible and the Chakra maintainers have gone to great lengths to ensure that the components adhere to the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) rules. It also comes with a simple API that allows developers to get started quickly. It enables individuals and teams to create inclusive apps without having to worry about assembling a variety of components.

Chakra leverages [Emotion](https://emotion.sh) to allow developers to style their components from inside of their JavaScript. It comes with a preset theme, but custom options allow you to alter it quickly.

## Let’s get started

So first, we are going to be setting up Chakra UI and NextJS.

1️⃣ **Create a NextJS Project**

You can create a blank Next.js project by running the following commands on your terminal of choice.


    npx create-next-app chakra-project


![Imgur](https://i.imgur.com/dWsSFmI.png)


2️⃣ **Adding Chakra UI to your Next.js Application**

To get started using Chakra UI, install the core Chakra UI package by running:
```
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

3️⃣ **Adding in Chakra Providers**

Chakra makes use of the ChakraProvider component, which surrounds your website in a context that includes attributes like the Chakra theme, colour mode functionality, CSS reset, global styles, and more.

So, you need to add the following code in `./pages/_app.js`:

```js
import { ChakraProvider } from '@chakra-ui/react';
    
    const MyApp = ({ Component, pageProps }) => {
      return (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      );
    }
    
    export default MyApp;
```

If you are using Typescript, use the `ChakraProvider` component in `./pages/_app.tsx` and replace by the following code:

```js
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
    
    const MyApp = ({ Component, pageProps }: AppProps) => {
      return (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      );
    }
    
    export default MyApp;
```
4️⃣ **Complete the project setup and test it**

In your `./pages/index.jsx` or `./pages/index.tsx`, add the following code:

```js
import { Heading } from '@chakra-ui/react';
    
    const Home = () => {
      return (
        <Heading>Welcome to Chakra + Next.js</Heading>
      ); 
    }
    
    export default Home;
```

Now use the `npm run dev' command to start the dev server

If everything was imported correctly, you should see this when the component reloads.


![Imgur](https://i.imgur.com/jGKafDJ.png)



## Creating a hero component

Now that your project is working perfectly, we will be making a hero component to learn how Chakra works

First, create a `./components/Hero.js` file. And inside try out the following example code:

```js
import { Container, Stack, Flex, Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
    import Blob from './Blob';
    const Hero = () => {
      return (
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={ { base: 8, md: 10 } }
            py={ { base: 20, md: 28 } }
            direction={ { base: 'column', md: 'row' } }>
            <Stack flex={1} spacing={ { base: 5, md: 10 } }>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={ { base: '3xl', sm: '4xl', lg: '6xl' } }>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={ {
                    content: "''",
                    width: 'full',
                    height: '20%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'green.400',
                    zIndex: -1,
                  } }>
                  NextJS + ChakraUI
                </Text>
                <br />
                <Text as={'span'} color={'red.400'}>
                  Tutorial by Abhiraj Bhowmick
                </Text>
              </Heading>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('cyan.50', 'cyan.400')}
              />
              <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    'https://og-image.vercel.app/**Next.js%20Chakra**%20Starter.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fchakra-ui%2Fchakra-ui%2Fbf775929a6d73a3aa69e44d5d38542449871475c%2Flogo%2Flogomark-colored.svg' // We use a simple image here, you can change as per your wish.
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      );
    }
    export default Hero;
```
You may be wondering when the heck did we make a blob? Well, we're going to do it right now! 

Create a `./components/Blob.jsx` file with the following code:

```js
import { Icon, IconProps } from "@chakra-ui/react";
    
    const Blob = (props: IconProps) => {
      return (
        <Icon
          width={'100%'}
          viewBox="0 0 578 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
            fill="currentColor"
          />
        </Icon>
      );
    };
    
    export default Blob;
    For TypeScript version, create a ./components/Blob.tsx file:
    import { Icon } from "@chakra-ui/react";
    
    const Blob = (props) => {
      return (
        <Icon
          width={'100%'}
          viewBox="0 0 578 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
            fill="currentColor"
          />
        </Icon>
      );
    };
    
    export default Blob;
```
Once you've created your hero and blob component, import `Hero.jsx` into your `./pages/index.js` file like so:

```js
    import Hero from '../components/Hero';
    
    const Home = () => {
      return (
        <Hero />
      );
    }
    
    export default Home;
```
After you’ve done all these steps, your project should look like this in the dev server:


![Imgur](https://i.imgur.com/sgJT6cf.png)


Congratulations! 🎉 Now that you've learned how to make excellent user interfaces, it's time to get your Chakra on! 🕉️


## Conclusion

Next.js loads only the Javascript and CSS that are needed for any given page. This makes for much faster page loading times. ChakraUI is made up of basic building blocks that can help you build the front-end of your web app and it is customizable and reusable.

Using both these technologies together efficiently will make your work much easier.

In this article, we have covered using ChakraUI with NextJS. I hope you've learned something valuable from this article.

We learned how to :

1. How to setup Chakra UI with NextJS 
2. How to create a hero component with ChakraUI

### Thank you for reading

If you liked this post, subscribe to my [newsletter](https://abhirajbhowmick.substack.com)
to never miss out on my blogs, product launches, and tech news, and follow me on [Twitter](https://twitter.com/rainboestrykr) for daily threads on web dev resources.



