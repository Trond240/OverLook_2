import moment from 'moment';

class Hotel {
  constructor(bookings, rooms) {
    this.bookings = bookings;
    this.rooms = rooms;
  }

  totalAmountSpent(date) {
    let sum = 0;
    this.rooms.forEach(room => {
      this.bookings.forEach(booking => {
        if(room.number === booking.roomNumber) {
           sum += room.costPerNight;
        }
      })
    })
  return sum.toFixed(2);
  }

  retrieveBookedRooms(date) {
    let availableRooms = this.bookings.filter(booking => {
      return booking.date === date;
    })
    return availableRooms;
  }

  retrieveAvailableRooms(date) {
    let todaysBookings = this.retrieveBookedRooms(date);
    let occupied = todaysBookings.reduce((acc, booking) => {
      this.rooms.forEach(room => {
        if(room.number === booking.roomNumber){
          acc.push(room.number);
        }
      })
      return acc;
    }, [])
    let availableRooms = this.rooms.filter(room => {
      return !occupied.includes(room.number)
    })
    console.log(availableRooms)
    return availableRooms
    }
  }

export default Hotel;
