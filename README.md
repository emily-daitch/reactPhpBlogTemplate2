# reactPhpBlogTemplate2
[reactPhpBlogTemplate](https://github.com/emily-daitch/reactPhpBlogTemplate/blob/live/README.md) without create-react-app

# Getting Started
To get started, please download XAMPP (if you wish to develop changes locally with Apache and MySQL) and clone the main branch of this repository. You will need to clone the repository to C:/xampp/htdocs/reactPhpBlogTemplate2 or {Your xampp installation}/htdocs/{your repo name}, so best to clone *after* the installation.<br><br>
Alternatively, you can set the environment variable LOCAL_DEV to false and use a hosting platform of your choice, I have chosen Hostinger.<br>
You can see my implementation [here](https://emilydaitch.click) and I recommend setting up a staging subdomain for testing changes before you deploy them, especially if you are not using XAMPP to develop locally.<br><br>
As usual, we will want to run yarn to install our application and development dependencies defined in package.json. <br><br>
From here, we can use yarn build (or yarn build:staging) to create the index file and static folder which XAMPP or Hostinger will need to serve your blog. See more in the Hosting section below.<br>
-- Work in progress --

# Making changes locally with XAMPP
You will also need to clone the [backend]() repository and place the files within the same xampp/htdocs/{repo} folder mentioned above. These PHP files will serve as the backend of the blog site. It is best practice to keep frontend and backend code separate (separation of concerns) and this also helps us avoid exposing access tokens on the frontend. You will notice the env files of this repository contain no secrets for external API access as those will be kept securely on the server side and accessed by the backend.<br><br>
We will be using XAMPP (Cross-Platform Apache MySQL PHP Perl) to host the PHP backend and React frontend (using Apache). You could also simply use XAMPP for PHP and webpack serve (yarn start) to host the frontend locally if that is your preference. It is faster, but less equivalent to what will ultimately be hosted "live". Either method of serving the frontend will ultimately interact with XAMPPs PHP instance for the locally hosted backend fucntionality.<br>
-- Work in progress --

# Hosting with Hostinger
Work in progress

# Webpack
Work in progress

# Deployment
Work in progress

# Resources

[React docs](https://react.dev/learn)<br>
[Hostinger](https://www.hostinger.com/)<br>
[CanvasJS](https://canvasjs.com/)<br>
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
