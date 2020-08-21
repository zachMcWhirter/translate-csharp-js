function main() {
  // Put your code here
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

  console.log("All place names");

  for (let name of names) {
    console.log(name)
  };
  console.log('\n');
  console.log("'The' Place Names");


  names.filter(name => {
    if (name.startsWith("The")) {
      console.log(name);
    }
  });



  for (let name of theNames) {
    console.log(name);
  }
}

main();