# WordPress / Gulp4 Starter / Docker

A blue-box mac’n’cheese solution for getting the ball rolling quickly on theme development for WordPress using Gulp 4 as a toolkit and Docker for local hosting.



## Before We Begin

This project assumes you have a working knowledge of [WordPress](https://wordpress.org) as a system and already have [Docker](https://www.docker.com) bumping for your local dev needs. You should also be comfortable with `npm` packages and working in the console. Experience with [Gulp](https://gulpjs.com) is handy but not necessary, this will walk you through that setup.

Also, this is a bare-bones starter theme, we have an `index.php`, a `functions.php` and a very empty `style.css`. If you are not yet ready to build out a theme and its required templates yourself, you will want to start with a more complete theme.

If you have another solution besides Docker for local development, no fear, just move the folder  `./WordPress-Gulp4-Starter/wp-content/wp-gulp-starter` into the appropriate `[root]/wp-content/` folder in your project.



# Getting Started


## Get Gulp

First, you will need Gulp installed globally. If you do not have it yet, [get it](http://gulpjs.com):

```
npm install gulp-cli -g
npm install gulp -D
npx -p touch nodetouch gulpfile.js
gulp --help
```


## Get the Set, Docker + WordPress

Next, download the fileset. This has been optimized for quickstart with Docker, just open a terminal and enter `docker-compose up -d`, standing up a Docker container in detached mode (allowing you to keep the terminal open for running Gulp or etc). The url will default to `localhost:8080` but can be changed to whatever you'd like via `docker-compose.yml:35`.

(If you need to shut down your Docker container, use `docker-compose down`.)

There's a brand spanking new WordPress instance at the url, go through the normal site setup. You can go to `Appearance > Themes` in the side rail and activate the `WordPress Gulp 4 Starter` theme to jump into it immediately, although I would recommend Personalization (see below).


### Migrating an Existing Site?

We have a muted configuration for [PHPMyAdmin](https://www.phpmyadmin.net) in place in `docker-compose.yml:15-28`, simply uncomment the block and run `docker-compose up -d` anew. PHPMyAdmin will then default to `http://localhost:9090`, this can be changed via `docker-compose.yml:23`. Just remember to close down your container if you comment it back out, it will need to be restarted.



## Taking the Gulp

With WordPress up and running and our theme in place, it's time to kick Gulp into gear. Now why are we using Gulp? Because you will want to do things like edit files and build out your theme, using Gulp handles your `SCSS > CSS` processing, minification, etc, and reloads the site automatically when files change. Very handy.

The `gulpfile.js` is configured to output the fileset into the `./wp-content/themes` folder using the `dest` variable in `src/gulpfile.js:13` to define the folder name.



## Get Personal

Open `src/scss/style.scss` to edit your style.css details. This is what will display in the listing in `Appearance > Themes`.

At `gulpfile.js:13` change `dest` to your theme name ala '../themes/your-theme-name'


### If You Are Not Using Docker!
Before you see any theme available in `Appearance > Themes` you need to run a build to get your initial fileset:
```
gulp build
```

There is now a folder in the site's `[root]/wp-content/themes/` for the newly cooked theme, it can be seen and selected in the dashboard.



## Get Crackin'

Let's put the Watcher on the Wall:
```
gulp
```

Bam! You should have a browser pop up with a localhost:3000 (or similar) mirroring the local dev url in `gulpfile.js`, any changes made will refresh into the browser.



## Get It All

Once you have completed your masterpiece, a final cook:

```
gulp build
```

Doing one final build clears out the fileset and recooks everything, to insure that all changes are reflected in the final fileset. The cooked theme is then ready to be deployed.



# Under the Hood

While the layout collection is intentionally minimal, there are several tools included in PHP and CSS.



## PHP Toolies

We have our functions broken out into child pages in the src/functions/ folder, including custom post types, shortcodes, script/style imports, utilities and global settings.

*In src/functions/globals.php, the upload directory has been changed to 'media'. Delete this line if you want it to default back to ./wp-content/uploads*

Utilities include:
- a string-to-slug cooker
- a numeric sanitizer to remove non-numeric characters (very handy for phone numbers in links)
- a url display sanitizer to remove http/https from valid url for display
- a content filter shorthand
- a boolean sniffer to detect variable content -- "Does this exist?"



## CSS Toolies

Our SCSS files are also broken out into child files, they live in the src/scss/ folder.

Many basics are included, including:
- the Meyer CSS reset
- screen size breakpoints in width
- media queries for width + height
- media query for hover rules



### Acknowledgements

- [Matt Banks'](https://github.com/mattbanks) work with WordPress starters circa 2015 was an inspiration, salud
- [Zell Liew's](https://css-tricks.com/gulp-for-beginners/) recipe informed the previous version of this starter, salud


### Author

[**Dan Cruzat**](http://thecruzat.com) for [Cruzat.Media](http://cruzat.media) and [E+C](http://eencee.me).
