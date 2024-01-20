import { createClient } from 'redis';

export default async (option) => {
    const client = createClient({
        username: option.USERNAME, // use your Redis user. More info https://redis.io/docs/management/security/acl/
        password: option.PASSWORD, // use your password here
        socket: {
            host: option.HOST,
            port: option.PORT,
            // tls: true,
            // key: readFileSync('./redis_user_private.key'),
            // cert: readFileSync('./redis_user.crt'),
            // ca: [readFileSync('./redis_ca.pem')]
        }
    });

    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();


    await client.set('key', '123123');
    const value = await client.get('key');
    console.log(value);
    // await client.disconnect();

    return client;
}
