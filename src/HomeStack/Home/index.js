import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Home = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        getCardsData()
    }, [])

    const getCardsData = async () => {
        var options = {
            method: 'Get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer $2a$11$jhyPoo0QvIwhfQBgLe1ojuLOn1mjTzAptQrM0YpcLACZwYPZMVc6i`, // notice the Bearer before your token
            },
        }
        try {
            const response = await fetch('https://kieazy-card-service-dev.azurewebsites.net/api/v1/manage-card/digital-card/list-view/all', options);
            const json = await response.json();
            setData(json)
        } catch (error) {
            console.warn(error);
        }
    }

    const renderItem = (item) => {
        console.warn(item)
        return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('DisplayCardScreen', { id: item.digitalCardId }) }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#800080', '#511564', '#471985']} style={styles.linearGrad}>

                    <TouchableOpacity>
                        <View style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <Icon name="person-circle-outline" size={25} color="#fff" />
                        <Text style={styles.textLabel}>{item.label}</Text>
                        {item.description ? <Text style={styles.descriptionText}>{item.description}</Text> : null}

                        <TouchableOpacity onPress={() => { props.navigation.navigate('DisplayCardScreen', { id: item.digitalCardId }) }}>
                            <View style={styles.cardView}>
                                <Text style={styles.cardText}>View Card</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{}}>
            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Home;
