export const getTheDataBasedOnTheIpAddress = (inputValue: string) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_zQEzXdnhSfr59ajenCIYUxEn480UT&ipAddress=${inputValue}`)
    .then(data => data.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const getTheDataBasedOnTheDomain = (inputValue: string) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_zQEzXdnhSfr59ajenCIYUxEn480UT&domain=${inputValue}`)
    .then(data => data.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const getUsersStartingData = () => fetch('https://api.ipify.org/?format=json').then(res => res.json()).then(data => data).catch(err => console.log(err));


export const isIP = (address: string) => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      address
    );
  };

export const trimTheEmptySpaces = (inputValue: string) => { 
    return inputValue.replace((/\s/g), "");
};
