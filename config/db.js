import mongoose from 'mongoose';

class Mongo {
  static connect() {
    const mongoURI = process.env.MONGO_URI;

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
      console.log('Mongoose is connected');
    });
  }
}

export default Mongo;