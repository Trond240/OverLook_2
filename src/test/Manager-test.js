const chai = require("chai");
const expect = chai.expect;
import Manager from '../src/Manager';
import Hotel from '../src/Hotel'

import bookingsData from '../data/bookings-data';
import roomsData from '../data/rooms-data';
import usersData from '../data/users-data';


describe ('Manager', () => {

let manager;

beforeEach(() => {

  manager = new Manager(usersData, bookingsData, roomsData);
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  })

  it('should be an instance of a Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })

  it('should be able to search for a customer', () => {
    expect(manager.searchForUser('Leatha Ullrich')).to.deep.equal({ id: 1, name: 'Leatha Ullrich' });
  })

  it('should find availableRooms by date', () => {
    expect(manager.findTotalAvailableRoomsByDate('2020/01/04')).to.equal(75);
  })

  it('should be able to calculate percent of rooms booked', () => {
    expect(manager.findPercentageOfRoomsOccupiedByDate('2019/11/15')).to.deep.equal();
  })
});
});
