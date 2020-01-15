import Hotel from '../src/Hotel'


class Users extends Hotel{
  constructor(bookings, rooms, users, id, name, userBookings) {
    super(bookings, rooms);
    this.users = users;
    this.id = id;
    this.name = name;
    this.userBookings = userBookings;
    // this.todaysDate = moment().format('YYYY/MM/DD');
  }

  retrieveUserName(id) {
    let userName = this.users.find(user => {
      return user.id === id;
    })
    return userName.name;
  }

  // pastAndPresentBooked(users) {
  //     let myBookedRooms = this.bookings.filter(booking => {
  //       this.users.forEach(user => {
  //         return booking.userID === this.id;
  //         })
  //         return myBookedRooms;
  //         console.log(myBookedRooms)
  //
  //       })
  //   }

  userBookings(users) {
    return this.bookings.filter(booking => {
      return booking.userID === users.id;
    })
  }

  calculateTotalSpent(rooms) {
    let costs = this.customerBookings.map(booking => {
      return rooms.find(room => {
        return booking.roomNumber === room.number;
      }).costPerNight
    }).reduce((a, b) => a + b, 0);
    return costs.toFixed(2);
  }
}



export default Users;
