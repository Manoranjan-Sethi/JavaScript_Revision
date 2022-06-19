let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
var op = users.filter(function(em){
  return em.place == "Banglore";
}).map(function(em){
  return em.firstName + " " + em.lastName;
});
console.log(op)