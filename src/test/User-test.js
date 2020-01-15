const chai = require("chai");
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import bookingsData from '../data/bookings-data';
import roomsData from '../data/rooms-data';
import usersData from '../data/users-data';

import Users from '../src/User';
let users;
let id = 2;

describe ('Users', () => {

 beforeEach(() => {
   users = new Users(bookingsData, roomsData, usersData, id)
 });

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Users).to.be.a('function');
  })

  it('should be an instance of a UserName', () => {
    expect(users).to.be.an.instanceof(Users);
  })

  it('should be able to store users data in a property', () => {
    expect(users.users).to.eql(usersData);
  });

  it('should be able to find userName by ID', () => {
    expect(users.retrieveUserName(1)).to.equal("Leatha Ullrich");
  })

  it('should be able to calculate Total Spent', () => {
    expect(users.calculateTotalSpent(this.rooms)).to.equal();
  })

  it.skip('should show past and future bookings', () => {
    expect(users.pastAndPresentBooked()).to.deep.equal();
})
})
});
