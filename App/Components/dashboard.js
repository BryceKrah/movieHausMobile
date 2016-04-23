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
        <Text> Title: {Object.values(this.props.movieInfo.Title)} </Text>
        <Text> Year: {Object.values(this.props.movieInfo.Year)} </Text>
        <Text> Rated: {Object.values(this.props.movieInfo.Rated)} </Text>
        <Text> Released: {Object.values(this.props.movieInfo.Released)} </Text>
        <Text> Genre: {Object.values(this.props.movieInfo.Genre)} </Text>
        <Text> Director: {Object.values(this.props.movieInfo.Director)} </Text>
        <Text> Writer: {Object.values(this.props.movieInfo.Writer)} </Text>
        <Text> Actors: {Object.values(this.props.movieInfo.Actors)} </Text>
        <Text> Plot: {Object.values(this.props.movieInfo.Plot)} </Text>
        <Text> Poster: {Object.values(this.props.movieInfo.Poster)} </Text>
        <Text> Awards: {Object.values(this.props.movieInfo.Awards)} </Text>
        <Text> Metascore: {Object.values(this.props.movieInfo.Metascore)} </Text>
        <Text> imdbRating: {Object.values(this.props.movieInfo.imdbRating)} </Text>
      </View>
    )
  }
}

module.exports = Dashboard;
