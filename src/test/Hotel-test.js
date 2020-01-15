const chai = require("chai");
const expect = chai.expect;
import bookingsData from '../data/bookings-data';
import roomsData from '../data/rooms-data';
import Hotel from '../src/Hotel';

describe ('Hotel', () => {

let hotel

beforeEach(() => {
  hotel = new Hotel(bookingsData, roomsData)
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  })

  it('should be able to calculate total Revenue today', () => {
    expect(hotel.totalAmountSpent("2019/12/15")).to.equal('24780.69');
  })

  it('should be able to calculate total Revenue today', () => {
    expect(hotel.retrieveBookedRooms("2019/12/15")).to.equal([]);
  })

  it('should be able to return rooms for today', () => {
    expect(hotel.retrieveAvailableRooms("2019/12/15")).to.deep.equal([
  {
    number: 6,
    roomType: 'junior suite',
    bidet: true,
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 397.02
  },
  {
    number: 17,
    roomType: 'junior suite',
    bidet: false,
    bedSize: 'twin',
    numBeds: 2,
    costPerNight: 328.15
  }
  ]);
  })

  it('should be able to see all booked rooms', () => {
    expect(hotel.retrieveBookedRooms("2019/12/15")).to.deep.equal([{
    id: 1572293130156,
    userID: 19,
    date: '2019/12/15',
    roomNumber: 18,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 16,
    date: '2019/12/15',
    roomNumber: 7,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 8,
    date: '2019/12/15',
    roomNumber: 1,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 3,
    date: '2019/12/15',
    roomNumber: 9,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 47,
    date: '2019/12/15',
    roomNumber: 14,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 20,
    date: '2019/12/15',
    roomNumber: 23,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 11,
    date: '2019/12/15',
    roomNumber: 8,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 23,
    date: '2019/12/15',
    roomNumber: 16,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 44,
    date: '2019/12/15',
    roomNumber: 12,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 7,
    date: '2019/12/15',
    roomNumber: 12,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 39,
    date: '2019/12/15',
    roomNumber: 21,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 46,
    date: '2019/12/15',
    roomNumber: 2,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 5,
    date: '2019/12/15',
    roomNumber: 11,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 45,
    date: '2019/12/15',
    roomNumber: 16,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 25,
    date: '2019/12/15',
    roomNumber: 9,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 30,
    date: '2019/12/15',
    roomNumber: 11,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 49,
    date: '2019/12/15',
    roomNumber: 5,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 18,
    date: '2019/12/15',
    roomNumber: 16,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 34,
    date: '2019/12/15',
    roomNumber: 12,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 31,
    date: '2019/12/15',
    roomNumber: 1,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 26,
    date: '2019/12/15',
    roomNumber: 22,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 10,
    date: '2019/12/15',
    roomNumber: 12,
    roomServiceCharges: []
  },
  {
    id: 1572293130160,
    userID: 1,
    date: '2019/12/15',
    roomNumber: 5,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 9,
    date: '2019/12/15',
    roomNumber: 5,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 22,
    date: '2019/12/15',
    roomNumber: 15,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 35,
    date: '2019/12/15',
    roomNumber: 24,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 14,
    date: '2019/12/15',
    roomNumber: 23,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 28,
    date: '2019/12/15',
    roomNumber: 14,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 15,
    date: '2019/12/15',
    roomNumber: 5,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 48,
    date: '2019/12/15',
    roomNumber: 18,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 2,
    date: '2019/12/15',
    roomNumber: 7,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 17,
    date: '2019/12/15',
    roomNumber: 23,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 50,
    date: '2019/12/15',
    roomNumber: 14,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 6,
    date: '2019/12/15',
    roomNumber: 3,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 13,
    date: '2019/12/15',
    roomNumber: 22,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 33,
    date: '2019/12/15',
    roomNumber: 10,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 32,
    date: '2019/12/15',
    roomNumber: 15,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 37,
    date: '2019/12/15',
    roomNumber: 9,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 42,
    date: '2019/12/15',
    roomNumber: 9,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 4,
    date: '2019/12/15',
    roomNumber: 13,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 40,
    date: '2019/12/15',
    roomNumber: 25,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 24,
    date: '2019/12/15',
    roomNumber: 24,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 41,
    date: '2019/12/15',
    roomNumber: 24,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 36,
    date: '2019/12/15',
    roomNumber: 19,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 29,
    date: '2019/12/15',
    roomNumber: 2,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 43,
    date: '2019/12/15',
    roomNumber: 24,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 38,
    date: '2019/12/15',
    roomNumber: 10,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 41,
    date: '2019/12/15',
    roomNumber: 9,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 17,
    date: '2019/12/15',
    roomNumber: 24,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 37,
    date: '2019/12/15',
    roomNumber: 2,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 9,
    date: '2019/12/15',
    roomNumber: 20,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 30,
    date: '2019/12/15',
    roomNumber: 3,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 15,
    date: '2019/12/15',
    roomNumber: 25,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 27,
    date: '2019/12/15',
    roomNumber: 4,
    roomServiceCharges: []
  },
  {
    id: 1572293130161,
    userID: 41,
    date: '2019/12/15',
    roomNumber: 15,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 24,
    date: '2019/12/15',
    roomNumber: 7,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 11,
    date: '2019/12/15',
    roomNumber: 11,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 34,
    date: '2019/12/15',
    roomNumber: 16,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 50,
    date: '2019/12/15',
    roomNumber: 18,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 31,
    date: '2019/12/15',
    roomNumber: 10,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 33,
    date: '2019/12/15',
    roomNumber: 8,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 16,
    date: '2019/12/15',
    roomNumber: 10,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 45,
    date: '2019/12/15',
    roomNumber: 23,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 7,
    date: '2019/12/15',
    roomNumber: 7,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 10,
    date: '2019/12/15',
    roomNumber: 20,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 5,
    date: '2019/12/15',
    roomNumber: 8,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 18,
    date: '2019/12/15',
    roomNumber: 7,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 16,
    date: '2019/12/15',
    roomNumber: 20,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 25,
    date: '2019/12/15',
    roomNumber: 12,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 47,
    date: '2019/12/15',
    roomNumber: 5,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 39,
    date: '2019/12/15',
    roomNumber: 21,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 38,
    date: '2019/12/15',
    roomNumber: 3,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 1,
    date: '2019/12/15',
    roomNumber: 21,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 3,
    date: '2019/12/15',
    roomNumber: 15,
    roomServiceCharges: []
  },
  {
    id: 1572293130163,
    userID: 10,
    date: '2019/12/15',
    roomNumber: 18,
    roomServiceCharges: []
  }
]);
});
});
});
