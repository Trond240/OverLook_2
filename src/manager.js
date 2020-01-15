import Hotel from '../src/Hotel'

class Manager extends Hotel {
  constructor(bookings, rooms, users) {
    super(bookings, rooms);
    this.users = users;
  }

  searchForUser(name) {
    let customerName = this.users.find(user => {
        return user.name === name;
    })
    return customerName;
    }

  findTotalAvailableRoomsByDate(date) {
    let availableRooms = this.retrieveAvailableRooms(date);
    return availableRooms.length
  }

  findPercentageOfRoomsOccupiedByDate(date) {
    let totalAvailable = this.retrieveAvailableRooms(date);
    let percentage =  ((25 - totalAvailable) / 25) * 100;
    console.log(percentage);
    return `${percentage}%`
  }
}

export default Manager;
