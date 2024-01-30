import { } from 'react';
import { TextInput, View, Text } from 'react-native';



const ErrorValidation = () => {
    if (!inputText.trim() && item.objKey === 'vehcleTempReplacement') {
        setRegistrationNumberError(true);
    }
    else if (!inputText.trim() && item.objKey === 'tentativeLngthOfClngDone') {
        setTentativeError(true);
    }
    else if (!inputText.trim() && item.objKey === 'noOfManholesOpenedCleaned') {
        setmanholesError(true);
    }
    else if (!inputText.trim() && item.objKey === 'noOfLabourEngaged') {
        setLaboursError(true);
    }
    return (
        <View>

            {item.type === 'TitleInfoTextBox' && (
                <View style={{ marginTop: 10 }} >
                    <Text style={{ flex: 1 }}>{item.name}</Text>

                    <Text style={{ flex: 1, marginBottom: 10 }}>{item.subTitle}</Text>

                    <View>
                        <Text style={{ flex: 1, marginTop: 20, color: 'D3D3D3' }}>{item.label}</Text>
                        <TextInput
                            style={styles.input}
                            // value={inputText}
                            onChangeText={(text) => handleInputChange(text)}
                            onPressIn={() => getObjKeyFromTxt(item.objKey)}
                            placeholder={item.label} />
                    </View>
                    <View style={{ height: 1, backgroundColor: "gray" }}></View>
                    {registrationNumbererror ?
                        <Text style={styles.errorlableText}>
                            Please Enter {item.label}. If above Vehicle is a temporary replacement, please enter the REGULAR VEHICLE NUMBER here (If not, ignore).
                        </Text> : null
                    }
                    {labourerror ?
                        <Text style={styles.errorlableText}>
                            Please Enter {item.label}. No.of Labour.
                        </Text> : null
                    }






                </View>
            )}
        </View>
    )
}
export default ErrorValidation;





