const chai = require("chai");
const expect = chai.expect;
import Hotel from '../src/Hotel';

describe ('Books', () => {

let hotel;

beforeEach(() => {
  hotel = new Hotel();
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  })
});
});
