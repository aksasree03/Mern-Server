//test cses for our unit fun sum
const sum=require('./test/sum')
//jest test class
//two parameters label and function
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe gives exactly equal value
    //expect executes unit function
})
test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})
test('Value is null',()=>{
    const n=null;
    expect(n).toBeNull();
})
test('Value is defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
test('Value is false',()=>{
    const bool=false
    expect(bool).toBeFalsy();
})
test('Value is truth',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})