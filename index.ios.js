const Main = require('./App/Components/Main');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});

class movieHausMobile extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'iMōvieHâus',
          component: Main
        }} />
    );
  }
}


AppRegistry.registerComponent('movieHausMobile', () => movieHausMobile);
