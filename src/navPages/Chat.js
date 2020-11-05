import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,View, Text, StatusBar,Image, FlatList, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import {Header,SearchBar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            search: '',
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    goToUserChat = () => {
        Actions.userChat()
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
</View>

            </View>

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
//  -------------------------------------- Main render -----------------------------
        const { search} = this.state;
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


<View style={{marginLeft:'5%',marginRight:'5%', marginTop: '5%'}} >
<TouchableOpacity 
onPress={this.goToUserChat}
>
<View style={{flexDirection: 'row' ,  justifyContent:'space-between', }}>
    <View style={{flexDirection: 'row'}}>
<Avatar.Image style={{position: 'relative'}} source={require('../assets/images/blue6.jpg')} size={50} />
                                    <View style={{ marginLeft:'5%' }}>
                                        <Title style={{ color: '#49641D', fontSize:14,  fontFamily:'segoesb',}}>Farhan Sarwer<Text style={{fontSize:12}}>("its You")</Text></Title>
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