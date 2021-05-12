<h1 align="center">react-native-image-blur-shadow</h1>
<p align="center">A RN library provides Image blur shadows, highly customizable and mutable component. Supports Android, iOS and Web.</p>

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
| imageBorderRadius    | number  |  0      | set image border radius                      |
| imageFadeDuration    | number  |  300    | set image fade animation duration in ms      |
| shadowOffset         | number  |  38     | set/override shadow offset                   |
| shadowBlurRadius     | number  |  34     | set/override shadow blurRadius               |
| shadowBackgroundColor| HexColor|`#ffffff`| set/override shadow background color         |
| shadowFadeDuration   | number  |  300    | set shadow fade animation duration in ms     |

## Advance Props

| Property                    |  Type   | Default | Description                                  |
| --------------------------- | :-----: | :-----: | -------------------------------------------- |
| defaultSource               | object  |  `{}`   | set the default image source `iOS`           |
| onLoad                      | object  |  `{}`   | on Image Load Callback                       |
| onError                     | object  |  `{}`   | on Image Error Callback                      |
| onLoadStart                 | object  |  `{}`   | on Image Load Start Callback                 |
| onLoadEnd                   | object  |  `{}`   | on Image Load End Callback                   |
| onProgress                  | object  |  `{}`   | on Image Load Progress Callback              |
| onPartialLoad               | object  |  `{}`   | on Image Partial Load Callback               |
| imageBorderTopLeftRadius    | number  |   0     | set image top left border radius             |
| imageBorderTopRightRadius   | number  |   0     | set image top right border radius            |
| imageBorderBottomLeftRadius | number  |   0     | set image bottom left border radius          |
| imageBorderBottomRightRadius| number  |   0     | set image bottom right border radius         |


## Find this library useful? :heart:
Support it by joining [stargazers](https://github.com/virtualvivek/react-native-image-blur-shadow/stargazers) for this repository. :star:

# License

`react-native-image-blur-shadow` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE). <br>
Copyright (c) 2021 ` Vivek Verma `
