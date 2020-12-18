export const getTheDataBasedOnTheIpAddress = (inputValue: string) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_zQEzXdnhSfr59ajenCIYUxEn480UT&ipAddress=${inputValue}`)
    .then(data => data.json())
    .then(data => data)
}

export const getUsersStartingData = () => {
    return fetch('https://api.ipify.org/?format=json').then(res => res.json()).then(data=>data);
}