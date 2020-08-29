import React from 'react';
import { Dimensions } from 'react-native';
import { Circle, Rect } from "react-native-svg";
import ContentLoader from 'rn-content-loader';
import { AlarmList } from './AlarmeList';
export const deviceWidth = Dimensions.get('window').width;

const LoaderComponent = props => (
  <ContentLoader
    width={(deviceWidth)}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <AlarmList {...props} />
  </ContentLoader>
)


export default LoaderComponent;