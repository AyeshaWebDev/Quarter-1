
const current_users:string[] = ['John', 'Alice', 'Eric', 'Sarah', 'Mike'];
const new_users:string[] = ['Mark', 'Sarah', 'Alice', 'David', 'Linda'];

for (const new_username of new_users) {
  const isUsernameTaken = current_users.some((current_username) =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Sorry, the username "${new_username}" is already taken. Please enter a new username.`);
  } else {
    console.log(`The username "${new_username}" is available.`);
  }
}