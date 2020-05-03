use film_hub;
db.dropDatabase();

db.films.insertMany([
  {
    title: "Moonrise Kingdom",
    genre: "Comedy/Drama",
    rating: "PG-13",
    release_date: "29/06/2012",
    runtime: 94,
    crew: {
      director: "Wes Anderson",
      producer: "Wes Anderson"
    }
  },
  {
    title: "When Harry Met Sally",
    genre: "Romance-Comedy",
    rating: "15",
    release_date: "21/07/1989",
    runtime: 95,
    crew: {
      director: "Rob Reiner",
      producer: "Nora Ephron"
    }
  },
  {
    title: "Shutter Island",
    genre: "Thriller/Mystery",
    rating: "15",
    release_date: "19/02/2010",
    runtime: 128,
    crew: {
      director: "Martin Scorsese",
      producer: "Chris Brigham"
    }
  },
  {
    title: "Lady Bird",
    genre: "Drama/Comedy",
    rating: "15",
    release_date: "01/12/2017",
    runtime: 94,
    crew: {
      director: "Greta Gerwig",
      producer: "Eli Bush"
    }
  }
])
