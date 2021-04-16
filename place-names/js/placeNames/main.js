const main = () => {
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

  console.log("All Place Names:");
  console.log("----------------");
  names.map(name => console.log(name));

  // console.log a blank char to separate the lists
  console.log('\n');

  const theNames = names.filter(str => str.startsWith("The"));
  console.log("'The' Place Names:");
  console.log("----------------");
  theNames.map(theName => console.log(theName));
}

main();
