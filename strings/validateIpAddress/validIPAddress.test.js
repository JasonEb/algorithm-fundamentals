const { validIPAddress } = require('./validIPAddress')

test('example 1', () => {
    let IP = "172.16.254.1"
    expect(validIPAddress(IP).toEqual("IPv4"))
})

test('example 3', () => {
    let IP = "256.256.256.256"
    expect(validIPAddress(IP).toEqual("Neither"))
})

test('example 3', () => {
    let IP = "1e1.4.5.6"
    expect(validIPAddress(IP).toEqual("Neither"))
})