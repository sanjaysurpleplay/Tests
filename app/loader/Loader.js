import { ActivityIndicator, View, Modal, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Loader = (props) => {
   
    return (
        <Modal visible={props.isLoading}>
            <View style={styles.container} >
                <View style={styles.background} />
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator style={styles.ActivityIndicator} size='large' color='#427FC4'  />
                    <Text style={styles.nameText}>Please Wait</Text>
                </View>
            </View>
        </Modal>
    );
}

export default Loader;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'transparent',
    },
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#E4EEF8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActivityIndicator: {
        height: '100%',
        width: '100%',
        color: '#427FC4'
    },
    nameText: {
        fontSize:15,
        fontWeight: '400',
        color:'#427FC4',
        marginTop:3
       },
    activityIndicatorContainer: {
        height: 18 * 4,
        width:20 * 4,
        backgroundColor: '#E4EEF8',
        borderRadius: 8,
    },
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#E4EEF8',
        position: 'absolute',
    }
});