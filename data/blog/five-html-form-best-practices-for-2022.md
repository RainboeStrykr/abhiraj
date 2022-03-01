---

layout: post
title: "5 best practices for better HTML forms"
date: 2022-02-28 12:00:00 +0530
categories: html
excerpt: Forms are an essential part of any UI. These pointers will make form development and design easier for you as a developer or designer, as well as for your users.

---

![banner](https://cdn.devdojo.com/posts/images/March2022/5-best-practices-for-better-html-forms.jpg?auto=format&q=70&w=1280)

Forms are an essential part of any UI

It can be intimidating to work with HTML forms. They don't only use a few specialised HTML elements; they also blur the barrier between static material and user involvement. Forms can be complex and even irritating for users; they frequently interrupt a user's main focus and direction on a page: they want to buy that gift or try out your new web app, not give you their mailing address or create yet another password. These pointers will make form development and design easier for you as a developer or designer, as well as for your users.

## 1️⃣ Label fieldset With Legends 

It's hard to justify using a fieldset without giving it a name. We may improve the code above by titling our fieldset with the legend element. The legend will arrange itself over the border of the fieldset element, which has a border by default.

```html
<fieldset>
    <legend>Billing Address</legend>
    <span>Address</span><input type="text" />
    <span>City</span><input type="text" />
    <span>Province</span><input type="text" />
    <span>Postal Code</span><input type="text" />
</fieldset>
```


## 2️⃣ Use the label Element

While there's nothing wrong with using a span to mark the inputs, the label tag is a natural fit for them.

```html
<fieldset>
    <legend>Billing Affress</legend>
    <label>Address</label><input type="text" name="billAddress" />
    <label>City</label><input type="text" name="billCity" />
    <label>Province</label><input type="text" name="billProvince" />
    <label>Postal Code</label><input type="text" name="billPC" />
</fieldset>
```


## 3️⃣ Name Your Inputs

Each input element must have a name if you wish to transfer form data to a script; if you're using PHP, these names will become the keys of a superglobal array, commonly $_POST or $_GET.

```html
<fieldset>
    <span>Billing Address</span><input type="text" name="billAddress" />
    <span>City</span><input type="text" name="billCity" />
    <span>Province</span><input type="text" name="billProvince" />
    <span>Postal Code</span><input type="text" name="billPC" />
</fieldset>
```


## 4️⃣ Give Labels the for Attribute

The for attribute allows you to associate a label with an input. The id of the input you wish to tie it to should be the same as the value of for.

```html
<fieldset>
    <legend>Billing Affress</legend>
    <label for="billAddress">Address</label><input type="text" id="billAddress" name="billAddress" />
    <label for="billCity">City</label><input type="text" id="billCity" name="billCity" />
    <label for="billProvince">Province</label><input type="text" id="billProvince" name="billProvince" />
    <label for="billPC" >Postal Code</label><input type="text" id="billPC" name="billPC" />
</fieldset>
```



## 5️⃣ Use optgroup to Categorize Options

The optgroup is a little-known element that will indent and title choices. It is important to note that the label attribute is essential.

```html
<select>
<optgroup label="USA">
    <option>Alabama</option>
    <option>Alaska</option>
    <option>Arizona</option>
</optgroup>
<optgroup label="Canada">
    <option>Alberta</option>
    <option>British Columbia</option>
    <option>Manitoba</option>
</optgroup>
</select>
```

Now that you know how to level up your forms, you might want a place to collect & store the data. Fret not, for I have the perfect tutorial to help you get started. Click [here](https://abhiraj.co/blog/collect-data-with-forms-like-a-boss) to read about how you can collect form data like a boss.

### Thank you for reading

If you liked this post, subscribe to my [newsletter](https://abhirajbhowmick.substack.com) to never miss out on my blogs, product launches, and tech news, and follow me on [Twitter](https://twitter.com/rainboestrykr) for daily threads on web dev resources.
