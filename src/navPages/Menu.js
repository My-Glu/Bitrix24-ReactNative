import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>

          <View style={{ height: 320, width: 420, marginBottom: 40, marginTop: 30, borderBottomColor: 'grey', borderBottomWidth: 1 }}>

            <View>
              <Text style={{ color: '#0A1F3E', fontSize: 18, marginLeft: 22 }}>
                Prefrences
  </Text>


              <View style={{ marginBottom: 12, marginLeft: 20, marginTop: 8 }}>
                <View style={{ flexDirection: 'row', width: 270 }}>

                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/blue6.jpg')} size={30} style={{ marginTop: 10 }} />
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>Work Flows</Title>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity style={{ width: 100, height: 40, marginLeft: 80, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>



              </View>

              <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
              </View>

              {/* ------------------------------third View Second Table----------------------------------------------  */}

              <View style={{ marginBottom: 12, marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', width: 270 }}>


                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/blue6.jpg')} size={30} style={{ marginTop: 10 }} />
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>Calendar</Title>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity style={{ width: 100, height: 40, marginLeft: 80, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>




                </View>

              </View>

              <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
              </View>

              {/* ------------------------------third View third Table----------------------------------------------  */}

              <View style={{ marginBottom: 12, marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', width: 270 }}>


                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/blue6.jpg')} size={30} style={{ marginTop: 10 }} />
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>My Drive</Title>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity style={{ width: 100, height: 40, marginLeft: 80, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              </View>

              <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
              </View>


              {/* ------------------------------third View Forth Table----------------------------------------------  */}

              <View style={{ marginLeft: 20,marginBottom:12 }}>
                <View style={{ flexDirection: 'row', width: 270 }}>


                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/Newfolder/flowww.png')} size={30} style={{ marginTop: 10 }} />
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>Shared Drive</Title>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity style={{ width: 100, height: 40, marginLeft: 80, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              </View>
              <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center' }}>
              </View>

            </View>


          </View>

          {/* --------------------------Second View --------------------------   */}

          <View style={{ height: 320, width: 420, borderTopColor: 'grey', borderTopWidth: 1 }}>

            <View>
              <Text style={{ color: '#0A1F3E', fontSize: 18, marginLeft: 22, marginTop: 8, marginBottom: 12 }}>
                App Settings
  </Text>
            </View>

            <View style={{ marginBottom: 10, marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>


                <View>
                  <Title style={{ color: '#49641D' }}>Notifications</Title>
                </View>
              </View>


            </View>







            <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
            </View>

            {/* ------------------------------third View Second Table----------------------------------------------  */}

            <View style={{ marginBottom: 10, marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>





                <View>
                  <Title style={{ color: '#49641D' }}>Chats</Title>
                </View>
              </View>


            </View>






            <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
            </View>

            {/* ------------------------------third View third Table----------------------------------------------  */}

            <View style={{ marginBottom: 10, marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>





                <View>
                  <Title style={{ color: '#49641D' }}>Bottom Menu</Title>
                </View>
              </View>


            </View>



            <View style={{ width: 280, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 5 }}>
            </View>


            {/* ------------------------------third View Forth Table----------------------------------------------  */}

            <View style={{ marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>



                <View>
                  <Title style={{ color: '#49641D' }}>Other Settings</Title>
                </View>
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





  Rows: {
    flexDirection: 'row',
    width: 300
  },
  registeredName: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 230,
  },
});