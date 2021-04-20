# react-native-image-blur-shadow
A RN library provides Image blur shadows supports nice animations and easy to customize.

<a href="https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=blue"
        alt="License: MIT" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/platform-Android | iOS-green.svg?style=flat-square&logo=keyboard&color=8a1db3"
        alt="Platform" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/100%25-Javascript-green.svg?style=flat-square&logo=keyboard&color=e3e017"
        alt="Platform" />
</a>
  
<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/github/package-json/v/virtualvivek/react-native-image-blur-shadow?color=%2331b57e&style=flat-square"
        alt="Version" />
</a>

<a href="https://www.npmjs.com/package/react-native-image-blur-shadow">
    <img src="https://img.shields.io/badge/npm-package-green.svg?style=flat-square&logo=npm&color=f55a42"
        alt="NPMJS" />
</a>

# Installation

```ruby
$ npm install react-native-image-blur-shadow
```
## Import

```jsx
import ImageBlurShadow from "react-native-image-blur-shadow";
```

## Usage

```jsx
import ImageBlurShadow from "react-native-image-blur-shadow"

<ImageBlurShadow
    style={styles.img}
    source={require('./src/assets/captain.jpg')}
    imageWidth={220}
    imageHeight={220}
    imageBorderRadius={22}
    shadowOffset={38}
    shadowBlurRadius={48}
    shadowBackgroundColor={'#ffffff'}
  />
```

## Props

| Property        |  Type  | Default | Description                                             |
| --------------- | :-----:| :-----: | ------------------------------------------------------- |
| source          | string |  null   | set the image source                                    |
| imageWidth      | number |  default| set image width                                         |
| imageHeight     | number |  default| set image height                                        |
| shadowOffset    | number |  38     | set/override shadow offset                              |
| shadowBlurRadius| number |  34     | set/override shadow blurRadius                          |


# License

`react-native-image-blur-shadow` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE). <br>
Copyright (c) 2021 ` Vivek Verma `
