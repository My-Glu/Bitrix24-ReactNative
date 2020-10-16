import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';

export default class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.tableView}>

          <View style={styles.rowsView}>
            
              <View style={styles.Rows}>

                <View style={styles.registeredName}>

                  <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                  <View style={{ marginLeft: 10 }}>
                    <Title style={{ color: '#49641D', }}>Farhan Sarwer</Title>
                    <Caption style={{ fontSize: 18 }}>FACEBOOK </Caption>
                  </View>

                </View>

                <View>
                  <TouchableOpacity style={{ width: 100, height: 30 }}>
                    <Caption style={{ fontWeight: 'bold' }}>Wed </Caption>
                  </TouchableOpacity>
                </View>


              </View>
            

              <View style={styles.Rows}>

                <View style={styles.registeredName}>

                  <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                  <View style={{ marginLeft: 10 }}>
                    <Title style={{ color: '#49641D', }}>Ramzan Rafay</Title>
                    <Caption style={{ fontSize: 18 }}>INSTAGRAM</Caption>
                  </View>



                </View>

                <View>
                  <TouchableOpacity style={{ width: 100, height: 30 }}>
                    <Caption style={{ fontWeight: 'bold' }}>Wed </Caption>
                  </TouchableOpacity>
                </View>
              </View>
            
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableView: {
    width: 350,
    height: 200,
    marginLeft: 7,
    marginTop: 30,
  },



  rowsView: {
    height: 250,
    width: 600,
    


  },
  Rows: {
    flexDirection: 'row',
    marginTop: 10,
    width: 350,
    borderBottomColor:'#D6E2C2',
    borderBottomWidth:1,
    marginBottom:15
    
  },
  registeredName: {
    flexDirection: 'row',
    height: 100,
    width: 320,
  },

});