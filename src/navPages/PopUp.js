import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import BottomPopUp from './BottomPopUp';

const PopUp = () => {

    let popupRef = React.createRef();

const onShowPopup = () =>{ popupRef.show()}
const onClosePopup = () =>{ popupRef.close()}

    return (
        <>

<SafeAreaView style={styles.container}>
<TouchableWithoutFeedback  onPress={onShowPopup}>

<Text style={styles.txtSize}>SHow popup</Text>

</TouchableWithoutFeedback>
<BottomPopUp
title="Menu"
ref={(target) => popupRef = target}
onTouchOutside={onClosePopup}
/>
</SafeAreaView>

</>

    );

}

export default PopUp;

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtSize: {
         fontSize:20
    }

})


// export default class PopUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text>PopUp </Text>
//       </View>
//     );
//   }
// }
