import * as React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  absoluteGradient: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  gradientChild: {
    flex: 1,
  },
});


const SkeletonContent = ({
                                                                           containerStyle = styles.container,
                                                                           isLoading,
                                                                           children,
                                                                         }) => {

  return (
    // @ts-ignore
    <View style={containerStyle} >
      {isLoading ? <View style={{width:300,height:300,backgroundColor:'green'}}/> : children}
    </View>
  );
};

export default React.memo(SkeletonContent);
