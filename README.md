# Set Up

* Clone the app from github
* Run `bundle install` in your console to install gems
* Run `rake db:setup` in your console to set up the database, run migrations, and populate the app with seed data
* Run `rails s` to start the server
* Navigate to `localhost:3000/blog_posts/are-we-out-of-the-woods-yet` and start playing with titles!

P.S. Check out the (humble) mobile styling too!

### Check out the code

* React components live in `app/javascript/components`
* Styling lives in a `app/assets/stylesheets`
* The view for blogs posts is `app/views/blog_posts/show.html.slim`
* The controller for blogs posts is `app/controllers/blog_posts_controller.rb`

# Project Notes

### Things that went well

* The project works exactly as intended on all fronts!

* The styling is pretty much pixel-perfect.

* The project was actually super fun and challenging, I learned a ton, and I kind of got obsessed with it. Thanks for sending it my way!

* In doing this project I learned about the `window.history.pushState` method, which I am now so, so enamored with. It's an amazing method that lets you not only target the address bar and make changes, but it actually creates history in your browser, so you can hit back and go to the previous URL. I love it!


### Things that need improvement

* I took too long for the project. The guidelines said to spend 12 hours, and I think I spent about 24. This was partly because of the difficulty of the project, but also partly because I got super into it and did a good amount of work I didn't necessarily have to do (backend, mobile, little touches, etc.)

* I really underestimated the scale and complexity of this project and as a result I didn't organize at the beginning as well as I might for a large project. If I did this again, I would plan a more robust and consistent CSS methodology/naming convention, and a more organized approach to the React components. One of my components, `TitleForm.js`, is a bit bloated and handling more than one concern, which could have been avoided with some more planning.

### Other

* Currently I'm pinging the database for used/taken slug names only when I AJAX the changes. I considered pinging the database more often to update the list, but decided that checking it so often would be way too heavy. I think in a realistic implementation of this feature, I would have a static list as I do now, and a final database check of the current list of reserved slugs just before updating (using React lifecycle methods), and if the slug is taken, I would throw an error to the user. It wouldn't be a seamless UX experience, but I think it would happen extremely rarely and is the best compromise between efficiency and UX.

* I'm wondering if there was a better way to do the see-through text with a white background. Right now it's a bit of a hack, it's a lot of lines of code, and I figured out the positioning by testing it pixel-by-pixel in my browser's dev tools. I'd love to chat about a more minimal implementation.

* I'm using the friendly_id gem for title-to-slug conversion, it's a really great and handy gem that's super easy to use. I thought I should mention it because it's doing some heavy lifting.
