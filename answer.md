1. What do you know about Vue ?
Vue.js merupakan sebuah librari javascript membangun sebuah interface website interaktif.

2. How to define data in Vue
a component’s data option must be a function
data: {
  count: 0
}

3. In Vue What lifecycle you can run after instance created ?
the created hook can be used to run code after an instance is created
created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }

4. How to bind vue property to page ?
using v-bind, dynamically assign the value of a variable :
<blog-post v-bind:title="post.title"></blog-post>

5. How to trigger an event and handling it in Vue ?
using v-on :
<button v-on:click="counter += 1">Add 1</button>

6. What usage of Computed Properties ?
Putting too much logic in your templates can make them bloated and hard to maintain. Instead, use computed property for any complex logic

7. What usage of Watch Properties ?
Generic way to react to data changes. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

8. How to handling input in Vue ?
You can use the v-model directive to create two-way data bindings on form input elements. It automatically picks the correct way to update the element based on the input type.

9. How to make class html tag receive property ?
menggunakan tag {{$props}}

10. How to make conditional rendering in vue ?
The directive v-if is used to conditionally render a block:
<h1 v-if="awesome">Vue is awesome!</h1>

11. How we can render list in vue ?
We can use the v-for directive to render a list of items based on an array. 
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>

12. If we rendering list there must be bind key tag describe usage of it ?
Memberikan nilai yang unik untuk setiap item.

13. How we can handling input in vue ?
You can use the v-model directive to create two-way data bindings on form input elements. It automatically picks the correct way to update the element based on the input type.

14. What is props describe it ?
Props merupakan properti yang dimiliki objek.

15. What is component in vue ?
They help you extend basic HTML elements to encapsulate reusable code. 

16. How to pass property from parent component to child component ?
menggunakan props

17. What is Vuex ?
Vuex is a state management pattern + library for Vue.js applications.