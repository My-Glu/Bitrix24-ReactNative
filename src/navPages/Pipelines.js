import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Actions } from 'react-native-router-flux';

export default class Pipelines extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToAllLeads = () => {
    Actions.allLeads()
 }

 
 goToViewLead = () => {
  Actions.viewLeads()
}


  render() {
    return (
      <View style={styles.container}>

<ScrollView>


{/* ------------------------------big card view ----------------------------------------------  */}

<View style={styles.bigCardView}>
         
         {/* ------------------------------ row one  ----------------------------------------------  */}

         <View style={{flexDirection: 'row',  justifyContent:'center', marginLeft:'5%', }}>
       
         <View style={{ marginVertical: '5%', width: '35%'}}>
              <Text  numberOfLines={1} style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>All Deals</Text>
              <Text style={{  fontSize:  RFValue(20) ,color: '#000000' ,fontFamily:'segoe-ui'}}><Text>Rs.</Text>277,112</Text>
              <Text numberOfLines={1} style={{ width: 150, color: '#49641D' }}>15 Deals</Text>
            </View>
            <View  style={{ width:'20%'}}></View>
            <View style={{ marginVertical: '5%',  width: '35%'}}>
              <Text numberOfLines={1} style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>Won Deals</Text>
              <Text style={{  fontSize:  RFValue(20) ,color: '#4EE15C',fontFamily:'segoe-ui'}}><Text>Rs.</Text>57,112</Text>
              <Text numberOfLines={1} style={{ color: '#49641D' }}>22 Deals</Text>
            </View>

          </View>

        
    {/* ------------------------------Horizontal line -------------------------------------- */}
       <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>
  
      {/* ------------------------------second row ----------------------------------------------  */}

          <View style={{flexDirection: 'row',  justifyContent:'center', marginLeft:'5%'}}>
       
       <View style={{ marginVertical: '5%',  width: '35%'}}>
            <Text numberOfLines={1} style={{  color: '#49641D',fontFamily:'segoe-ui', fontSize:RFValue(12) }}>In Process Deals</Text>
            <Text  style={{  fontSize:  RFValue(20) ,color: '#C3BD00',fontFamily:'segoe-ui'}}><Text>Rs.</Text>27,112</Text>
            <Text numberOfLines={1} style={{ width: 150, color: '#49641D' }}>4 Deals</Text>
          </View>
          <View  style={{ width:'20%'}}></View>
          <View style={{ marginVertical: '5%',  width: '35%'}}>
            <Text numberOfLines={1} style={{  color: '#49641D',fontFamily:'segoe-ui',fontSize:RFValue(12) }}>Lost Deals</Text>
            <Text  style={{  fontSize:  RFValue(20) ,color: '#EB3232',fontFamily:'segoe-ui'}}><Text>Rs.</Text>117,112</Text>
            <Text numberOfLines={1} style={{ color: '#49641D' }}>10 Deals</Text>
          </View>
          
        </View>

               {/* ------------------------------Horizontal line -------------------------------------- */}
<View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:'5%'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />

                </View>

          <View style={{ alignItems: 'center' , marginVertical: 10 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: RFValue(11), color: '#3B86FF',fontFamily:'segoe-ui' }}>
                View All Deals
            </Text>
            </TouchableOpacity>
          </View>

        </View>


        {/* ------------------------------First View First Table----------------------------------------------  */}
{/* 
        <View style={styles.elevatedView}>
          <View style={{  marginLeft: 50, marginTop: 3 , }}>
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

          {/* <View style={{ marginBottom: 10, marginLeft: 50 }}>
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

        </View>  */}


        {/* ------------------------------3 View In A Row----------------------------------------------  */}

   {/* -------------------- 3 card views in row ------------------------------ */}
   <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginTop: -10, marginHorizontal:'5%' }}>
          <View style={styles.cardView}>
            <Text numberOfLines={1} style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>Leads Over Call</Text>
            <Text style={{ color: '#A6003D', fontSize: RFValue(20), fontFamily:'segoe-ui' }}>11</Text>
          </View>
         <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text numberOfLines={1} style={{ fontSize: RFValue(12), color: '#49641D' ,fontFamily:'segoe-ui'}}>Leads Over Mail</Text>
            <Text style={{ color: '#C95E00', fontSize:  RFValue(20) , fontFamily:'segoe-ui'}}>12</Text>
          </View>
          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text numberOfLines={1} style={{ fontSize: RFValue(12), color: '#49641D', fontFamily:'segoe-ui' }}>New Leads</Text>
            <Text style={{ color: '#790A96', fontSize:  RFValue(20), fontFamily:'segoe-ui' }}>117</Text>
          </View>

      </View>


        {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20 , marginHorizontal:'5%'}}>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 12, color: '#49641D' , textAlign: 'center'}}>Leads Over Call</Text>
            <Text style={{ color: '#A6003D', fontSize: 20 }}>11</Text>
          </View>
          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 12, color: '#49641D', textAlign:'center' }}>Leads Over Mail</Text>
            <Text style={{ color: '#C95E00', fontSize: 20 }}>12</Text>
          </View>
          <View  style={{ width:'2%'}}></View>
          <View style={styles.cardView}>
            <Text style={{ fontSize: 12, color: '#49641D' , textAlign:'center'}}>New Leads</Text>
            <Text style={{ color: '#790A96', fontSize: 20 }}>117</Text>
          </View>
        </View>
 */}


        <View style={{ alignItems: 'flex-end', paddingRight: 10 ,marginBottom:10}}>
          <TouchableOpacity
          onPress={this.goToAllLeads}
          >
            <Text style={{ color: '#49641D', fontSize: 12 , fontFamily:'segoe-ui'}}>View All</Text>
          </TouchableOpacity>
        </View>



