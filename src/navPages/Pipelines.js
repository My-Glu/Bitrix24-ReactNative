import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Pipelines extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

<ScrollView>

        {/* ------------------------------First View First Table----------------------------------------------  */}

        <View style={styles.elevatedView}>
          <View style={{ marginBottom: 15, marginLeft: 50, marginTop: 3 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, color: '#49641D', backgroundColor: 'white' }}>All Deals</Text>
              <Text style={{ color: '#49641D' }}>Won Deals</Text>
            </View>

            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, fontSize: 20 }}>RS.277,112</Text>
              <Text style={{ color: '#4EE15C', fontSize: 20 }}>RS. 57,112</Text>
            </View>

            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, color: '#49641D' }}>15 Deals</Text>
              <Text style={{ color: '#49641D' }}>22 Deals</Text>
            </View>
          </View>

          <View style={{ width: 280, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 20 }}>
          </View>

          {/* ------------------------------First View Second Table----------------------------------------------  */}

          <View style={{ marginBottom: 10, marginLeft: 50 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, color: '#49641D', backgroundColor: 'white' }}>In Process Deals</Text>
              <Text style={{ color: '#49641D' }}>Lost Deals</Text>
            </View>

            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, fontSize: 20, color: '#C3BD00' }}>RS.277,112</Text>
              <Text style={{ color: '#EB3232', fontSize: 20 }}>RS. 57,112</Text>
            </View>

            <View style={{ flexDirection: 'row', width: 270 }}>
              <Text style={{ width: 150, color: '#49641D' }}>4 Deals</Text>
              <Text style={{ color: '#49641D' }}>10 Deals</Text>
            </View>
          </View>

          <View style={{ width: 280, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: '#3B86FF' }}>
                View All Deals
            </Text>
            </TouchableOpacity>
          </View>

        </View>


        {/* ------------------------------3 View In A Row----------------------------------------------  */}



        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20 }}>
          <View style={styles.elevatedViewSmall}>
            <Text style={{ fontSize: 12, color: '#49641D' }}>Leads Over Call</Text>
            <Text style={{ color: '#A6003D', fontSize: 20 }}>11</Text>
          </View>

          <View style={styles.elevatedViewSmall1}>
            <Text style={{ fontSize: 12, color: '#49641D' }}>Leads Over Mail</Text>
            <Text style={{ color: '#C95E00', fontSize: 20 }}>12</Text>
          </View>

          <View style={styles.elevatedViewSmall2}>
            <Text style={{ fontSize: 12, color: '#49641D' }}>New Leads</Text>
            <Text style={{ color: '#790A96', fontSize: 20 }}>117</Text>
          </View>
        </View>



        <View style={{ alignItems: 'flex-end', paddingRight: 10 ,marginBottom:10}}>
          <TouchableOpacity>
            <Text style={{ color: '#49641D', fontSize: 12 }}>View All</Text>
          </TouchableOpacity>
        </View>



{/* -------------Big card view */}

        <View style={styles.elevatedView2}>
          <View style={{ marginBottom: 15, marginLeft: 20, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>

              <View style={styles.Rows}>

                <View style={styles.registeredName}>

                  <Avatar.Image source={require('../../src/assets/images/blue6.jpg')} size={50} />
                  <View style={{ marginLeft: 20 }}>
                    <Title style={{ color: '#49641D' }}>Afia Noor</Title>
                  </View>
                </View>

                <View>
                  <TouchableOpacity style={{ width: 300, height: 20 }}>
                    <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                  </TouchableOpacity>
                </View>
              </View>

            </View>



          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

          {/* ------------------------------third View Second Table----------------------------------------------  */}

          <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Mobile No</Text>
                <Text style={{ color: '#49641D' }}>+92 316 4335293</Text>
              </View>




            </View>

          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

            {/* ------------------------------third View third Table----------------------------------------------  */}

            <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Status - Good Lead</Text>
                <Text style={{ color: '#49641D' }}>----------------------------------</Text>
              </View>

            </View>
          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>


 {/* ------------------------------third View Forth Table----------------------------------------------  */}

 <View style={{marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Created on</Text>
                <Text style={{ color: '#49641D' }}>08/09/2020</Text>
              </View>

            </View>
          </View>
        </View>

        {/* Second table After Afia Noor table */}

        <View style={styles.elevatedView2}>
          <View style={{ marginBottom: 15, marginLeft: 20, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>

              <View style={styles.Rows}>

                <View style={styles.registeredName}>

                  <Avatar.Image source={require('../../src/assets/images/blue6.jpg')} size={50} />
                  <View style={{ marginLeft: 20 }}>
                    <Title style={{ color: '#49641D' }}>Cloud 3</Title>
                  </View>
                </View>

                <View>
                  <TouchableOpacity style={{ width: 300, height: 20 }}>
                    <Icon name="chevron-forward-outline" style={{ marginLeft: 30, fontSize: 35, color: '#e2e2e2' }}></Icon>
                  </TouchableOpacity>
                </View>
              </View>

            </View>



          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

          {/* ------------------------------third View Second Table----------------------------------------------  */}

          <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Mobile No</Text>
                <Text style={{ color: '#49641D' }}>+92 316 4335293</Text>
              </View>




            </View>

          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>

            {/* ------------------------------third View third Table----------------------------------------------  */}

            <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Status - Good Lead</Text>
                <Text style={{ color: '#49641D' }}>----------------------------------</Text>
              </View>

            </View>
          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View>


 {/* ------------------------------third View Forth Table----------------------------------------------  */}

 <View style={{marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Created on</Text>
                <Text style={{ color: '#49641D' }}>08/09/2020</Text>
              </View>

            </View>
          </View>
        </View>


</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  elevatedView: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    marginTop: 30,
    height: 200,
    width: 320,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'column',


  },

  elevatedViewSmall: {

    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    height: 46,
    width: 100,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,



  },
  elevatedViewSmall1: {

    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    height: 46,
    width: 100,
    marginLeft: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,



  },
  elevatedViewSmall2: {

    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    height: 46,
    width: 100,
    marginLeft: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,



  },

  circle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderColor: '#49641D',
    borderWidth: 2,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  elevatedView2: {

    marginBottom:30,
    height: 280,
    width: 320,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'column',


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