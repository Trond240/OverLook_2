import './css/base.scss';
import $ from 'jquery';
import {domUpdates} from './domUpdates.js'
import Users from './User';
import Manager from './Manager';
import Hotel from './Hotel';


let hotel;
let manager;
let users;
let bookingsData;
let roomsData;
let usersData;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;
document.write(today);

const userData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(data => data.users)
  .catch(error => console.log('usersData error'));

const roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(roomResponse => roomResponse.json())
  .then(data => data.rooms)
  .catch(error => console.log('roomsData error'));

const bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(userResponse => userResponse.json())
  .then(data => data.bookings)
  .catch(error => console.log('bookingsData error'));

Promise.all([bookingData, roomData, userData])
  .then(data => {
    bookingsData = data[0];
    roomsData = data[1];
    usersData = data[2];
  })
  .then(() => {
    hotel = new Hotel(bookingsData, roomsData);
  })
  .catch(error => {console.log('Something is amiss with promise all', error)});

  const generateUser = () => {
  if($('.user-input').val() === 'manager') {
    manager = new Manager(bookingsData, roomsData, usersData);
    console.log('text', manager);
    managerLoginHandler();
    $('.error-message').hide();
  } else {
    const loginInput = parseInt($('.user-name').val().split('customer')[1]);
    const userInfo = usersData.find(user => user.id === loginInput)
    users = new Users(bookingsData, roomsData, usersData, loginInput, userInfo.name);
    userLoginHandler();
    $('.error-message').hide();
}
}

const checkPassword = () => {
  if($(".user-name").val() &&
  $(".user-password").val() === 'overlook2019') {
    generateUser();
    console.log(manager);
  } else {
    displayError();
  }
}

const displayError = () => {
  $('.error-div').append(`<p class='error-message'> Incorrect username and password.</p>`)
}

const userLoginHandler = () => {
  $('.welcome').addClass('hidden');
  $('.user-page').removeClass('hidden');
  domUpdates.displayRoomsAvailable(users);
  domUpdates.bookRooms(users.retrieveAvailableRooms())
  domUpdates.displayUserInformation(users.name, users.totalAmountSpent(today));
 //  $('.book-button').click(function() {
 //   users.bookARoom(this.id, today, roomsData);
 // })
}

const managerLoginHandler = () => {
    $('.welcome').addClass('hidden');
    $('.manager-page').removeClass('hidden');
    console.log(manager.totalAmountSpent(today))
    domUpdates.displayManagerInfo(manager.findTotalAvailableRoomsByDate(today), manager.totalAmountSpent(today), manager.findPercentageOfRoomsOccupiedByDate(today))
    domUpdates.displayUsers(manager.users)
    // domUpdates.displayManagerInfo(manager.totalAmountSpent(today));
  }


// const bookingsForUser = (id) => {
// let bookingArray = user.findBookings(id);
// bookingArray.sort((a, b) => {
//   if (a.date < b.date) {
//     return -1
//   }
//
//   if (a.date > b.date) {
//     return 1
//   }
// })
//
// return bookingArray
// }
//
// const bookingsByDate = (date) => {
// let arrayOfBookingData = users.retrieveBookedRooms(date);
// arrayOfBookingData.sort((a, b) => {
//   return a.roomNumber - b.roomNumber
// })
//
// return arrayOfBookingData
// }

$('.login-button').click(checkPassword);
// $('.search-rooms').click(mainHandler);
