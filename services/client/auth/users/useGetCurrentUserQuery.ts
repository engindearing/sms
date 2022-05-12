import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../axiosWithAuth";

import AsyncStorage from '@react-native-async-storage/async-storage'

export const useGetCurrentUserQuery = () => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getCurrentUser = async () => {
        const token = await AsyncStorage.getItem('accessToken')

        setLoading(true)
        try {
            let userData = await axiosWithAuth(token).get('/users/me').then(res => res.data.user)

            setUser(userData)

        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])  

    return [user, loading, error]
}