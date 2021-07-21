import NetInfo from "@react-native-community/netinfo";

export default class Reachability {

    static checkReachability = (callback) => {
        const unsubscribe = NetInfo.addEventListener(state => {
            callback(state.isInternetReachable);
        });

        this.unsubscribe = unsubscribe;
    }

    static unsubscribeFromReachabilityUpdates = () => {
        this.unsubscribe();
    }
}