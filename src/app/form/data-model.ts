export class User {
    id = 0;
    name = '';
    addresses: Address [];
}

export class Address {
    country = '';
    city = '';
    zip = '';
    province = '';
}

export const users : User[] = [
    {
        id: 1,
        name: 'somiar',
        addresses: []
    },
    {
        id: 2,
        name: 'hello',
        addresses: [
            {
                country: 'China',
                city: 'CD',
                province: 'sc',
                zip: '112211'
            }
        ]
    }
];

export const province = ['sc', 'sd', 'hn'];