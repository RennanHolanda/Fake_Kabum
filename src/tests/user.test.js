const { User } = require('../models');

async function getAllUsers(){ 
    const users = await User.findAll();
    console.log(users);
}

getAllUsers();
