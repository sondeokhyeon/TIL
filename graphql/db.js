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

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}

