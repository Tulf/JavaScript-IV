// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

/* in my stupid brain it goes Humanoid=parent
character = child
gamobjects = grandchild so that's what I'm going to write.
but maybe that is wrong
come to think of it if game objects inherits things from humanoid
wouldn't humanoid be the most specifc of all the classes? 
You know what it's easier to pretend the other way so let's do that
first. 
Yes I was right, so game object is the most general class, and hence my confusion
from yesterday is put to rest and all is right with the world again. 
*/

/* so let's just delineate what's going on for future refereence
GameObjects is a constructor, how do I know this, well it's capatlized :p
but if I look closely I might be able to tell that one is clearly creating
attributes and the other is clearly a method because it's returning something
it's also not being set equal to something */

class GameObject{
	constructor(attributes){
		this.createdAt = attributes.createdAt;
		this.dimensions = attributes.dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`
	}
}


// function GameObject(options) {
//   this.createdAt = options.createdAt;
//   this.dimensions = options.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`;
// };

class CharacterStats extends GameObject{
	constructor(char){
		super(char);
		this.hp = char.hp;
		this.name = char.name;
	}
	takeDamage() {
		return `${this.name} took damage.`
	}
}

// function CharacterStats(characterStatsOptions) {
//   GameObject.call(this, characterStatsOptions);
//   this.hp = characterStatsOptions.hp;
//   this.name = characterStatsOptions.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class Humanoid extends CharacterStats{
	constructor(human){
		super(human);
		this.faction = human.faction;
		this.weapons = human.weapons;
		this.language = human.language;
	}
	greet(){
		return `${this.name} offers a greeting in ${this.language}.`
	}
}

// function Humanoid(humanoidOptions) {
//   CharacterStats.call(this, humanoidOptions);
//   this.faction = humanoidOptions.faction;
//   this.weapons = humanoidOptions.weapons;
//   this.language = humanoidOptions.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };


/*the objects themslves are probably fine just need to refactor the classes */

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Toungue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Toungue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
