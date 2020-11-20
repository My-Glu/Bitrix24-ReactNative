import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,View, Text, StatusBar,Image, FlatList, Alert,SafeAreaView,ToastAndroid, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const afiaNoor = "https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/"
const bitrix = "https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/"

var usersList= [];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            search: '',
            data:[],
            newUsers:{},
            
        }
    }

//   componentDidMount() {

//     // this.fetchData();
//     // this.fetchNewUsers();

//   }

// https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/im.recent.get?SKIP_CHAT=N
 
fetchNewUsers= async()=> {
    // const response = await fetch("https://afianoor.bitrix24.com/rest/43/txgwylq6ihf7hca3/im.recent.get?SKIP_CHAT=N");
    const response = await fetch(afiaNoor+"user.get");
    const json = await response.json()
    // .then((response) => response.json())
     .catch((error) => console.warn("fetch error:", error))
    this.setState({newUsers: json.result});

  }


fetchData= async()=> {

    const response = await fetch(afiaNoor+"im.recent.get?SKIP_CHAT=N");
    // const response = await fetch("https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/user.get");
    const json = await response.json()
    // .then((response) => response.json())
     .catch((error) => console.warn("fetch error:", error))
    this.setState({data: json.result});

  }


  myUserList = () => {
    // this.setState({ firstName: newText })
    // for(let userObj of this.state.data.message.author_id){
        this.state.data.map((userData) => {
            // if (userData.message.author_id==7){
            if (userData.user.id==43){
                usersList.push(userData);
            }
           // console.log(usersList);
        });
 
  }


// https://b24-l9xpyr.bitrix24.com/rest/1/0cug7v3gqpxbkn26/im.user.list.get?ID=[1,2,3,4,5,6,7,8,9,10]
    updateSearch = (search) => {
        this.setState({ search });
    };

    goToUserChat = (item) => {
        Actions.userChat({id:item.id, user:item.user.name})
        // Actions.userChat({id:item.ID, user:item.NAME})
    };

    renderInner = () => (

        // ---------------------- bottom up sheeet design -------------------------------------
        <View style={styles.panel}>

            <View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:100,borderBottomStartRadius:100}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Add private Chat</Title>
                    
                </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:40,borderBottomColor:'grey',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Add public Chat</Title>
                    
                </View>
</View>


                <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                    <Text style={styles.panelButtonTitle}>Invite Employees</Text>
                </TouchableOpacity>

                <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:8}}>

                </View>


                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15,color:'grey'}}>Employees</Text>
                </View>
{/* -------------------------------flatlist ------------ */}



<FlatList  
data={this.state.newUsers} 
                    // data={[  
                    //     {key: 'Shahid Saleem'},{key: 'Fahad Yousaf'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    // ]}  
                    keyExtractor={(object, index) => index}
                    renderItem={({item}) => 
                
                <View>
 <View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>

    <Title style={{ color: 'green', }}>{item.NAME}</Title>
                    
                </View>
                </View>
                </View>
                }
    
    />




{/*               
                <View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Sohail</Title>
                    
                </View>
                </View>

<View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Ahmed</Title>
                    
                </View>
</View>

<View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Arfa</Title>
                    
                </View>
</View> */}




            </View>
            // bottomup sheet panel end 

