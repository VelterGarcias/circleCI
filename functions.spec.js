
const functions = require('./functions')

//it ou test

it('Somando dois valores', () => {
    expect(functions.soma(2,2)).toBe(4)
})

it('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

it('Should be Falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

it('Should be Velter Garcias Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Velter',
        lastName: 'Garcias'
    })
})

it('Should be under 1600', () => {
    const val1 = 700
    const val2 = 800
    expect(val1 + val2).toBeLessThan(1600)
})
it('Should be under or equal to 1600', () => {
    const val1 = 700
    const val2 = 800
    expect(val1 + val2).toBeLessThanOrEqual(1600)
})

it('Using regex to match expression', () => {
    expect("developer").not.toMatch(/JS/i)
})

it('Admin should be in usernames', () => {
    const usernames = ['Velter', 'Karol', 'Adelina']
    expect(usernames).toContain('Velter')
})

it('User fetched should be Glenna Reichert', () => {
    expect.assertions(1)

    return functions.fetchUser()
    .then( data => {
        expect(data.name).toEqual('Glenna Reichert')
    })
})

it('User fetched should be Glenna Reichert 2', async () => {
    expect.assertions(1)

    const data = await functions.fetchUser()

    expect(data.name).toEqual('Glenna Reichert')
})