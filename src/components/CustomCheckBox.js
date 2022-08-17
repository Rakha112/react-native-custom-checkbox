import React, {memo} from 'react';
import Svg from 'react-native-svg';
import {useDerivedValue, withTiming} from 'react-native-reanimated';
import AnimatedFrontPath from './AnimatedFrontPath';
import AnimatedCheckMarkPath from './AnimatedCheckMarkPath';
import AnimatedBackPath from './AnimatedBackPath';
const CustomCheckBox = memo(
  ({
    checked,
    checkMarkColor,
    checkedBorderColor,
    unCheckedBorderColor,
    checkedBackgroundColor,
    unCheckedBackgroundColor,
  }) => {
    const pathProgress = useDerivedValue(() => {
      return withTiming(checked ? 1 : 0);
    });
    const backgroundProgress = useDerivedValue(() => {
      return withTiming(pathProgress.value === 1 ? 1 : 0);
    });
    const checkMarkProgress = useDerivedValue(() => {
      return withTiming(pathProgress.value === 1 ? 1 : 0);
    });

    return (
      <Svg width="49" height="49" viewBox="0 0 49 49">
        <AnimatedBackPath
          progress={backgroundProgress}
          checkedBorderColor={checkedBorderColor}
          checkedBackgroundColor={checkedBackgroundColor}
          unCheckedBackgroundColor={unCheckedBackgroundColor}
        />
        <AnimatedCheckMarkPath
          progress={checkMarkProgress}
          checkMarkColor={checkMarkColor}
        />
        <AnimatedFrontPath
          progress={pathProgress}
          unCheckedBorderColor={unCheckedBorderColor}
        />
      </Svg>
    );
  },
);

export default CustomCheckBox;
