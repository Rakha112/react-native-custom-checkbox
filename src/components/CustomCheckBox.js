import React, {memo} from 'react';
import Svg from 'react-native-svg';
import {useDerivedValue, withTiming} from 'react-native-reanimated';
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
    const progress = useDerivedValue(() => {
      return withTiming(checked ? 1 : 0);
    });

    return (
      <Svg width="49" height="49" viewBox="0 0 49 49">
        <AnimatedBackPath
          progress={progress}
          checkedBorderColor={checkedBorderColor}
          unCheckedBorderColor={unCheckedBorderColor}
          checkedBackgroundColor={checkedBackgroundColor}
          unCheckedBackgroundColor={unCheckedBackgroundColor}
        />
        <AnimatedCheckMarkPath
          progress={progress}
          checkMarkColor={checkMarkColor}
        />
      </Svg>
    );
  },
);

export default CustomCheckBox;
