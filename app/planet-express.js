const crewMember = {
  getFullName() {
    return `${this.first} ${this.last}`;
  },

  goodNews() {
    if (this.first === 'Hugo') {
      console.log('GOOD NEWS EVERY BODY!!!');
    } else {
      console.log('terrible news...');
    }
  }
}

const crew = {
  deliveryBoy: Object.create(crewMember, {
    first: 'Phillip',
    last: 'Fry',
    occupationChip: 'Delivery Boy',
    iq: 60,

    goodNews() {
      return 'Bender is my best friend';
    },
  }),
};

const fry = crew.deliveryBoy;

console.log(crew.deliveryBoy.iq); // 60
console.log(fry.iq); // 60

fry.iq = 80;

console.log(fry.iq); // 80
console.log(crew.deliveryBoy.iq);

'hello'.split(''); // ['h','e','l','l','o']

console.log(fry.getFullName()); // "Phillip Fry"
console.log(fry.goodNews()); // "Bender is my best friend"

function makeCrewMember(thisIsJustAVariableItCanBeCalledAnythingWeWant) {
  return Object.create(crewMember, thisIsJustAVariableItCanBeCalledAnythingWeWant);
}

const leela = makeCrewMember({
  first: 'Leela',
  last: 'Torunga',
  occupationChip: 'Occupation Chip Implanter',
  iq: 120,
});

console.log(leela.goodNews()); // 'terrible news...'

function makeBetterCrewMember(first, last, occupationChip, iq = 100) {
  return Object.create(crewMember, { first, last, occupationChip, iq });
}

const bender = makeBetterCrewMember('Bender', 'Rodriguez', 'Bending Unit');

bender.iq; // 100
bender.getFullName(); // "Bender Rodriguez"
