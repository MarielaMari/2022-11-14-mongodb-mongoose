import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config ();

async function main () {
  console.log (process.env.MONGODB_USER);

  await mongoose.connect (process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_NAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  });

  const personSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    age: Number,
  });

  const Person = mongoose.model ('Person', personSchema);

  const bob = new Person ({
    firstName: 'Bob',
    lastName: 'Developer',
    age: 89,
  });

  await bob.save ();
}

main ().catch (err => console.error (err));
