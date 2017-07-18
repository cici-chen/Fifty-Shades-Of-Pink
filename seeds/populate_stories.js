
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
          image:"images/bookcover1.jpg",
          description:"You meet a mysterious client who is in fact famous while doing your friend a favor, you find a surprising connection and a complicated relationship begins...",
          storyUrl:"#/stories/fifty-shades-of-pink/1",
          total_chapters:4,
          author: "Daisy Door",
          publish_date:"2017/05/04",
          status:"new chapter every Monday"
        },
        {
          id:2,
          name:"hotel-room",
          title:"Hotel Room",
          image:"images/bookcover2.jpg",
          description:"The hotel room was a white dream of cleanliness. The coolness of the air conditioner tickled your skin as you lay on the soft mattress, surrounded by pillows, sinking further into the thick, downy duvet...",
          storyUrl:"#/stories/hotel-room/1",
          total_chapters:2,
          author: "Verity Sweet",
          publish_date:"2017/05/04",
          status:"finished",
          source:"http://www.classyeroticstories.com/erotica-short-stories8.html"
        },
        {
          id:3,
          name:"behind-the-mask",
          title:"Behind the Mask",
          image:"images/bookcover3.jpg",
          description:"A millionaire's party + a sexy stranger in disguise = one wild night ...",
          storyUrl:"#/stories/behind-the-mask/1",
          total_chapters:4,
          author: "Millie Perry",
          publish_date:"2017/05/04",
          status:"finished",
          source:"http://www.cosmopolitan.com/uk/love-sex/sex/a31976/erotic-fiction-story-behind-mask/"
        },
        {
          id:4,
          name:"under-the-covers",
          title:"Under The Covers",
          image:"images/bookcover4.jpg",
          description:"You're dancing on your own for a minute when you feel a hand on your waist. You don't even have to look round to know that it's him and you surprise yourself by feeling a surge of electricity crackle from the spot where he's touching you lightly.",
          storyUrl:"#/stories/behind-the-mask/1",
          total_chapters:3,
          author: "Alicia Fox",
          publish_date:"2017/06/04",
          status:"finished",
          source:"http://www.cosmopolitan.com/uk/love-sex/sex/a32085/erotic-fiction-story-under-covers/"
        }
      ]);
    });
};
