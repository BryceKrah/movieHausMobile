const React = require('react-native');

const {
  Text,
  Image,
  StyleSheet,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: 'lightgray'
  },
  image: {
    height: 400,
    width: 350
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
        <Text> Title: {this.props.movieInfo.Title} </Text>
        <Text> Year: {this.props.movieInfo.Year} </Text>
        <Text> Rated: {this.props.movieInfo.Rated} </Text>
        <Text> Released: {this.props.movieInfo.Released} </Text>
        <Text> Genre: {this.props.movieInfo.Genre} </Text>
        <Text> Director: {this.props.movieInfo.Director} </Text>
        <Text> Writer: {this.props.movieInfo.Writer} </Text>
        <Text> Actors: {this.props.movieInfo.Actors} </Text>
        <Text> Plot: {this.props.movieInfo.Plot} </Text>
        <Text> Awards: {this.props.movieInfo.Awards} </Text>
        <Text> Metascore: {this.props.movieInfo.Metascore} </Text>
        <Text> imdbRating: {this.props.movieInfo.imdbRating} </Text>
        <Image style={styles.image} source={{uri: this.props.movieInfo.Poster}} />
      </View>
    )
  }
}

module.exports = Dashboard;
