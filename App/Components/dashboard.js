const React = require('react-native');

const {
  Text,
  StyleSheet,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
})

class Dashboard extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text> This is the dashboard </Text>
        <Text> {JSON.stringify(this.props.movieInfo)} </Text>
      </View>
    )
  }
}

module.exports = Dashboard;
