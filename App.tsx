
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, Modal, StatusBar, TextInput, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import DatePickerModal from 'react-native-modal-datetime-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {


  const [childarray, setChildarrayData] = useState([]);
  const [naanyathaData, setNaanyathaData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState();
  const [dropDowndata, setDropDownData] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [dropDownName, setDropDownName] = useState("");
  const [dropDownHeight, setDropDownHeight] = useState(70);
  const [inputText, setInputText] = useState('');

  const [dropDownList, setDropdownList] = useState([]);
  const [selectItem, setSelectedItem] = useState('');
  const [selectedValue, setSelectedValue] = useState("")

  const [isClicked, setIsClicked] = useState(false);
  const [branchdropDown, setBranchDropDown] = useState(false);
  const [applicantDropDown, setApplicantDropDown] = useState(false);
  const [coapplicantName, setCoapplicantName] = useState(false);
  const [oraganization, setOraganization] = useState(false);
  const [phoneNo, setPhoneNo] = useState(false)
  const [status1, setStatus1] = useState(false);
  const [verificationDone, setVerificationDone] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [verificationDone2, setVerificationDone2] = useState(false)

  const [registrationNumbererror, setRegistrationNumberError] = useState(false);
  const [aboveVehiclerror, setAboveVehiclerror] = useState(false);
  const [tokenerror, setTokenError] = useState(false);
  const [locationerror, setLocationError] = useState(false);
  const [tentativeerror, setTentativeError] = useState(false);
  const [manholeserror, setmanholesError] = useState(false);
  const [labourerror, setLaboursError] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});


  // Calendar view 
  const [date, setDate] = useState(new Date())
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateDisplay, setDateDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  let index = -1


  useEffect(() => {
    FormsAPI()
    // getData
  }, [])


  const FormsAPI = async () => {
    const customData = require('/Users/mounikathota/Documents/React-Native/FormsProject/form.json');
    const naanyathaData = require('/Users/mounikathota/Documents/React-Native/FormsProject/naanyatha_form.json');

    setChildarrayData(customData.form.sections)


    setNaanyathaData(naanyathaData)
    //  setDropDownList(customData.form.sections[0].childList)
    setDropdownList(customData.form.sections[0].childList)



    // try {
    //   const url = 'https://2315-157-48-227-202.ngrok-free.app/user/getApplicant/1';

    //   const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBqYXBwdGVjaC5jb20iLCJpYXQiOjE3MDU4OTg0NTAsImV4cCI6MTcwNTkyNzI1MH0.dmAekySiO_69Oh1eCRiT5SzD_C_xdYFJrO-Aj0ZTqT8',
    //   };

    //   const response = await fetch(url, {
    //     method: 'GET',
    //     headers: headers,
    //   });

    //   if (!response.ok) {

    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log(data, "MOUNI");
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const getData = async () => {
    let accessToken = await AsyncStorage.getItem('AccessToken');
    // setAsyncData(accessToken)

  }
  const removeData = async () => {
    await AsyncStorage.removeItem('')

  }

  const selectedradiobutton = (props) => {
    // console.warn(props.type)
    setSelectedRadio(props.typeId)
  }



  const handleOptionSelection = (option) => {
    // Implement your logic for handling option selection here
    console.log('Selected option:', option);

  };


  const toggleDropDown = (items) => {

    console.warn(items.objKey, "123")
    // console.warn("123")
    setIsDropDownOpen(!isDropDownOpen);

    // if (items.objKey === "circle") {
    //   setDropDownList(customData.dropdownDef.circleList.options)
    // } else if (items.objKey === "division") {
    //   setDropDownList(customData.dropdownDef.divisionList.options)
    // } else if (items.objKey === "subDivision") {
    //   setDropDownList(customData.dropdownDef.subDivisionList.options)
    // } else if (items.objKey === "section") {
    //   setDropDownList(customData.dropdownDef.sectionList.options)
    // } else if (items.objKey === "vehcleRegNum") {
    //   setDropDownList(customData.dropdownDef.vehicleList.options)
    // }

    setDropDownName(items.name)
    for (let i = 0; i < childarray.length; i++) {

      if (dropDownName == childarray[i].name) {
        setDropDownHeight(160)
      } else {
        setDropDownHeight(70)
      }

    }

  };


  const dropdownDataList = (objKey) => {
    // console.warn("i am calling")

    if (objKey === 'clientName') {
      setDropdownList(naanyathaData.dropdownDef.circleList.options)
      setIsClicked(!isClicked);
      index = 0;


    } else if (objKey === 'branch') {
      setDropdownList(naanyathaData.dropdownDef.divisionList.options)
      console.warn(naanyathaData.dropdownDef.divisionList.options)
      setIsClicked(!branchdropDown)
      index = 1;



    } else if (objKey === 'applicantName') {
      setDropdownList(naanyathaData.dropdownDef.subDivisionList.options)
      setIsClicked(!applicantDropDown);
      index = 2;


    } else if (objKey === 'coApplName') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!coapplicantName)


    } else if (objKey === 'organization') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!oraganization)

    } else if (objKey === 'phoneNo') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!phoneNo)

    } else if (objKey === 'status1') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!status1)

    } else if (objKey === 'verificationDone1') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!verificationDone)

    } else if (objKey === 'status2') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!status2);

    } else if (objKey === 'verificationDone2') {
      setDropdownList(naanyathaData.dropdownDef.sectionList.options)
      setIsClicked(!verificationDone2);

    }

  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateDisplay(true);
    saveSelectedDate(currentDate);
    setOpenCalendar(false)

  };

  const saveSelectedDate = (selectedDate) => {
    console.log('Selected date:', selectedDate);
  };

  const showMode = (currentmode) => {
    setShow(true);
    setMode(currentmode);
  };

  const showDatepicker = () => {
    // console.warn("Mounika")
    showMode('date');
    setOpenCalendar(!openCalendar)
  };

  const handleInputChange = (text, objKey) => {
    // console.warn(text, "L")
    // setInputText(text);
    // console.warn('kkkkk')

    if (objKey === 'vehcleTempReplacement') {
      setRegistrationNumberError(!text.trim());
    } else if (objKey === 'tentativeLngthOfClngDone') {
      setTentativeError(!text.trim());
    } else if (objKey === 'noOfManholesOpenedCleaned') {
      setmanholesError(!text.trim());
    } else if (objKey === 'noOfLabourEngaged') {
      setLaboursError(!text.trim());
    }

    // if (text == '') {
    //   setRegistrationNumberError(true)
    //   return

    // } else {
    //   setRegistrationNumberError(false)
    // }
    // if (text == '') {
    //   setTentativeError(true)
    //   return


    // } else {
    //   setTentativeError(false)


    // }

    // if (text == '') {
    //   setmanholesError(true)
    //   return
    // } else {
    //   setmanholesError(false)
    // }
    // if (text == '') {

    //   setLaboursError(true)
    //   return

    // } else {
    //   setLaboursError(false)
    // }
    // setInputText(text)
  };
  // const handleText = (text, objKey) => {
  //   if (objKey === 'mccCmplntToken') {
  //     setTokenError(!text.trim());
  //   } else if (objKey === 'locOfWrk') {
  //     setLocationError(!text.trim());

  //   }

  // }

  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => {
      console.warn(key)
      dropdownDataList(key)
      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  };
  const handleText = (text) => {

  }


  const getObjKeyFromTxt = (objKey) => {
    console.warn(objKey, "M")

  }
  // const onsearch =()=>{
  //   let tempData = data.filter(item =>{
  //     return.item.sections.toLowerCase().indexOf(txt.toLowerCase())>-1


  //   });
  //   setData(tempData);

  // }
  const dataDisplay = () => {
    setData(data);

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={styles.container1}>
        <View style={styles.header}>
          <StatusBar
            backgroundColor={"black"}
            barStyle="default"
            hidden={false}
          />

        </View>
        {childarray.map(({ name, childList }) => (
          <View style={styles.section} key={name}>
            <View style={styles.sectionheader}>
              <Text style={styles.sectionheadertext}>{name}</Text>
            </View>

            <View style={styles.sectionbody}>
              {childList.map(({ name, code, objKey, type }, index) => (
                <View
                  style={[styles.rowwrapper,
                  index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={objKey}>
                  <TouchableOpacity
                    onPress={() => {
                      // handel onPress
                    }}>

                    {type === 'DateTime' && (
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <View style={{ height: 50 }}>
                            {
                              dateDisplay ? <Text style={{ flex: 1, color: 'black', fontSize: 12 }}>{name}</Text> : null
                            }
                            <Text style={{ flex: 1 }}>{!dateDisplay ? name : date.toLocaleString().split(",")[0]}</Text>
                          </View>
                          <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => showDatepicker()}>
                            <Image
                              source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/calendar.png')}
                              style={{ width: 25, height: 25, marginLeft: 10 }}
                            />
                            {
                              openCalendar ? <DateTimePicker

                                testID="dateTimePicker"
                                value={new Date()}
                                mode={'date'}
                                is24Hour={true}
                                onChange={onChange}
                              /> : null
                            }
                          </TouchableOpacity>

                        </View>
                        <View style={{ height: 1, backgroundColor: "gray", marginTop: 6 }}></View>

                      </View>
                    )}

                    {/* {type === 'TextBox' && (
                      <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <TextInput
                          style={styles.input}
                          onChangeText={(text) => handleText(text)}
                          placeholder={name}

                        />
                        <TouchableOpacity style={styles.dropownSelector}
                          // onPress={() => {
                          //   setIsClicked(!isClicked)
                          // }}
                          onPress={() => [dropdownDataList(objKey), console.warn(index, 'l')]}
                        >

                          {
                            isClicked ? (
                              <Image
                                source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/uparrow.png')}

                                style={{ width: 25, height: 25, marginLeft: 10 }}
                              />
                            ) : (
                              <Image
                                source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/drop_downarrow.png')}
                                style={{ width: 25, height: 25, marginLeft: 10 }}
                              />
                            )
                          }
                        </TouchableOpacity> */}

                    {type === 'TextBox' && (
                      <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <TextInput
                          style={styles.input}
                          onChangeText={(text) => handleText(text)}
                          defaultValue={selectedValue}
                          placeholder={name}
                        />
                        <TouchableOpacity
                          style={styles.dropownSelector}
                          onPress={() => toggleDropdown(objKey)}
                        >
                          {
                            dropdownStates[objKey] ? (
                              <Image
                                source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/uparrow.png')}
                                style={{ width: 25, height: 25, marginLeft: 10 }}
                              />
                            ) : (
                              <Image
                                source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/drop_downarrow.png')}
                                style={{ width: 25, height: 25, marginLeft: 10 }}
                              />
                            )
                          }
                        </TouchableOpacity>

                        <Modal
                          visible={isClicked}
                          animationType="slide"
                          transparent={true}
                          onRequestClose={() => {
                            setIsClicked(false);
                          }}
                        >
                          <View style={styles.centerview}>
                            <View style={styles.modalView}>
                              <FlatList
                                data={dropDownList}
                                renderItem={({ item }) => (
                                  <TouchableOpacity onPress={() => {
                                    setSelectedValue(item.type); // Save the selected value
                                    setIsClicked(false); // Close the modal
                                  }}>
                                    <Text>{item.type}</Text>
                                  </TouchableOpacity>
                                )}
                              />
                              <TouchableOpacity onPress={() => setIsClicked(false)}>
                              
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    )}
                    {/* {selectedValue && <Text> {selectedValue}</Text>} */}

                    {type === 'TextArea' && (
                      <View style={{ marginTop: 20 }}>
                        <View style={{ marginTop: 10 }}>
                          <Text style={{ fontSize: 12, color: 'black', }}>{name}</Text>
                        </View>

                        <TextInput
                          style={{ padding: 10, margin: 10, height: 100, backgroundColor: '#fff', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}
                          placeholder="Hello"
                          numberOfLines={4}
                          multiline={true}
                        />
                      </View>
                    )}
                    {type === 'SIGN' &&(
                      <View style ={{marginTop:20}}>
                        <View >
                        <Text>Image</Text>

                        </View>
                        <TextInput
                          style={{ padding: 10, margin: 10, height: 100, backgroundColor: '#fff', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}
                          placeholder="Uploading Signature"
                         
                          multiline={true}
                        />
                        
                      </View>

                    

                   )}


                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  )

  // return (
  //   <ScrollView>
  //     <View style={{ flex: 1, marginTop: 50, margin: 20, }}>
  //       <FlatList
  //         data={childarray}
  //         renderItem={({ item }) => (
  //           <View >
  //             <View >
  //               {item.type === 'DropDown' && (
  //                 <View style={{ height: dropDownHeight }}>
  //                   <View style={{ flexDirection: 'row' }}>
  //                     <Text style={{ flex: 1 }}>{item.name}</Text>
  //                     <TouchableOpacity onPress={() => toggleDropDown(item)}>
  //                       <Image
  //                         source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/drop_downarrow.png')}
  //                         style={{ width: 25, height: 25, marginLeft: 10 }}
  //                       />
  //                     </TouchableOpacity>
  //                   </View>
  //                   <View style={{ height: 1, backgroundColor: 'gray', marginTop: 6 }}></View>

  //                   {dropDownName === item.name && (

  //                     !isDropDownOpen ? <View>
  //                       <FlatList
  //                         data={dropDownList}
  //                         renderItem={({ item: option }) => (
  //                           <TouchableOpacity onPress={() => handleOptionSelection(option)}>
  //                             <Text>{option.type}</Text>
  //                           </TouchableOpacity>
  //                         )}
  //                       />
  //                       {/* <Modal
  //                        animationType='slide'
  //                           transparent={true} 
  //                             visible={isModalVisible}
  //                             nRequestClose ={() =>changeModalVisibility(false)}  
  //                             >
  //                               <View style ={{styles.centerView}}>
  //                               <View style ={styles.modalView}>

  //                           <TouchableOpacity onPress={() => handleOptionSelection(option)}>

  //                             <View style={styles.wrapper}>
  //                               <View style={styles.radioCircle}></View>
  //                               <Text>{option.type}</Text>
  //                             </View>
  //                           </TouchableOpacity>
  //                           </View>
  //                           </View>  

  //                       </Modal>  */}

  //                     </View> : null
  //                   )}
  //                 </View>
  //               )}

  //               {item.type === "RadioGroup" && (

  //                 <View style={{ flexDirection: "column", alignItems: "flex-start", marginBottom: 15 }}>
  //                   <Text style={{ marginBottom: 10 }}>{item.name}</Text>

  //                   <FlatList
  //                     data={item.options}
  //                     keyExtractor={(option) => option.typeId}
  //                     horizontal={item.orientation === 'H' ? true : false
  //                     }
  //                     renderItem={({ item: option }) => (
  //                       <TouchableOpacity onPress={() => selectedradiobutton(option)}>
  //                         <View style={[styles.wrapper]}>
  //                           <View style={styles.radioCircle}>


  //                             {/* {selectedRadio === option.typeId ? <View style={styles.radiobg}></View>:null} 
  //                               */}
  //                           </View>
  //                           <Text>{option.type}</Text>
  //                         </View>
  //                       </TouchableOpacity>
  //                     )}
  //                   />

  //                 </View>
  //               )}

  //               {item.type === 'DateTime' && (
  //                 <View style={{ height: 90 }}>
  //                   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  //                     <View style={{ height: 30 }}>
  //                       {
  //                         dateDisplay ? <Text style={{ flex: 1 }}>{item.name}</Text> : null
  //                       }
  //                       <Text style={{ flex: 1 }}>{!dateDisplay ? item.name : date.toLocaleString().split(",")[0]}</Text>
  //                     </View>
  //                     <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => showDatepicker()}>
  //                       <Image
  //                         source={require('/Users/mounikathota/Documents/React-Native/FormsProject/assets/calendar.png')}
  //                         style={{ width: 25, height: 25, marginLeft: 10 }}
  //                       />
  //                       {
  //                         openCalendar ? <DateTimePicker

  //                           testID="dateTimePicker"
  //                           value={new Date()}
  //                           mode={'date'}
  //                           is24Hour={true}
  //                           onChange={onChange}
  //                         /> : null
  //                       }
  //                     </TouchableOpacity>

  //                   </View>
  //                   <View style={{ height: 1, backgroundColor: "gray", marginTop: 6 }}></View>

  //                 </View>
  //               )}
  //               {item.type == 'TextBox'&&(
  //                 <View>
  //                   <Text>{item.name}</Text>
  //                 </View>
  //               )

  //               }
  //               {item.type == 'TextBox' &&(
  //                 <View>
  //                   <Text>{item.name}</Text>
  //                 </View>
  //               )

  //               }
  //               {item.type == 'DateTime' &&(
  //                 <View>
  //                   <Text>{item.name}</Text>
  //                 </View>
  //               )
  //               }



  //               {item.type === 'TitleInfoTextBox' && (
  //                 <View style={{ marginTop: 10 }} >
  //                   <Text style={{ flex: 1 }}>{item.name}</Text>


  //                   <Text style={{ flex: 1, marginBottom: 10 }}>{item.subTitle}</Text>

  //                   <View>
  //                     <TextInput
  //                       style={styles.input}
  //                       // value={inputText}
  //                       onChangeText={(text) => handleInputChange(text,item.objKey)}
  //                       onPressIn={() => getObjKeyFromTxt(item.objKey)}
  //                       placeholder={item.label}

  //                     // onFocus={() => {

  //                       // if (!inputText.trim() && item.objKey === 'vehcleTempReplacement') {
  //                       //   setRegistrationNumberError(true);
  //                       // }
  //                       // if (!inputText.trim() && item.objKey === 'tentativeLngthOfClngDone') {    
  //                       //   setTentativeError(true);
  //                       // }
  //                       // if (!inputText.trim() && item.objKey === 'noOfManholesOpenedCleaned') {
  //                       //   setmanholesError(true);
  //                       // }
  //                       // if (!inputText.trim() && item.objKey === 'noOfLabourEngaged') {
  //                       //   setLaboursError(true);
  //                       // }

  //                       // if (registrationNumbererror) {
  //                       //   setRegistrationNumberError(false)
  //                       //   // setTentativeError(true)
  //                       //   // setmanholesError(true)
  //                       //   // setLaboursError(true)
  //                       // }

  //                       // if (tentativeerror) {
  //                       //   setTentativeError(false)
  //                       //   // setRegistrationNumberError(true)
  //                       //   // setmanholesError(true)
  //                       //   // setLaboursError(true)
  //                       // }

  //                       // if (manholeserror) {
  //                       //   setmanholesError(false)
  //                       //   // setTentativeError(true)
  //                       //   // setRegistrationNumberError(true)
  //                       //   // setLaboursError(true)
  //                       // }
  //                       // if (labourerror) {
  //                       //   // setmanholesError(true)
  //                       //   // setTentativeError(true)
  //                       //   // setRegistrationNumberError(true)
  //                       //   setLaboursError(false)
  //                       // }
  //                     // }}
  //                     // onBlur={() => {
  //                     //   if (!inputText.trim() && item.objKey === 'vehcleTempReplacement') {

  //                     //     setRegistrationNumberError(true);

  //                     //   }
  //                     //   if (!inputText.trim() && item.objKey === 'tentativeLngthOfClngDone') {    
  //                     //     setTentativeError(true);
  //                     //   }
  //                     //   if (!inputText.trim() && item.objKey === 'noOfManholesOpenedCleaned') {
  //                     //     setmanholesError(true);
  //                     //   }
  //                     //   if (!inputText.trim() && item.objKey === 'noOfLabourEngaged') {
  //                     //     setLaboursError(true);
  //                     //   }

  //                     // }}
  //                     />

  //                     <View style={{ height: 1, backgroundColor: "gray" }}></View>
  //                     {item.objKey === 'vehcleTempReplacement' && registrationNumbererror ? (
  //                       <Text style={styles.errorlableText}>
  //                         Please Enter {item.label}. If above Vehicle is a temporary replacement, please enter the REGULAR VEHICLE NUMBER here (If not, ignore).
  //                       </Text>
  //                     ) : null}




  //                     {item.objKey === 'tentativeLngthOfClngDone' && tentativeerror ? (
  //                       <Text style={styles.errorlableText}>
  //                         Please Enter {item.label}. Tentative Length of Cleaning done.
  //                       </Text>
  //                     ) : null}


  //                     {item.objKey === 'noOfManholesOpenedCleaned' && manholeserror ? (
  //                       <Text style={styles.errorlableText}>
  //                         Please Enter {item.label}. No.of manholes opened & cleaned.

  //                       </Text>
  //                     ) : null}

  //                     {item.objKey === 'noOfLabourEngaged' && labourerror ? (
  //                       <Text style={styles.errorlableText}>
  //                         Please Enter {item.label}. No.of labour engaged
  //                       </Text>
  //                     ) : null}

  //                   </View>
  //                 </View>
  //               )}

  //               {item.type === 'TextBox' && (
  //                 <View style={{ marginTop: 40 }}>
  //                   <TextInput
  //                     style={styles.input}
  //                     onChangeText={(text) => handleText(text,item.objKey)}
  //                     placeholder={item.name}
  //                     onPressIn={() => getObjKeyFromTxt(item.objKey)}
  //                   />

  //                   <View style={{ height: 1, backgroundColor: "gray" }}></View>
  //                   {item.objKey === 'mccCmplntToken' && tokenerror ? (
  //                     <Text style={styles.errorlableText}>
  //                       Please Enter {item.label}.If MCC complaint, enter token number
  //                     </Text>
  //                   ) : null}

  //                   {item.objKey === 'locOfWrk' && locationerror ? (
  //                     <Text style={styles.errorlableText}>
  //                       Please Enter {item.label}.Location of work.
  //                     </Text>
  //                   ) : null}



  //                 </View>

  //               )}

  //               {item.type === 'UploadFile' && (
  //                 <View style={{ marginTop: 40 }}>
  //                   <Text style={{ flex: 1 }}>{item.name}</Text>

  //                   <TouchableOpacity onPress={() => handleButtonClick()}>
  //                     <View style={{ backgroundColor: '#002366', padding: 10, borderRadius: 5, marginTop: 20, width: 150, elevation: 0, borderRadius: 20 }}>

  //                       <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}> + Add File</Text>
  //                     </View>

  //                   </TouchableOpacity>

  //                 </View>

  //               )}

  //             </View>
  //           </View>

  //         )}
  //       />

  //     </View>
  //   </ScrollView>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 50

  },
  radiobg: {
    backgroundColor: "black",
    height: 8,
    width: 8,
    margin: 2,
    borderRadius: 5
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'sky blue',
    margin: 3
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 8,
  },
  errorlableText: {
    // ...Platform.select({
    //     ios: {
    //         marginEnd: 100,
    //         color: 'red',
    //         // marginBottom: 15,
    //         marginTop: 5
    //     },
    //     android: {
    //         marginEnd: 130,
    //         color: 'red'
    //     }
    // })
    color: 'red',
    margin: 10

  },

  container1: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 30,
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: "black",
    marginBottom: 6
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "black"
  },
  section: {
    paddingTop: 10,
    backgroundColor: "lightgrey",
    marginLeft: 15,
    marginRight: 15
  },
  sectionheader: {
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  sectionheadertext: {
    fontSize: 12,
    // fontWeight: "700",
    color: "black",
    // textTransform: "uppercase",
    letterSpacing: 1.2
  },
  dropownSelector: {
    height: 30,
    width: 30,
    marginRight: 10,

    // marginTop: 50

  },
  rowwrapper: {
    paddingLeft: 5,
    // borderTopWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24
  },
  sectionbody: {
    color: "black",
    fontSize: 12,
    paddingLeft: 5
  },
  dropdownArea: {
    width: '80%',
    height: 100,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center'
  },
  dropdownItem: {
    width: '80%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center'

  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    height: 250,
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'light-gray',
    //  marginTop: 30
    marginLeft: 40,
    marginRight: 50

  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  }



})
// }

export default App;
