import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { string, number } from 'prop-types';

import icommon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icommon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
}

Icon.propTypes = {
  name: string.isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: '#000000',
};
