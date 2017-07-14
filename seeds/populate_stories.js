
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          id:1,
          name:"fifty-shades-of-pink",
          title:"Fifty Shades of Pink",
          image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/beaconBB138.jpg",
          description:"The hotel room was a white dream of cleanliness. The coolness of the air conditioner tickled Ariel’s skin as she lay on the soft mattress, surrounded by pillows, sinking further into the thick, downy duvet. The blanket puffed up around her, as if she were floating on a cloud.",
          storyUrl:"#/stories/fifty-shades-of-pink/1",
          total_chapters:2
        },
        {
          id:2,
          name:"hotel-room",
          title:"Hotel Room",
          image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/hereis-GM0218.jpg",
          description:"It was hard to hear over the music, and Kelly thought she’d heard wrong. A Jager buzz verging on full-out drunk combined with the flashing lights, throbbing bass and cigarette smoke hanging in the air made the world feel as if it were turning upside down.",
          storyUrl:"#/stories/hotel-room/1",
          total_chapters:2
        },
        {
          id:3,
          name:"behind-the-mask",
          title:"Behind the Mask",
          image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/softcoverB0890.jpg",
          description:"bby swirled the amber liquid in her glass. It was a fine scotch, full of aroma and spice. A nice finish, not much kick on the back end - overall very smooth. She always felt sexy drinking it. It made her very aware of the way the silky, navy blue fabric felt on her skin.",
          storyUrl:"#/stories/behind-the-mask/1",
          total_chapters:4
        },
        {
          id:4,
          name:"behind-the-mask",
          title:"Behind the Mask",
          image:"http://www.victoriajanssen.com/wp-content/uploads/2011/08/softcoverB0890.jpg",
          description:"bby swirled the amber liquid in her glass. It was a fine scotch, full of aroma and spice. A nice finish, not much kick on the back end - overall very smooth. She always felt sexy drinking it. It made her very aware of the way the silky, navy blue fabric felt on her skin.",
          storyUrl:"#/stories/behind-the-mask/1",
          total_chapters:3
        }
      ]);
    });
};