// ------------------------- flatlist end ----------------------





            // -------------------- bottom up sheet design end --------------------
            
      );

    //   --------------------- render header ----------------------

      renderHeader = () => (

            <View style={styles.bottomHeader}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle}><Text style={{ fontSize: 13, color: 'green' }}>New Chat</Text></View>
                </View>
            </View>
      );

    //   ------------------ render header end ------------------

      bs = React.createRef();
      fall = new Animated.Value(1);

    render() {

        this.fetchData();
        this.fetchNewUsers();
        this.myUserList();
    
//  -------------------------------------- Main render -----------------------------
        // const { search} = this.state;
        return (

            <View style={styles.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[390, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />

                {/* <View>
                    <Header
                        statusBarProps={{ barStyle: 'light-content', backgroundColor: 'black' }}
                        containerStyle={{
                            height: 100,
                            borderBottomWidth: 1,
                            borderBottomColor: 'black',
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                        }}
                        leftComponent={{ icon: 'menu', color: 'green'}}

                        centerComponent={<SearchBar
                            containerStyle={styles.searchbarContainer}
                            inputContainerStyle={styles.searchbarInputContainer}
                            inputStyle={[{ fontSize: 19 }, styles.searchbarInput]}
                            placeholder ="Chat"
                            onChangeText={this.updateSearch}
                            value={search}

                        />}
                         

                    />
                </View> */}

{/*  flat list required  */}

{/* -------------------------------- item 1 --- chat friend one ------------------------- */}

<FlatList  
// data={this.state.data} 
data={usersList} 
                    // data={[  
                    //     {key: 'Shahid Saleem'},{key: 'Fahad Yousaf'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    // ]}  
                    keyExtractor={(object, index) => index}
                    renderItem={({item}) =>  

<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '5%'}} >

<TouchableOpacity 
onPress={this.goToUserChat.bind(this, item)}
>

<View style={{flexDirection: 'row' ,  justifyContent:'space-between', }}>
    <View style={{flexDirection: 'row'}}>
<Avatar.Image style={{position: 'relative'}} source={require('../assets/images/blue6.jpg')} size={50} />
                                    <View style={{ marginLeft:'5%' }}>
                                        {/* <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>{item.user.name} */}
                                        {/* <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>{this.myUserList.bind(this, item)} */}
                                        {/* <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>{this.state.data[0].user.name} */}
                                        {/* <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>{this.state.data[0].message.author_id} */}
                                        <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>{item.user.name}
                                        {/* <Text visible={false} style={{fontSize:12}}>("its You")</Text> */}
                                        </Title>
                                        <Caption style={{ fontSize:15, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>Employee </Caption>
                                    
                                    </View>
                               
                                    </View>
                                <View>
                                    <TouchableOpacity >
                                        <Caption style={{ fontWeight: 'bold', fontSize:10 }}>Wed </Caption>
                                    </TouchableOpacity>
                                    </View>
</View>
</TouchableOpacity>

</View>
                    }/>


                {/* <View style={styles.tableView}>

                    <View style={styles.rowsView}>
                        <ScrollView>
                            <View style={styles.Rows}>

                                <View style={styles.registeredName}>

                                    <Avatar.Image source={require('../assets/images/blue6.jpg')} size={60} />
                                    <View style={{ marginLeft: 10 }}>
                                        <Title style={{ color: '#49641D', fontSize:15, width: '100%', fontFamily:'segoesb', minWidth:'70%'}}>Farhan Sarwer ("its You")</Title>
                                        <Caption style={{ fontSize:15, marginTop:-5, color: 'rgba(73,100,29,0.5)'}}>Employee </Caption>
                                    </View>
                                </View>
<View style={{minWidth:20}}></View>
                                <View>
                                    <TouchableOpacity style={{ width: '100%' }}>
                                        <Caption style={{ fontWeight: 'bold', fontSize:10 }}>Wed </Caption>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View> */}

                {/* --------------------------------------------- item 1 end --------------------------------------- */}
               
                {/* --------------------------------------------- item 2 --------------------------------------- */}
               
    
                {/* --------------------------------------------- item 2 end --------------------------------------- */}
            
            
            
                <View style={{ top: deviceHeight*0.7, left: deviceWidth*0.8,alignItems:'flex-end', position: 'absolute'}}>
                    <TouchableOpacity delayPressIn={1} onPress={() => this.bs.current.snapTo(0)}>
                        <Image source={require('../assets/images/plusicon.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>

                </View>

            </View>
           
        );


    }
}

const styles = StyleSheet.create({
                container: {
                flex: 1,
    },
    SearchBar: {
                alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    searchbarContainer: {

                borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 33,
        
    },
    searchbarInputContainer: {
                backgroundColor: ('white'),

        height: 50,
        width: 280,
    },



    tableView: {
        width: '100%',
        height: 200,
        marginLeft: 7,
        marginTop: 30,
    },



    rowsView: {
                height: 300,
        width: '100%',

    },
    Rows: {
                flexDirection: 'row',
        marginBottom: 5,
      
        width: '100%'
    },
    registeredName: {
                flexDirection: 'row',
        height: 100,
        width: '85%',
    },
    panel: {
        
                padding: 10,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,


      },
      bottomHeader: {
                backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 3,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
                alignItems: 'center',
      },
      panelHandle: {
                width: 70,
        height: 8,
        marginBottom: 30,
      },
      panelTitle: {
                fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
                fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
                padding: 13,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        marginVertical: 7,
        marginBottom:60
      },
      panelButtonTitle: {
                fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },

      namesInputContainer: {
                height: 10,
        width: 200
      },
      namesInput: {
                color: 'black',
      },
      namesLabel: {
                color: 'black'
      },
});