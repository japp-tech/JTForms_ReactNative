import React, { Dimensions, TouchableOpacity } from 'react-native';

const OPTIONS = ['red ','blue','orange','yellow']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker =(props)=>{

    return(
        <TouchableOpacity 
        onPress={() => props.changeModalVisibility(false)}>

        </TouchableOpacity>
    )

}
export default ModalPicker;