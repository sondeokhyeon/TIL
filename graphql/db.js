export const people = [
    {
       id : "0",
       name : "43",
       age: 15,
       gender : "female"
   },
   {
       id : "1",
       name : "12",
       age: 20,
       gender : "male"
   },
   {
       id : "2",
       name : "22",
       age: 18,
       gender : "female"
   },
   {
       id : "3",
       name : "321",
       age: 28,
       gender : "male"
   },
   {
       id : "4",
       name : "123",
       age: 12,
       gender : "female"
   },
]

export const hobby = [
    {
       id : "0",
       title : "game",
   },
   {
       id : "1",
       title : "bycle",
   },
   {
        id : "2",
        title : "study",
   },
   {
        id : "3",
        title : "fishing",
   },
]

export const getPeopleId = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}

export const getHobby = title => {
    const rst = hobby.filter(hobby => hobby.title === title) 
    return rst[0]
}

    
let movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
  ];

  export const getMovies = () => movies;

  export const getByid = id => {
      const filterMovies = movies.filter(movie => movie.id === String(id))
      return filterMovies[0]
  }

  export const deleteMovie = (id) => {
      const cleanedMovies = movies.filter(movie => movie.id !== String(id));
        if(movies.length > cleanedMovies) {
            movies = cleanedMovies;
            return true;
        } else {
            return false;
        }
  }

  export const addMovie = (name, score) => {
      const newMovie = {
          id: `${movies.length + 1}`,
          name,
          score
      }
      movies.push(newMovie);
      return newMovie;
  }