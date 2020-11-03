// use  \r  command
//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const signList = ["|","/","-","\\"]; 
let time = 100; 
for (const sign of signList) {
  setTimeout(() => {
    process.stdout.write('\r'+sign+'   ');
  },time );
    time += 200;
}

  /*
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  // ... fill in the rest yourself ... 

  
  */