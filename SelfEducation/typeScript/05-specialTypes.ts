// very strange type
// i no have idea where we can use it
enum Job {
  Frontend,
  Backend = 51,
  Designer
}

const job: Job = Job.Frontend

console.log(job); // 0


const job2: Job = Job.Designer

console.log(job2); // 52

// for functions that returns nothing but continue working
// ts have :never
// using in functions for error throwing
function throwNewErr(err:string): never {
  throw new Error(err)
}

// if someday you need make null in your variable
// you can do like this
let nullNumber: number | null = 20;
nullNumber = null