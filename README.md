# reactPhpBlogTemplate2
[reactPhpBlogTemplate](https://github.com/emily-daitch/reactPhpBlogTemplate/blob/live/README.md) without create-react-app

This is a template for a blog site and portfolio combination. It's also a decent introduction to some web development concepts. This project uses React with the Matreial UI (MUI5) library for components and styling, and PHP for the backend. The site contains a home page for a personalized introduction and list of blog posts, which navigate to single pages for viewing blog posts individually. It also has a Contact Me, Resume, and Calendar/Scheduling page. I hope you like it.

# Getting Started
To get started, please download XAMPP (if you wish to develop changes locally with Apache and MySQL) and clone the main branch of this repository. You will need to clone the repository to C:/xampp/htdocs/reactPhpBlogTemplate2 or {Your xampp installation}/htdocs/{your repo name}, so best to clone *after* the installation.<br><br>
Alternatively, you can set the environment variable LOCAL_DEV to false and use a hosting platform of your choice, I have chosen Hostinger.<br>
You can see my implementation [here](https://emilydaitch.click) and I recommend setting up a staging subdomain for testing changes before you deploy them, especially if you are not using XAMPP to develop locally.<br><br>
As usual, we will want to run yarn to install our application and development dependencies defined in package.json. <br><br>
From here, we can use yarn build (or yarn build:staging) to create the index file and static folder which XAMPP or Hostinger will need to serve your blog. See more in the Hosting section below.<br>
-- Work in progress --

# Making changes locally with XAMPP
You will also need to clone the [backend](https://github.com/emily-daitch/reactPhpBlogTemplateBackend) repository and place the files within the same xampp/htdocs/{repo} folder mentioned above. These PHP files will serve as the backend of the blog site. It is best practice to keep frontend and backend code separate (separation of concerns) and this also helps us avoid exposing access tokens on the frontend. You will notice the env files of this repository contain no secrets for external API access as those will be kept securely on the server side and accessed by the backend.<br><br>
We will be using XAMPP (Cross-Platform Apache MySQL PHP Perl) to host the PHP backend and React frontend (using Apache). You could also simply use XAMPP for PHP and webpack serve (yarn start) to host the frontend locally if that is your preference. It is faster, but less equivalent to what will ultimately be hosted "live". Either method of serving the frontend will ultimately interact with XAMPPs PHP instance for the locally hosted backend fucntionality.<br>
-- Work in progress --

# Populating the database with example/test posts
There is a file in the root directory called .htaccess (you may need to make hidden files visible to see this). This is a configuration file that the Apache web server uses, and it directs requests to the index.html file so that the React application is served. In this file you will see a comment explaining how to comment a line which will cause requests to instead be routed to index.php. The index.php file has a commented line getPosts() which will get posts from https://jsonplaceholder.typicode.com/posts and save them to your databases posts table. Doing this will allow you to see how posts are displayed and how pagination works without having to create your own content. See the backend repository for instructions on setting up your database and tables.

# Webpack
Create-react-app (CRA) uses webpack to bundle files for you automagically, and this is part of the execution when you run npm/yarn build/start (which under the hood, defined in package.json, calls the react app scripts). To get away from CRA, we have to handle this ourselves. In the repository you will find a webpack config file webpack.config.js which is used when we run npm/yarn build/start. You can see this is the package.json file, where under scripts, we call the webpack tool.

# Deployment
When you buy a domain (which you can do through Hostinger) and host a website at that domain through Hostinger, you will be able to manage the site through the Websites tab when logged in to Hostinger. This will bring you to a page where you can go to File Manager or Databases. File manager will bring you to a page where you can upload your build documents, similar to how when you develop locally you place the build files under the xampp/htdocs/project folder. You will need the static folder and root level index.html copied here, as well as the api folder from the backend repository. When you go to the Database manager, you will see an admin page very similar to what you saw when hosting locally with XAMPP and going to the MySQL admin page (phpMyAdmin). This is where you will setup your database credentials and tables.

# Resources

[React docs](https://react.dev/learn)<br>
[Hostinger](https://www.hostinger.com/)<br>
[MUI5](https://mui.com/)<br>
[PHP](https://www.php.net/docs.php)<br>
[MySQL](https://www.mysql.com/)<br>
[Original YouTube Guide by ZarxBinx (outdated for current implementations, but maybe useful)](https://www.youtube.com/watch?v=RQYpSfXUgn4)<br>
[XAMPP](https://www.apachefriends.org/download.html)<br>
[Webpack](https://webpack.js.org/)<br>
[env-cmd](https://www.npmjs.com/package/env-cmd)<br>
[babel](https://babeljs.io/)<br>
[nodejs](https://nodejs.org/)<br>
[npm](https://www.npmjs.com/)<br>
[nvm](https://www.npmjs.com/package/nvm)<br>
[yarn](https://yarnpkg.com/)<br>
