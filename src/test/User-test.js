const chai = require("chai");
const expect = chai.expect;
import User from '../src/User';

describe ('User', () => {

let user;

beforeEach(() => {
  user = new User();
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(user).to.be.an.instanceof(User);
  })
});
});
