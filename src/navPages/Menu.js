import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions,TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  goToCalender = () => {
    Actions.calendar()
 }

  goToMyDrive = () => {
    Actions.myDrive()
 }


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>

          <View style={{ paddingBottom:20, marginBottom: 40, marginTop: 30, borderBottomColor: 'grey', borderBottomWidth: 1 }}>

            <View>
              <Text style={{ color: '#0A1F3E', fontSize: 18, marginLeft: 22 }}>
                Prefrences
  </Text>

{/* -------------------row 1---------------------- */}
              <View style={{ marginBottom: 12, marginHorizontal: '5%', marginTop: 8 , }}>
               
                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/workflow.png')} size={30} style={{ marginTop: 10, backgroundColor:'#49641D' }} />
                     
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>Work Flows</Title>
                      </View>

                    </View>

                    <View>
                      <TouchableOpacity style={{  height: 40, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>

                  </View>

              </View>

               {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* -------------------row 1 end---------------------- */}

           {/* -------------------row 2---------------------- */}
           <View style={{ marginBottom: 12, marginHorizontal: '5%', marginTop: 8 , }}>
               <TouchableOpacity onPress={this.goToCalender}
               >
                  <View style={styles.Rows}>

                    <View style={styles.registeredName}>

                      <Avatar.Image source={require('../../src/assets/images/calendar.png')} size={30} style={{ marginTop: 10, backgroundColor:'#49641D' }} />
                     
                      <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: '#49641D' }}>Calendar</Title>
                      </View>

                    </View>

                    <View>
                      <TouchableOpacity style={{  height: 40, paddingTop: 10 }}>
                        <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
                      </TouchableOpacity>
                    </View>

                  </View>
                  </TouchableOpacity>
              </View>

               {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
{/* -------------------row 2 end---------------------- */}

              {/* ------------------------------row 3 ----------------------------------------------  */}

              <View style={{ marginBottom: 12, marginHorizontal: '5%', marginTop: 8 , }}>
              <TouchableOpacity onPress={this.goToMyDrive}
               >
               <View style={styles.Rows}>

                 <View style={styles.registeredName}>

                   <Image source={require('../../src/assets/images/mydrive.png')} size={30} style={{ marginTop: 10,height:25, width:30 , backgroundColor: '#49641D' }} />
                  
                   <View style={{ marginLeft: 20 }}>
                     <Title style={{ color: '#49641D' }}>My Drive</Title>
                   </View>

                 </View>

                 <View>
                   <TouchableOpacity style={{  height: 40, paddingTop: 10 }}>
                     <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
                   </TouchableOpacity>
                 </View>

               </View>
</TouchableOpacity>
           </View>

            {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>

              {/* ------------------------------row 3 end----------------------------------------------  */}
              {/* ------------------------------row 3 end----------------------------------------------  */}

              <View style={{ marginBottom: 12, marginHorizontal: '5%', marginTop: 8 , }}>
               
               <View style={styles.Rows}>

                 <View style={styles.registeredName}>

                 <Image source={require('../../src/assets/images/mydrive.png')} size={30} style={{ marginTop: 10, height:25, width:30 ,backgroundColor: '#49641D' }} />
                  
                   <View style={{ marginLeft: 20 }}>
                     <Title style={{ color: '#49641D' }}>Shared Drive</Title>
                   </View>

                 </View>

                 <View>
                   <TouchableOpacity style={{  height: 40, paddingTop: 10 }}>
                     <Icon name="chevron-forward-outline" style={{  fontSize: 35, color: '#e2e2e2' }}></Icon>
                   </TouchableOpacity>
                 </View>

               </View>

           </View>

            {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>

            </View>


          </View>

          {/* --------------------------Second View --------------------------   */}

          <View style={{ paddingBottom:20, borderTopColor: 'grey', borderTopWidth: 1 }}>

            <View>
              <Text style={{ color: '#D3D3D3', fontSize: 18, marginLeft: 22, marginTop: 8, marginBottom: 12 }}>
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

            {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>


            {/* ------------------------------third View Second Table----------------------------------------------  */}

            <View style={{ marginBottom: 10, marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>

                <View>
                  <Title style={{ color: '#49641D' }}>Chats</Title>
                </View>
              </View>
            </View>

            {/* ------------------------------Horizontal line -------------------------------------- */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>

            {/* ------------------------------third View third Table----------------------------------------------  */}

            <View style={{ marginBottom: 10, marginLeft: 28 }}>
              <View style={{ flexDirection: 'row',  }}>

                <View>
                  <Title style={{ color: '#49641D' }}>Bottom Menu</Title>
                </View>
              </View>


            </View>

            {/* ------------------------------Horizontal line -------------------------------------- */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>


            {/* ------------------------------third View Forth Table----------------------------------------------  */}

            <View style={{  marginBottom: 10,marginLeft: 28 }}>
              <View style={{ flexDirection: 'row', width: 270 }}>

                <View>
                  <Title style={{ color: '#49641D' }}>Other Settings</Title>
                </View>
              </View>

            </View>
            
            {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'8%', }}>
               <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

             </View>


          </View>

        </View>

      </View>

     </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registeredName: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    
  },
});