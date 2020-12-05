export const getTheDataBasedOnTheIpAddress = (inputValue: string) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_zQEzXdnhSfr59ajenCIYUxEn480UT&ipAddress=${inputValue}`)
    .then(data => data.json())
    .then(data => data)
}

export const getUsersGeolocationData = (): Promise<[number,number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position =>{
            resolve([position.coords.latitude, position.coords.longitude])
        })
    })
}

