import React from 'react';
import Animated, {
  useAnimatedProps,
  interpolateColor,
} from 'react-native-reanimated';
import {Path} from 'react-native-svg';
const AnimatedColor = ({
  progress,
  unCheckedBorderColor,
  checkedBorderColor,
  unCheckedBackgroundColor,
  checkedBackgroundColor,
}) => {
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const animation = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      [unCheckedBackgroundColor, checkedBackgroundColor],
    );
    const stroke = interpolateColor(
      progress.value,
      [0, 1],
      [unCheckedBorderColor, checkedBorderColor],
    );
    return {fill, stroke};
  });
  return (
    <AnimatedPath
      animatedProps={animation}
      d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
      strokeWidth={4}
    />
  );
};

export default AnimatedColor;
