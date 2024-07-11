const fetchData=require('./test/api');
jest.mock('node-fetch');
test('Get/users api data',async()=>{
    const data=await fetchData();
    console.log(data)
    expect(data).toHaveProperty('getAllUsers');
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id');
    })
})