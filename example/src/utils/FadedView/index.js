import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import hexToRgb from '../helper/hexToRgb'

const divisor = 1000;
const divisor2 = 1500;
const pi = 1/divisor;

class FadedView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collection: []
    }

    
  }

  componentDidMount(){
    let i;
    let collection = [];

    let pixelsStyle = {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: 100,
      flexDirection: 'column',
      transform: [{scaleY: 0.5}]     
    };
    let pixelsStyleLeft = {
      width: 50,
      position: 'absolute',
      bottom: 0,
      height: this.props.imageHeight,
      flexDirection: 'row-reverse',
      transform: [{scaleX: 0.5}]
    };
    let pixelsStyleRight = {
      width: 50,
      position: 'absolute',
      bottom: 0,
      height: this.props.imageHeight,
      flexDirection: 'row',
      transform: [{scaleX: 0.5}]
    };
    // if (props.direction === 'up') {

      pixelsStyle = {
        ...pixelsStyle, bottom: 0
      }
      pixelsStyleLeft = {
        ...pixelsStyleLeft, left: 0
      }
      pixelsStyleRight = {
        ...pixelsStyleRight, right: 0
      }
      collection.push(0);
      i = pi;
      while (i < 0.5) {
        collection.push(i);
        i += pi;
      }
      collection.push(1);
      
    // }

    let r = 0, g = 0, b = 0;
    if (hexToRgb(this.props.color)) {
      r = hexToRgb(this.props.color).r;
      g = hexToRgb(this.props.color).g;
      b = hexToRgb(this.props.color).b;
    }
    this.setState({
      collection,
      pixelsStyle,
      pixelsStyleLeft,
      pixelsStyleRight,
      r, g, b
    })

  }

  // Code to capture shadowBackgroundColor prop changes --

  componentDidUpdate(prevProp){
    if(prevProp.color !== this.props.color){
      let r = 0, g = 0, b = 0;
        r = hexToRgb(this.props.color).r;
        g = hexToRgb(this.props.color).g;
        b = hexToRgb(this.props.color).b;
      
      this.setState({
        r, g, b
      })
    }
  }

  render() {
    const { children, height } = this.props;
    const { collection, pixelsStyle,pixelsStyleLeft,pixelsStyleRight, r, g, b } = this.state;

    return (
      <View style={{display:'flex'}}>

      <View style={{ flexDirection: 'column'}}>
        <View style={pixelsStyle}>
          {collection.map((o, key) =>
            <View
              key={key}
              style={{
                height: height / divisor,
                opacity:o,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})`
              }} />
          )}
        </View>
      </View>

      <View style={{marginStart:-8, flex:1, alignContent:'flex-start'}}>
        <View style={pixelsStyleLeft}>
          {collection.map((o, key) =>
            <View
              key={key}
              style={{
                width: 100 / divisor2,
                opacity:o,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})`
              }} />
          )}
        </View>
      </View>

      <View style={{marginEnd:-8, flex:1, alignContent:'flex-end'}}>
        <View style={pixelsStyleRight}>
          {collection.map((o, key) =>
            <View
              key={key}
              style={{
                width: 100 / divisor2,
                opacity:o,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})`
              }} />
          )}
        </View>
      </View>

      {children}
    </View>
    );
  }
}

FadedView.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string
}

FadedView.defaultProps = {
  color: '#ffffff'
}

export default FadedView;