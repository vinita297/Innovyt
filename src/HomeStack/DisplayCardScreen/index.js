import React, { useEffect, useState } from 'react';
import { View, Image, Text, Modal, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const DisplayCardScreen = (props) => {

    const [data, setData] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [shareEmail, setShareEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    useEffect(() => {
        getCardsDetails()
    }, [])

    const getCardsDetails = async () => {
        var options = {
            method: 'Get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer $2a$11$jhyPoo0QvIwhfQBgLe1ojuLOn1mjTzAptQrM0YpcLACZwYPZMVc6i`, // notice the Bearer before your token
            },
        }
        try {
            const response = await fetch(`https://kieazy-card-service-dev.azurewebsites.net/api/v1/manage-card/digital-card/id/${props.route.params.id}`, options);
            const json = await response.json();
            setData(json)
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    setName('')
                    setEmail('')
                    setContactNo('')
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.largeIcon}>
                        <MaterialIcons name="blur-on" size={50} color="#fff" />
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}><AntDesign name="infocirlceo" size={17} color="#1e90ff" />  Kieazy does not sell or share your data
                        </Text>
                    </View>
                    <Text style={styles.modalHeaderText}>Share your info</Text>
                    <View style={{ margin: 10 }}>
                        <TextInput
                            value={name}
                            placeholder={'Full name'}
                            onChangeText={(text) => setName(text)}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            value={email}
                            placeholder={'Email'}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            value={contactNo}
                            placeholder={'Contact number'}
                            onChangeText={(text) => setContactNo(text)}
                            style={styles.inputStyle}
                        />
                        <TouchableOpacity style={styles.connectButton} onPress={() => { setModalVisible(!modalVisible), setContactNo(''), setEmail(''), setName('') }}>
                            <Text style={styles.connectButtonText}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setModalVisible2(!modalVisible2);
                    setShareEmail('')
                }}>
                <View style={styles.modalContainer2}>
                    <View style={styles.largeIcon2}>
                        <MaterialIcons name="share" size={40} color="#fff" />
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}><AntDesign name="infocirlceo" size={17} color="#1e90ff" />  Card details will be shared on email you enter below</Text>
                    </View>
                    <Text style={styles.modalHeader}>Enter email to share with</Text>
                    <View style={{ margin: 10 }}>
                        <TextInput
                            value={shareEmail}
                            placeholder={'Email'}
                            onChangeText={(text) => setShareEmail(text)}
                            style={styles.inputStyle}
                        />
                        <TouchableOpacity style={styles.connectButton} onPress={() => { setModalVisible2(!modalVisible2), setShareEmail('') }}>
                            <Text style={styles.connectButtonText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.contactButton}>
                    <Icon name="calendar-account" size={23} color="#fff" />
                    <Text style={styles.buttonText}>Save Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.connectButton2} onPress={() => setModalVisible(!modalVisible)}>
                    <MaterialIcons name="blur-on" size={23} color="#fff" />
                    <Text style={styles.buttonText}>Connect</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => setModalVisible2(!modalVisible2)}>
                    <MaterialIcons name="share" size={23} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.viewStyle}>
                <Image style={styles.imageStyle} source={{ uri: 'https://cof0storage0dev.blob.core.windows.net/cdn/kieazy-app/images/img-1674451332288.png' }} />
                <View style={styles.viewStyle2}>
                    <Text style={styles.textStyle}>ARUN</Text>
                </View>
                <View style={styles.viewStyle2}>
                    <Text style={styles.textStyle}>MT</Text>
                </View>
                <Text style={styles.textStyle2}>{data.label}</Text>
                <Text style={styles.textStyle2}>{data.cardType}</Text>

                <View style={styles.viewStyle3}>
                    <TouchableOpacity style={styles.logoStyle}>
                        <Image style={styles.imgStyle} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/768px-Twitter-logo.svg.png?20220821125553' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoStyle2}>
                        <Image style={styles.imgStyle} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoStyle2}>
                        <Image style={styles.imgStyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoStyle2}>
                        <Image style={styles.imgStyle} source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoStyle2}>
                        <Image style={styles.imgStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhetefsoSDxDrFtaVzZj3x3azzOnRO9IFS5g&usqp=CAU' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default DisplayCardScreen;
