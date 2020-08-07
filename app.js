const db = require('./models')

// db.user.create({
//     firstName: 'Kevin',
//     lastName: 'Kevinson',
//     age: 46,
//     email: 'kevinlavidaloca@email.com'
// });

//searching through database by key and value
    //id
db.user.findOne({
    where: { id: 1 }
}) .then(user => {
    console.log(user.dataValues);
})
    //first name
db.user.findOne({
    where: { firstName: 'Kevin'}
}).then(user => {
    console.log(user.dataValues);
})
    // email
db.user.findOne({
    where: { email: 'shaneshaneshane@email.com'}
}).then(user => {
    console.log(user.dataValues);
})

db.user.findOrCreate({
    where: {
        firstName: 'Joe',
        lastName: 'Joeson'
    },
    defaults: { age: 99, email: 'jojo@email.com'}
}).then(([user, created]) => {
    console.log(`This was created on ${created}`)
    console.log(user.dataValues)
})

let queryOne ={
    where: {
        firstName: 'John',
        lastName: 'Smith'
    },
    defaults: { age: 25, email: 'jsjs@email.com'}
};

db.user.findOrCreate(queryOne)
.then(([user, created])=>{
    console.log(created);
    console.log(user.dataValues)
})

db.user.findAll().then(users => {
    users.forEach(u => {
        console.log(u.firstName);
    })
});