{/* -------------Big card view 1  */}
        
<View style={styles.bigCardViewX}>
                 
                 <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
                 <TouchableOpacity 
                          onPress={this.goToViewLead}
                         >
                   <View style={{ flexDirection: 'row',  }}>
       
                     <View style={styles.RowsX}>
       
                       <View style={styles.registeredNameX}>
       
                         <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={40} />
                         <View style={{ marginLeft: -50 }}>
                           <Title style={{ color: '#49641D',fontFamily:'segoe-ui',fontSize: 14, fontFamily:'segoe-ui'}}>Flatteys</Title>
                         </View>

                         <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',alignSelf: 'center', fontSize: 25, color: '#e2e2e2' }}></Icon>
                    
                       </View>
       
                     </View>
       
                   </View>

                   </TouchableOpacity>
             </View>
       
                 <View style={{ borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                 </View>
       
                      {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>
               
       
        {/* ------------------------------second row----------------------------------------------  */}
       
        <View style={{ marginBottom: 15, marginLeft: '5%' }}>
                   <View style={{ flexDirection: 'row',}}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16, fontFamily:'segoe-ui' }}>Mobile No</Text>
                       <Text style={{ color: '#49641D', fontFamily:'segoe-ui' }}>+92 306 7860123</Text>
                     </View>
       
                   </View>
       
                 </View>
       
               {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0',  width:'100%', marginBottom: 10 }}/>

                </View>
                   {/* ------------------------------third row----------------------------------------------  */}
       
                   <View style={{ marginBottom: 15, marginLeft: '5%' }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 , fontFamily:'segoe-ui'}}>Status- <Text style={{ color: '#49641D', fontFamily:'segoe-ui' }}>Good Lead</Text></Text>
                       <Text style={{ color: '#49641D' }}>-----------------------------</Text>
                     </View>
       
                   </View>
                 </View>
       
                   {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>
               
              
        {/* ------------------------------fourth row----------------------------------------------  */}
       
        <View style={{marginLeft:'5%', marginBottom: '5%' }}>
                   <View style={{ flexDirection: 'row',  }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 , fontFamily:'segoe-ui'}}>Created on</Text>
                       <Text style={{ color: '#49641D', fontFamily:'segoe-ui' }}>08/09/2020</Text>
                     </View>
       
                   </View>
                    </View>
                    </View>

       {/* ------------------------------------------- */}

{/* -------------Big card view 2  */}
         
<View style={styles.bigCardViewX}>
                 
                 <View style={{ marginBottom: 15, marginLeft: '5%', marginTop: '5%' }}>
                 <TouchableOpacity 
                         onPress={this.goToViewLead}
                         >
                   <View style={{ flexDirection: 'row',  }}>
       
                     <View style={styles.RowsX}>
       
                       <View style={styles.registeredNameX}>
       
                         <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={40} />
                         <View style={{ marginLeft: -50 }}>
                           <Title style={{ color: '#49641D',fontFamily:'segoe-ui',fontSize: 14, fontFamily:'segoe-ui'}}>Cloud3</Title>
                         </View>

                         <Icon name="chevron-forward-outline" style={{ marginLeft: '20%',alignSelf: 'center', fontSize: 25, color: '#e2e2e2' }}></Icon>
                    
                       </View>
       
                     </View>
       
                   </View>

                   </TouchableOpacity>
             </View>
       
                 <View style={{ borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                 </View>
       
                      {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>
               
       
        {/* ------------------------------second row----------------------------------------------  */}
       
        <View style={{ marginBottom: 15, marginLeft: '5%' }}>
                   <View style={{ flexDirection: 'row',}}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color:'#C0C0C0', fontSize: 16, fontFamily:'segoe-ui' }}>Mobile No</Text>
                       <Text style={{ color: '#49641D' }}>+92 306 7860123</Text>
                     </View>
       
                   </View>
       
                 </View>
       
               {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0',  width:'100%', marginBottom: 10 }}/>

                </View>
                   {/* ------------------------------third row----------------------------------------------  */}
       
                   <View style={{ marginBottom: 15, marginLeft: '5%' }}>
                   <View style={{ flexDirection: 'row', width: 270 }}>
       
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 , fontFamily:'segoe-ui'}}>Status- <Text style={{ color: '#49641D' }}>Good Lead</Text></Text>
                       <Text style={{ color: '#49641D' }}>-----------------------------</Text>
                     </View>
       
                   </View>
                 </View>
       
                   {/* ----------------------------horizontal line-------------------------------------- */}
          <View style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: '5%',}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#F0F0F0', width:'100%', marginBottom: 10 }}/>

                </View>
               
              
        {/* ------------------------------fourth row----------------------------------------------  */}
       
        <View style={{marginLeft:'5%', marginBottom: '5%' }}>
                   <View style={{ flexDirection: 'row',  }}>
       
                     <View>
                       <Text style={{ marginBottom: 5, color: '#C0C0C0', fontSize: 16 , fontFamily:'segoe-ui'}}>Created on</Text>
                       <Text style={{ color: '#49641D', fontFamily:'segoe-ui' }}>08/09/2020</Text>
                     </View>
       
                   </View>
                    </View>
                    </View>


       {/* ------------------------------------------- */}

