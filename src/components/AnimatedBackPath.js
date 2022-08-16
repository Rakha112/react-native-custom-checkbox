import React from 'react';
import Animated, {
  useAnimatedProps,
  interpolateColor,
} from 'react-native-reanimated';
import {Path} from 'react-native-svg';
const AnimatedBackPath = ({
  progress,
  checkedBorderColor,
  unCheckedBackgroundColor,
  checkedBackgroundColor,
}) => {
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const backgroundAnimation = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      [unCheckedBackgroundColor, checkedBackgroundColor],
    );
    return {fill};
  });
  return (
    <AnimatedPath
      animatedProps={backgroundAnimation}
      d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
      stroke={checkedBorderColor}
      strokeWidth={4}
    />
  );
};

export default AnimatedBackPath;
