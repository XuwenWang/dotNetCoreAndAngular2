# .Net Core And Angular 2 with typescript

This project demos how to create a .Net Core web application with Angular 2 from scratch.
First create an ASP.Net Core Web Application like below:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/01.png)

The template will generate all the files necessary for your first .Net Core App:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/02.png)

Press F5 and you have your .Net Core running – how cool is that!

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/03.png)

Now let’s see how to add Angular 2 support into the project.
* Note: you will need npm and gulp for the client side library management which is perfectly supported in in Visual Studio 2015 update 3. 
Add a npm Configuration file (package.json) to your project’s root:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/04.png)

Add a new section “dependencies” with items like below:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/05.png)

Save it and all the files will start being restored into your project right away!

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/06.png)

But where are those files we just downloaded? You can’t see them anywhere, until you switch on the “Show All Files”. You’ll see a new folder “node_modules” where all the files are stored.

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/07.png)

All the files are not included in the project and VS won’t do anything about them. But we need them to be in the right place which is in the folder wwwroot. Now it’s time for another tool, gulp, to come into play.

Gulp is already supported by VS 2015. So you just simply create a Gulp configuration file (gulpfile.js):

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/08.png)

Add a task in the gulpfile:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/09.png)

At this time if you run the task ‘copy-js-files’ it will fail. We’ll need to get the gulp via npm. Open package.json and add an entry in devDependencies:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/10.png)

Now run the task in Task Runner Explorer:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/11.png)

You’ll find all the files are copied to wwwroot/lib and added to the project:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/12.png)

Next let’s change the layout view to include the javascript files. Find _Layout.cshtml in Views/Shared and make the changes like below:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/13.png)

Create system.config.js file in wwwroot/js folder:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/14.png)

Now everything is set up for us to write our Angular 2 application with type script. Create new type script files in folder wwwroot/js:

app.component.ts:


![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/15.png)

app.module.ts:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/16.png)

main.ts:

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/17.png)

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/18.png)

Upon saving all the typescript files will be transcompiled into js automatically. 
Now if you press F5 run your application, the Angular 2 single page application is up!

![alt tag](https://github.com/XuwenWang/dotNetCoreAndAngular2/blob/master/src/dotNetCoreAndAngular2/wwwroot/images/19.png)

