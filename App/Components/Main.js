const React = require('react-native');
const api = require('../Utils/app');
const Dashboard = require('./dashboard')

const {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Text
} = React;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#38EEEE'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(e){
    this.setState({
      name: e.nativeEvent.text
    })
  }

  handleResponse(res){
    console.log("Submit", this.state.name);
    if(res.Response === 'False'){
      this.setState({
        error: 'Movie not found',
        isLoading: false
      })
    } else {
      this.props.navigator.push({
        title: res.name || 'Select an Option',
        component: Dashboard,
        passProps: {movieInfo: res}
      });
      this.setState({
        isLoading: false,
        error: false,
        name: ''
      });
    }
  }

  handleSubmit(){
    this.setState({
      isLoading: true,
    });
    api.getMovie(this.state.name)
      .then((jsonRes) => this.handleResponse(jsonRes))
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: `There was an error: ${err}`
        })
      })
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search by Title </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.name}
          onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
      )
  }
}

module.exports = Main;
