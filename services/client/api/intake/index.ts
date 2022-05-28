import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchOrCreateIntakeValues = async () => {

    let token = await AsyncStorage.getItem('accessToken')

    try {
        let data = await axiosWithAuth(token).get('/users/intake').then(res => res.data)

        return data
        
    } catch (error) {
        throw error
    }

} 