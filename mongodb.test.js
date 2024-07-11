const mongoose = require ('mongoose')

describe('MongodB connected',()=>{
    beforeAll(async()=>{
        const url= 'mongodb+srv://budalapatiaksa3:luU8RikmOGCEkXPr@cluster0.5iqzohg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);

    });
    test('MongoDB  connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    });
});