const chai = require("chai");
const expect = chai.expect;
import Rooms from '../src/Rooms';

describe ('Rooms', () => {

let rooms;

beforeEach(() => {
  rooms = new Rooms();
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Rooms).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(rooms).to.be.an.instanceof(Rooms);
  })
});
});
