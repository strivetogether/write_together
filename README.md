# Strive together

Overcome writer's block within the help of a community: share your own block and be helped, share your own ideas to help others.

<img width="1280" alt="screenshot displaying the main view of the app, a stuck of paper with the witer's block on it, and some post-it notes with ideas from other users surrounding it" src="https://user-images.githubusercontent.com/42493985/104588463-b3ea5b00-5668-11eb-89ac-7981a0ab3bd2.png">

- Working demo: strive-together.herokuapp.com/

## Setup

- Clone this repo

- Once you have opened the project inside the text editor of your choice, create a `.env` file on the root of the project.
  Inside of this file, you will need to add the following:

  ```shell
  PORT=3000
  ENV=development
  SESSION_SECRET= ///Here you can add any word of your choice///
  ```

- Then, on your terminal, inside the project's `client` folder, run:

  ```shell
  $ npm install
  ```

- Now we need to start the back-end and connect the app with Mongo DB.
  Once all of the npm packages have been installed, run the following in the root of the project:

  ```shell
  $ npm run dev
  ```

- On your terminal, go back inside the `client` folder and run the following:

  ```shell
  $ npm start
  ```



## Authors

- <a href='https://github.com/jan-webdev'>Jan Völker</a>
- <a href='https://github.com/prullansky'>ale rodriguez</a>
