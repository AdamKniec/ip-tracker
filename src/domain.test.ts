import {isIP, trimTheEmptySpaces} from './domain';

describe("Should check if the string input is the Ip address or domain address", ()=> {
    
    it('Should return true if the given input values is the IpAddress', ()=> {
        const testInput = "8.8.8.8";
        const isIpResult = isIP(testInput);
        expect(isIpResult).toEqual(true);
    });

    it('Should return false if the given string values is not the IP Address', ()=> {
        const testInput = 'adamkniec.pl';
        const isIpResult = isIP(testInput);
        expect(isIpResult).toEqual(false);
    });

})

describe("Trim empty spaces functionality", ()=> {

    it("Should remove the empty spaces from the given string value", ()=> {
        const accidentalWrongInputValue = 'adam kniec.pl';
        const wrongInputValueAfterTrimming = trimTheEmptySpaces(accidentalWrongInputValue);
        expect(wrongInputValueAfterTrimming).toEqual('adamkniec.pl');
    });
    
});
