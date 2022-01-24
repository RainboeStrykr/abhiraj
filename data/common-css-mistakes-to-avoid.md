---

layout: post
title: "5 common CSS mistakes to avoid"
date: 2022-01-24 06:00:00 +0530
categories: css
excerpt: Even though being simple and uses the modern English language to name most of its properties like font size or color, it's not rare to get caught up in the style classes when you're working on a bigger and high-performance project. Today, let us discuss 5 common CSS mistakes we all make.

---

![banner](https://blog.abhiraj.co/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1642999599617%2FCWbIU3azk.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

Let's be real here.

Is CSS that hard?

Even though being simple and uses the modern English language to name most of its properties like font size or color, it's not rare to get caught up in the style classes when you're working on a bigger and high-performance project.

Today, let us discuss 5 common CSS mistakes we all make.

## 1️⃣ AVOID MAGIC NUMBERS

A magic number is a numerical value that is used simply because it works. Never use numbers simply because they work.

In this case, it's preferable to use *top: 100% *, which roughly translates to 'all the way from the top.'

Don't do this

```css
.dropdown-container
.dropdown-menu {

  margin-top: 47px;
}
```

Do this
```css
.dropdown-container
.dropdown-menu  {

   top: 100%
}
```


## 2️⃣ Avoid mixing container with content styles

On isolated components, don't use location-dependent styles.
A component should have the same appearance no matter where it is placed.
Instead, for specialized use scenarios, use layout wrappers.

Don't do this

```css
.form-input  {
   font-size: 14px;
   padding: 4px  8px;
   /*Content is mixed with container here*/
   margin-top: 20px;
}
```

Do this

```css
.form-input-wrapper  {
   margin-topp: 20px;
}

.form-input  {
   font-size: 14px;
   padding: 4px  8px;
}
```

## 3️⃣ AVOID USING QUALIFIED SELECTORS

These are selections that are appended to an element unnecessarily. This is bad news because it completely prevents reusability on another element while also increasing specificity.

Don't do this

```css
ul.nav  {}
a.button  {}
div.header  {}
```

Do this

```css
.nav {}
.button {}
.header {}
```

## 4️⃣ AVOID USING ABSOLUTE VALUES FOR LINE-HEIGHT

To make lines more flexible, line heights should always be specified relative to one another. You want to know that if you change the font size of a h1, your line-height will keep up.

Don't do this

```css
h1  {
   font-size: 24px;
   line-height: 32px;
}

.site-title  {
   font-size: 36px;
   line-height: 48px;
}
```

Do this

```css
h1 {
   font-size: 24px;
   line-height: 1.333;
}

.site-title  {
    font-size: 36px;
}
```

## 5️⃣ AVOID LOOSE CLASS NAMES

Loose class names are awful because you can't tell what they're for by looking at them, and they're so general that another developer could simply redefine them.

Don't do this

```css
.card {}
.modal {}
.user {}
```

Do this 

```css
.user-post-card {}
.confirmation-modal {}
.user-avatar {}
```

### Thank you for reading

If you liked this post, subscribe to my [newsletter](https://newsletter.abhiraj.co)
to never miss out on my blogs, product launches, and tech news, and follow me on [Twitter](https://twitter.com/rainboestrykr) for daily threads on web dev resources.
