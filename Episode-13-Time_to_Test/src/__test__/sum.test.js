//Writing a test case for sum function 
import {sum} from '../components/sum'

test("Test case for sum: to calculate sum of 2 numbers",()=>{
    const result = sum(3,4);

    //Assertion statement: statement used to check whether we are getting the expected result
    //or not. Without this our test will pass always but we are not sure that it should have failed or
    //passed.
    expect(result).toBe(7);
})