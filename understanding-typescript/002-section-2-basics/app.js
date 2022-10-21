var Role;
(function (Role) {
  Role['ADMIN'] = 'ADMIN';
  Role['READ_ONLY'] = 'READ_ONLY';
  Role['AUTHOR'] = 'AUTHOR';
})(Role || (Role = {}));
var user = {
  name: 'Shannon',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
console.log(user);
