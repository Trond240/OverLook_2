const chai = require("chai");
const expect = chai.expect;
import Books from '../src/Books';

describe ('Books', () => {

let books;

beforeEach(() => {
  books = new Books();
})

describe ('default properties', () => {


  it('should be a function', () => {
    expect(Books).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(books).to.be.an.instanceof(Books);
  })
});
});
