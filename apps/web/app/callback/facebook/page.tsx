"use client"
import axios from 'axios';
import React, { useEffect } from 'react'

const Page = () => {
    console.log();
    const queryString = window.location.hash.substring(1);

    // Parse the query string
    const params = new URLSearchParams(queryString);

    // Extract the values
    const accessToken = params.get('access_token');
    const dataAccessExpirationTime = params.get('data_access_expiration_time');
    const expiresIn = params.get('expires_in');
    const longLivedToken = params.get('long_lived_token');

    console.log('Access Token:', accessToken);
    console.log('Data Access Expiration Time:', dataAccessExpirationTime);
    console.log('Expires In:', expiresIn);
    console.log('Long Lived Token:', longLivedToken);

    useEffect(() => {
        const saveTokens = async () => {
            await axios.post("/api/authorize/facebook", { accessToken, longLivedToken })
        }
        saveTokens()
    }, [])
    return (
        <div>Redirecting...</div>
    )
}

export default Page