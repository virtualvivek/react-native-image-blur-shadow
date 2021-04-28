<h1 align="center">react-native-image-blur-shadow</h1>
<p align="center">A RN library provides Image blur shadows supports nice animations and easy to customize, Supports Android, iOS and Web.</p>

<p align="center">
    
<a href="https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=blue"
        alt="License: MIT" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/platform-Android | iOS | Web-green.svg?style=flat-square&logo=keyboard&color=8a1db3"
        alt="Platform" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/100%25-Javascript-green.svg?style=flat-square&logo=keyboard&color=e3e017"
        alt="Javascript" />
</a>
  
<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/github/package-json/v/virtualvivek/react-native-image-blur-shadow?color=%2331b57e&style=flat-square"
        alt="Version" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/npm-package-green.svg?style=flat-square&logo=npm&color=f55a42"
        alt="NPMJS" />
</a>

</p>
​
<p align="center">
    <img src="https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/app/markdown/md_preview_one.jpg" width="250" />
    <img src="https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/app/markdown/md_preview_two.jpg" width="250" />
</p>

# Demo
<a href="https://snack.expo.io/@virtualvivek/image-blur-shadow" target="_blank">https://snack.expo.io/@virtualvivek/image-blur-shadow</a>

# Installation

```ruby
$ npm install react-native-image-blur-shadow
```
## Import

```jsx
import ImageBlurShadow from 'react-native-image-blur-shadow';
```

## Usage

```jsx
import ImageBlurShadow from 'react-native-image-blur-shadow'

<ImageBlurShadow
    style={styles.img}
    source={require('./src/assets/spiderman.jpg')}
    imageWidth={220}
    imageHeight={220}
    imageBorderRadius={22}
    shadowOffset={38}
    shadowBlurRadius={48}
    shadowBackgroundColor={'#ffffff'}
  />
```

## Props

| Property             |  Type   | Default | Description                                  |
| -------------------- | :-----: | :-----: | -------------------------------------------- |
| style                | object  |  `{}`   | set the style of component container         |
| source               | string  |  null   | set the image source                         |
| imageWidth           | number  |  default| set image width                              |
| imageHeight          | number  |  default| set image height                             |
| imageBorderRadius    | number  |  12     | set image border radius                      |
| shadowOffset         | number  |  38     | set/override shadow offset                   |
| shadowBlurRadius     | number  |  34     | set/override shadow blurRadius               |
| shadowBackgroundColor| HexColor|`#ffffff`| set/override shadow background color         |

## Find this library useful? :heart:
Support it by joining [stargazers](https://github.com/virtualvivek/react-native-image-blur-shadow/stargazers) for this repository. :star:

# License

`react-native-image-blur-shadow` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE). <br>
Copyright (c) 2021 ` Vivek Verma `
