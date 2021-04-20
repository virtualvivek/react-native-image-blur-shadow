# react-native-image-blur-shadow
A RN library provides Image blur shadows supports nice animations and easy to customize.

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
| imageWidth      | length |  200    | set image width                                         |
| imageHeight     | length |  200    | set image height                                        |
| shadowOffset    | length |  38     | set/override shadow offset                              |
| shadowBlurRadius| length |  34     | set/override shadow blurRadius                          |


# License

`react-native-image-blur-shadow` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-native-image-blur-shadow/blob/main/LICENSE). <br>
Copyright (c) 2021 ` Vivek Verma `
