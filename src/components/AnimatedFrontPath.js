import React, {useRef, useState} from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import {Path} from 'react-native-svg';
const AnimatedFrontPath = ({progress, unCheckedBorderColor}) => {
  const [length, setLength] = useState(0);
  const pathRef = useRef(null);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const pathAnimation = useAnimatedProps(() => {
    const strokeDashoffset = length * progress.value;
    // console.log('pathProgress.value : ' + pathProgress.value);
    return {strokeDashoffset};
  });
  return (
    <AnimatedPath
      animatedProps={pathAnimation}
      onLayout={() => setLength(pathRef.current.getTotalLength())}
      ref={pathRef}
      d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
      stroke={unCheckedBorderColor}
      strokeWidth={4}
      strokeDasharray={length}
    />
  );
};

export default AnimatedFrontPath;
