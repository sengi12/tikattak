# TikAtTak

![tikattak_logo](./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png)

This is a fork from [tiktok-ui](https://github.com/ReinanHS/tiktok-ui) (thanks to @ReinanHS), with some added functionality. TikTok, also known as Douyin in China, is a media app for creating and sharing short videos. The purpose of this is a proof of concept to demonstrate how popular social media applications can take potentially sensitive user data without the user's awareness.

In this specific application, the clipboard will be copied for every key press (similar to how [iOS14 exposed Tik Tok](https://www.youtube.com/watch?v=eEvHyr_8vEA&t=78s)). An example of the application working can be seen below:

<center>
<div>
  <img width="200" alt="portfolio_view" src="./img/test_case.png">
  <img width="200" alt="portfolio_view" src="./img/notifications.png">
</div>
</center>

# The User Interface
<center>
<div>
  <img width="200" alt="portfolio_view" src="https://i.imgur.com/iJQlwIs.jpg">
  <img width="200" alt="portfolio_view" src="https://i.imgur.com/kIAyQR4.jpg">
</div>
</center>
## Prerequisites

- Git (https://git-scm.com/)
- Node (https://nodejs.org)
- Android Studio (https://developer.android.com/studio)

## Development environment

- Binaries
  - Node: 12.9.1
  - Yarn: 1.21.1
  - npm: 6.13.7
- npmPackages
  - react: 16.9.0
  - react-native: 0.61.5


## Installation

The first thing we have to do is download the repository for our development environment

```sh
git clone https://github.com/sengi12/tikattak.git
```

![GITHUB](https://media.giphy.com/media/J2IacsJPTXl8jflZqB/giphy.gif)

Run the following command to download the project's dependencies

```sh
npm install
```

![NPM](https://media.giphy.com/media/H61nMudiXtK8vSy5dP/giphy.gif)

Now that all the dependencies have been downloaded we will install the application on the emulator with the following command

```sh
npx react-native run-android
```

![android](https://media.giphy.com/media/YoKEpAluJiOSEITYpe/giphy.gif)

### If your NodeJS version is greater than 12.10

```txt
Expo fails to start the project: error Invalid regular expression: /(.*\\__fixtures__
```

If you have a problem with this error, follow these steps

to solve this problem you have to change this file `\node_modules\metro-config\src\defaults\blacklist.js` there is an invalid regular expression that needed changed. I changed the first expression under `sharedBlacklist` from:

```js
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

to:

```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

for more details see [Stackoverflow](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start)

### Installation video tutorial

See more details in this [video](https://youtu.be/T0G-G76UNdw)
