const {addition}=require('./functions/math');

test('Addition test',()=>{
    const value=addition(10,20)
    expect(value).toBe(30); // will pass the test 
})