import mongoose from "mongoose";
import connectToMongo from "./db.js";
import Word from "../models/Word.js";


connectToMongo();
//console.log("a")
const db = mongoose.connection;
//console.log("a")
db.on('error', console.error.bind(console, 'connection error:'));
//console.log("a")

db.once('open', () => {
    //console.log("a")
  console.log('Connected to the database');
  
  const users = [
    { name: 'apple', meaning: 'A fruit that is red or green and has a sweet taste.', hint: 'It is a fruit.' },
  { name: 'grape', meaning: 'A small, round, purple or green fruit that grows in clusters.', hint: 'It grows in clusters.' },
  { name: 'melon', meaning: 'A large, round fruit with a hard rind and sweet, juicy flesh.', hint: 'It has a hard rind.' },
  { name: 'peach', meaning: 'A soft, juicy fruit with a fuzzy skin and a pit in the center.', hint: 'It has a fuzzy skin.' },
  { name: 'lemon', meaning: 'A sour, yellow citrus fruit.', hint: 'It is sour.' },
  { name: 'mango', meaning: 'A tropical fruit with a sweet, juicy orange flesh.', hint: 'It is tropical.' },
  { name: 'plumb', meaning: 'A tool used to measure depth or vertical alignment.', hint: 'It is a tool.' },
  { name: 'grill', meaning: 'A device for cooking food over an open flame.', hint: 'It cooks food.' },
  { name: 'shark', meaning: 'A large fish with sharp teeth and a fin on its back.', hint: 'It is a large fish.' },
  { name: 'piano', meaning: 'A musical instrument with black and white keys.', hint: 'It has keys.' },
  { name: 'beach', meaning: 'A sandy shore by the ocean.', hint: 'It is by the ocean.' },
  { name: 'truck', meaning: 'A large vehicle used for transporting goods.', hint: 'It transports goods.' },
  { name: 'chair', meaning: 'A piece of furniture for sitting.', hint: 'It is for sitting.' },
  { name: 'table', meaning: 'A piece of furniture with a flat top and legs.', hint: 'It has legs.' },
  { name: 'sheep', meaning: 'An animal with thick wool.', hint: 'It has wool.' },
  { name: 'brush', meaning: 'A tool with bristles used for painting or cleaning.', hint: 'It has bristles.' },
  { name: 'candy', meaning: 'A sweet treat made with sugar.', hint: 'It is sweet.' },
  { name: 'drink', meaning: 'A liquid that can be consumed.', hint: 'It can be consumed.' },
  { name: 'stone', meaning: 'A hard, solid substance found in nature.', hint: 'It is hard.' },
  { name: 'brave', meaning: 'Showing courage.', hint: 'It means courageous.' },
  { name: 'sword', meaning: 'A weapon with a long metal blade.', hint: 'It is a weapon.' },
  { name: 'cloud', meaning: 'A mass of condensed water vapor in the sky.', hint: 'It is in the sky.' },
  { name: 'flame', meaning: 'A hot, glowing body of ignited gas.', hint: 'It is hot.' },
  { name: 'bread', meaning: 'A food made from flour and water, usually baked.', hint: 'It is baked.' },
  { name: 'grace', meaning: 'Simple elegance or refinement of movement.', hint: 'It signifies elegance.' },
  { name: 'bliss', meaning: 'Perfect happiness; great joy.', hint: 'It means great joy.' },
  { name: 'storm', meaning: 'A violent disturbance of the atmosphere.', hint: 'It is a violent weather event.' },
  { name: 'globe', meaning: 'The earth.', hint: 'It represents the earth.' },
  { name: 'flock', meaning: 'A number of birds of one kind feeding, resting, or traveling together.', hint: 'It is a group of birds.' },
  { name: 'crisp', meaning: 'Firm, dry, and brittle, especially in a way considered pleasing or attractive.', hint: 'It means firm and brittle.' },
  { name: 'fresh', meaning: 'Newly made or obtained; not canned, frozen, or otherwise preserved.', hint: 'It means newly made.' },
  { name: 'frost', meaning: 'A deposit of small white ice crystals formed on the ground or other surfaces.', hint: 'It forms on cold surfaces.' },
  { name: 'grove', meaning: 'A small wood, orchard, or group of trees.', hint: 'It is a group of trees.' },
  { name: 'haunt', meaning: 'A place frequented by a specified person or group of people.', hint: 'It means a frequently visited place.' },
  { name: 'quilt', meaning: 'A warm bed covering made of padding enclosed between layers of fabric and kept in place by lines of stitching.', hint: 'It is a bed covering.' },
  { name: 'knack', meaning: 'An acquired or natural skill at performing a task.', hint: 'It means a skill.' },
  { name: 'latch', meaning: 'A metal bar with a catch and lever used for fastening a door or gate.', hint: 'It is used to fasten a door.' },
  { name: 'pivot', meaning: 'The central point, pin, or shaft on which a mechanism turns or oscillates.', hint: 'It is a central point.' },
  { name: 'ridge', meaning: 'A long, narrow hilltop, mountain range, or watershed.', hint: 'It is a long narrow hilltop.' },
  { name: 'whisk', meaning: 'Take or move (someone or something) in a particular direction suddenly and quickly.', hint: 'It means to move quickly.' },
  { name: 'yacht', meaning: 'A medium-sized sailboat equipped for cruising or racing.', hint: 'It is a type of boat.' },
  { name: 'zonal', meaning: 'Of or relating to a zone or zones.', hint: 'It pertains to zones.' },
  { name: 'abide', meaning: 'Accept or act in accordance with (a rule, decision, or recommendation).', hint: 'It means to comply.' },
  { name: 'blend', meaning: 'Mix (a substance) with another substance so that they combine together as a mass.', hint: 'It means to mix together.' },
  { name: 'chant', meaning: 'Say or shout repeatedly in a singsong tone.', hint: 'It means to sing repeatedly.' },
  { name: 'amber', meaning: 'A fossilized tree resin often used in jewelry.', hint: 'It is a tree resin.' },
  { name: 'cello', meaning: 'A large stringed instrument played with a bow.', hint: 'It is a stringed instrument.' },
  { name: 'flute', meaning: 'A musical instrument typically made of metal or wood, played by blowing across a hole at one end or through a mouthpiece.', hint: 'It is played by blowing.' },
  { name: 'ivory', meaning: 'A hard, creamy-white material made from the tusks of elephants and other animals, used for carving and jewelry.', hint: 'It is made from tusks.' },
  { name: 'maple', meaning: 'A tree or shrub with lobed leaves, winged fruits, and colorful autumn foliage, grown as an ornamental or for its timber or syrupy sap.', hint: 'It is a type of tree.' },
  { name: 'ozone', meaning: 'A form of oxygen with three oxygen atoms in each molecule, formed from oxygen by electrical discharges or ultraviolet light.', hint: 'It is a form of oxygen.' },
  { name: 'radar', meaning: 'A system for detecting the presence, direction, distance, and speed of aircraft, ships, and other objects, by sending out pulses of high-frequency electromagnetic waves that are reflected off the object back to the source.', hint: 'It detects objects.' },
  { name: 'sonic', meaning: 'Of, relating to, or using sound waves.', hint: 'It relates to sound waves.' },
  { name: 'tulip', meaning: 'A bulbous spring-flowering plant of the lily family, with boldly colored cup-shaped flowers.', hint: 'It is a spring-flowering plant.' },
  { name: 'volti', meaning: 'A large choral work typically involving soloists, choir, and orchestra.', hint: 'It is a choral work.' }
  ];
  try{
    Word.insertMany(users)
    .then((docs) => {
      console.log('Data successfully inserted');
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error inserting data:', err);
      mongoose.connection.close();
    });
  }
  catch(err){
    console.log(err)
  }
  
});
