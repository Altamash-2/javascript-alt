// objects inside array

let blocklist = [
  {
    userName: 'john',
    reason: 'abusive content',
  },
  {
    userName: 'sam',
    reason: 'copyright content',
  },
];
console.log(blocklist);
for (let i = 0; i < blocklist.length; i++) {
  console.log(
    `user ${blocklist[i].userName} blocked due to this reason ${blocklist[i].reason}`
  );
}
