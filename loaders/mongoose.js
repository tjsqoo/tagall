import * as mongoose from 'mongoose'


export default async (option) => {
    const connection = await mongoose.connect(option.DATABASE_URL, { useNewUrlParser: true });
    return connection.connection.db;
}