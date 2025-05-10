function addEmployee(){
    // create the user object and give the role
    const user = {
        firstName: 'Rory',
        lastName: 'Millar',
        role: 'Admin'
    }
 
    // add the new user to the database - and log out the response or error
    axios.post('/user', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
function addManager(){
    // create the user object and give the role
    const user = {
        firstName: 'James',
        lastName: 'Marley',
        role: 'Admin'
    }
    // add the new user to the database - and log out the response or error
    axios.post('/users', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
function addAdmin(){
    // create the user object and give the role
    const user = {
        firstName: 'Gary',
        lastName: 'Judge',
        role: 'Admin'
    }
 
    // add the new user to the database - and log out the response or error
    axios.post('/user', user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}