{/* -------------Big card view */}
{/* 
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
          </View> */}

          {/* ------------------------------third View Second Table----------------------------------------------  */}

          {/* <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Mobile No</Text>
                <Text style={{ color: '#49641D' }}>+92 316 4335293</Text>
              </View>

            </View>

          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View> */}

            {/* ------------------------------third View third Table----------------------------------------------  */}
{/* 
            <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Status - Good Lead</Text>
                <Text style={{ color: '#49641D' }}>----------------------------------</Text>
              </View>

            </View>
          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View> */}


 {/* ------------------------------third View Forth Table----------------------------------------------  */}
{/* 
 <View style={{marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Created on</Text>
                <Text style={{ color: '#49641D' }}>08/09/2020</Text>
              </View>

            </View>
          </View>
        </View> */}

        {/* Second table After Afia Noor table */}

        {/* <View style={styles.elevatedView2}>
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
          </View> */}

          {/* ------------------------------third View Second Table----------------------------------------------  */}

          {/* <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Mobile No</Text>
                <Text style={{ color: '#49641D' }}>+92 316 4335293</Text>
              </View>

            </View>

          </View> */}
{/* ----------------------------horizontal line-------------------------------------- */}
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 20, width:'100%'}}/>

                </View> */}
            {/* ------------------------------third View third Table----------------------------------------------  */}

            {/* <View style={{ marginBottom: 15, marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Status - Good Lead</Text>
                <Text style={{ color: '#49641D' }}>----------------------------------</Text>
              </View>

            </View>
          </View>

          <View style={{ width: 320, borderBottomColor: '#00000029', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
          </View> */}


 {/* ------------------------------third View Forth Table----------------------------------------------  */}

 {/* <View style={{marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', width: 270 }}>


              <View>
                <Text style={{ marginBottom: 5, color: '#49641D', fontSize: 16 }}>Created on</Text>
                <Text style={{ color: '#49641D' }}>08/09/2020</Text>
              </View>

            </View>
          </View>
        </View>
 */}

</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigCardView: {
    flex: 1,
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    backgroundColor: 'white',
    marginTop: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    width: '90%',
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    flexDirection: 'column',
   },
   bigCardViewX: {
    marginBottom:'5%',
    marginTop:'5%',        
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'column',
   },
   registeredNameX: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width:'100%'      },
  RowsX: {
    
    flexDirection: 'row',
    width: '90%'
  },

  elevatedView: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    marginTop: 30,
    paddingTop:20,
    height: 250,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'column',


  },

  cardView: {
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    paddingVertical: '1%',
    height: '60%',
    width: '32%',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },


  elevatedViewSmall: {

    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    height: '60%',
    width: '40%',
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