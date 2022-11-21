import {useEffect} from 'react';
import Reanimated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, cancelAnimation, Easing } from 'react-native-reanimated';
import {View, Dimensions} from 'react-native';

const RView = Reanimated.createAnimatedComponent(View);

const Loader = () => {
    const rotateValue = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{
          rotateZ: `${rotateValue.value}deg`
        }]
      }
    }, []);
  
    useEffect(()=>{
      rotateValue.value = withRepeat(withTiming(360, {duration: 1500,
        easing: Easing.linear}), -1, false);
      return () => {
        cancelAnimation(rotateValue);
      }
    }, [])
    return (
      <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <RView style={[{
        height: 100,
        width: 100,
        borderWidth: 5,
        borderColor: "#a9a9a9",
        borderTopColor: "#F81493",
        borderRadius: 100
    }, animatedStyle]}>
    </RView>
  </View>
    )
}


export default Loader;