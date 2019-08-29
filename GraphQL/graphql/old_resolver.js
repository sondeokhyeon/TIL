import {hobby, people, getPeopleId, getHobby, getByid, getMovies, addMovie, deleteMovie}  from "./db"

const resolvers = {
    Query : {
        people: () => people,
        getPeopleId: (_, {id} ) => getPeopleId(id),
        hobby: () => hobby,
        gethobby: (_, {title} )=> {
            return getHobby(title)
        },
        movies: () => getMovies(), 
        movie: (_, {id}) => {
            getByid(id)
        },
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;