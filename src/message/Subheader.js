import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Timestamp from './Timestamp';

const styles = StyleSheet.create({
  subheader: {
    flex: 1,
    flexBasis: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default class Subheader extends React.PureComponent {

  props: {
    from: string,
    timestamp: number,
    twentyFourHourTime: bool
  };

  render() {
    const { timestamp, twentyFourHourTime, from } = this.props;

    return (
      <View style={styles.subheader}>
        <Text style={styles.username}>
          {from}
        </Text>
        <Timestamp timestamp={timestamp} twentyFourHourTime={twentyFourHourTime} />
      </View>
    );
  }
}
