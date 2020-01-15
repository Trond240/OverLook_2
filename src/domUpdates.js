import $ from 'jquery';

import $ from 'jquery';

export const domUpdates = {
 displayUserInformation(name, totalAmount) {
   $('.users-name-display').text(`Hello! ${name}!`)
   $('.users-total-display').text(`Total Amount Spent: ${totalAmount}`)
 },

 displayManagerInfo(roomsAvailable, moneyMade, percentOccupied) {
   $('.total-rooms').text(`Total Rooms Available: ${roomsAvailable}!`)
   $('.total-revenue').text(`total Revenue for Today's Date: ${moneyMade}`)
   $('.percent-available').text(`Percentage of Rooms Occupied: ${percentOccupied}`)
 },

 displayRoomsAvailable(users) {
    return users.bookings.forEach(booking => {
      $('.past-user-rooms-booked').append(`
        <div class= 'card'>
          <p>Date:${booking.date}</p>
          <p>ROOM NUMBER: ${booking.roomNumber}</p>
        </div>`)
    })
  },

  bookRooms(rooms) {
      return rooms.forEach(booking => {
       $('.search-book-room').append(`
         <div class ='card'>
           <p>Room Number: ${booking.number}</p>
           <p>Cost Per Night: ${booking.costPerNight}</p>
           <p>Room Type: ${booking.roomType}</p>
           <p>Number of Beds: ${booking.numBeds}</p>
           <button class="book-button" type="button" name="button">Book Room</button>
         </div>`)
     })
   },

   displayUsers(users) {
     console.log(users)
     return users.forEach(user => {
      $('.users').append(`
        <div class ='card'>
          <p>User: ${user.name}</p>
          <p>UserID: ${user.id}</p>
          <button class ='select-user'>select</button>
        </div>`)
    })
   }
}






export default domUpdates;
