import React, {Component} from 'react';
import {View, Text, ToastAndroid, Image, FlatList, Dimensions} from 'react-native';

export default class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis:[{}],  
    };
  }

  fetchEmojiData = async () => {
   

    const response = await fetch(
      'https://emoji-api.com/emojis?access_key=9b5cfd5953e65d211644af41436addbc607a1569',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    const jsonData = await response
      .json()
    //   .then((json) => json.json())
      .catch((error) => console.warn('fetch error:', error.message));

    this.setState({emojis:jsonData});

  };


  _renderItem = ({ item }) => {
    return (
<View>
<Text style={{ fontSize:20}}>{item.character}</Text>
{/* <Text style={{ fontSize:20}}>{item.character}</Text> */}
    </View>

    );
  };



  render() {
    this.fetchEmojiData();

    return (
      <View>
       
        {/* <Text>`${'&#1F601;'}`</Text> */}
        {/* <Text>&#128151;</Text> */}
        {/* <Text>&#x1F601;</Text> */}

        <FlatList  
       
data={this.state.emojis} 
                    // data={[  
                    //     {key: 'Shahid Saleem'},{key: 'Fahad Yousaf'}, {key: 'Imran khan'},{key: 'Hooram Sultan'},  
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    //     {key: 'Meherma Sultan'},  {key: 'Afia Noor'},
                    // ]}  
                    horizontal={true}
                ItemSeparatorComponent={() => <View style={{margin:5}}/>}
                renderItem={this._renderItem}
                    keyExtractor={(object, index) => index}
                    
              
                    />

      </View>
    );
  }

}
