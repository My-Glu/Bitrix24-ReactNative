import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Header,SearchBar, Input} from 'react-native-elements';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // search: '',
    };
  }


  updateSearch = (search) => {
    this.setState({ search });
};


  render() {
    const { search } = this.state;
    return (
      <View style={{marginTop:'5%'}}>

        <View style={{borderWidth:1,borderColor:'#C0C0C0', borderRadius:2, marginHorizontal:'5%', backgroundColor:'white'}}>
      <SearchBar
      lightTheme
                            containerStyle={styles.searchbarContainer}
                            inputContainerStyle={styles.searchbarInputContainer}
                            inputStyle={[{ fontSize: 19 }, styles.searchbarInput]}
                            placeholder ="Search from contacts... "
                            searchIcon={{ size: 26 }}
                            onChangeText={this.updateSearch}
                            value={search}

                        />
                        </View>
                        
      </View>
    );
  }
}

const styles = StyleSheet.create({


    SearchBar: {
        alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      
      },
      searchbarContainer: {
      
      width: '100%',
      tintColor: 'white',
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius:0,
      borderWidth:2,
      borderColor: '#D3D3D3',
      paddingVertical:5,
      height: 45,
      
      },
      searchbarInputContainer: {
        backgroundColor: 'white',
        paddingVertical:20,
        marginVertical:20,
      borderWidth:0,
      height: 30,
      width: '95%',
      },
      icon:{

        height:20,
        width:20

      }
      

})