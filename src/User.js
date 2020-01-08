class Users {
  constructor(name, id) {
    this.name= name;
    this.id = id;
  }
}

class Manger extends Users {
  constructor() {
    super(name, id)
  }
}

export default Users;
