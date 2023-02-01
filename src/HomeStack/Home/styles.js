import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    linearGrad: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 60,
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 10
    },
    deleteButton: {
        margin: 5,
        padding: 2,
        paddingHorizontal: 7,
        backgroundColor: '#00bfff',
        borderRadius: 20,
        alignItems: 'flex-start',
        position: 'absolute',
        marginLeft: -105,
        marginTop: -5
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 10
    },
    textLabel: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 5
    },
    descriptionText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 10,
        margin: 5
    },
    cardView: {
        margin: 5,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#00bfff',
        borderRadius: 20
    },
    cardText: {
        color: '#fff',
        fontSize: 10
    },

});

export default styles;
