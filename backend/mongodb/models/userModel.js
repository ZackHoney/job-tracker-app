const User = require('./models.js');

const newUser = new User({
    name: 'Zack',
    email: 'example@email.com',
    password: "7410"
});

newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user:', err))