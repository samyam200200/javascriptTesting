/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
//importing Backpack class from Backpack.js
import Backpack from "./Backpack.js";
import GalaxyBuds from "./GalaxyBuds.js";

//creating new Backpack object
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

//creating new GalaxyBuds object
const galaxyBuds = new GalaxyBuds(2, "white", "white", 50, 100, false);

console.log(everydayPack);
console.log(galaxyBuds);
