---

layout: post
title: "How to collect data via forms like a boss"
date: 2022-02-10 10:00:00 +0530
categories: webdev
excerpt: Forms are everywhere but do you really know what goes on behind them and how you can collect data with forms too?

---

![banner](https://cdn.useflipp.com/502dd24d-1ead-43df-9939-c37690ee544e.png)

Forms are an integral part of our life
They are literally everywhere, be it when you're signing up for a new social media app or you're applying for anything. But do you know what actually goes on behind forms?

## The ancient way 🤦‍♂️

Now, earlier forms were used to collect data on an HTML file and save it to a MySQL Database. For this method, you need to have a basic understanding of PHP too. 

But as you know, we ain't taking the hard way

![gif1](https://media.giphy.com/media/JQLxQZw8z90GWPSlAp/giphy.gif)

## A short disclaimer

I know, you might just use Google Forms or Typeform or any other no-code tool for that matter. But this tutorial is for people who'd like to have control over how their form functions and also large scale purposes to be implemented inside your code.

## What we're gonna be using ✨

So what we're gonna learn today is how you can collect data easily by just adding an endpoint to your HTML code and getting the data served to you beautifully.

The app we're gonna be using today is Formbold

(not sponsored)

![ss1](https://i.imgur.com/qHE0ZIW.png)

## Now let's get started

### Step 1️⃣

Make a form. Lol

No, seriously. We need to make a form to collect data

Here's a form I made with Tailwind, we'll be using this to collect our data.

```html

<!-- Tailwind Form -->
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    <!-- text - end -->

    <!-- form - start -->
    <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
      <div>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">First name*</label>
        <input name="first-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Last name*</label>
        <input name="last-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company</label>
        <input name="company" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
        <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Subject*</label>
        <input name="subject" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
        <textarea name="message" class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
      </div>

      <div class="sm:col-span-2 flex justify-between items-center">
        <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>

      <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
    </form>
    <!-- form - end -->
  </div>
</div>
```

You can check out how the form looks [here](https://resilient-sturdy-account.glitch.me/tails-1644507720.html)

### Step 2️⃣

Now let's add the endpoint.

After you've signed up for Formbold, you need to make a new form.

![ss2](https://i.imgur.com/LoYxqF8.png)

Now, you need to name your form and choose an email address to receive notifications for every submission. By default, you can only receive notifications on the registered email but you can also add new addresses on the linked emails tab.

After making a new form, go to its integration tab and you have the endpoint.

![ss3](https://i.imgur.com/wXVYr8c.png)

Now, you need to add two attributes to your form tag in HTML. The two attributes are action and method. Your form tag should now look like this

```html
<form action="endpoint url" method= "POST" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
```

### Step 3️⃣

Our work is mostly done now! Let us test the form.

![ss4](https://i.imgur.com/Xb0Kclm.png)

After you've submitted, the response gets recorded and will not show up on the submissions tab of the form on Formbold

![ss5](https://i.imgur.com/PVJOB3M.png)

And voila!

Now you know how to collect form data in three super-easy steps.

![gif2](https://media.giphy.com/media/cub3pntkz8muQ/giphy.gif)

## Thank you for reading

If you liked this post, subscribe to my [newsletter](https://abhirajbhowmick.substack.com)
to never miss out on my blogs, product launches, and tech news, and follow me on [Twitter](https://twitter.com/rainboestrykr) for daily threads on web dev resources. 
