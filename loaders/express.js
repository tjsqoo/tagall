// import * as bodyParser from 'body-parser';
// import * as cors from 'cors';
import express from 'express';

export default async (option) => {
    const app = express();
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    //   app.enable('trust proxy');

    //   app.use(cors());
    //   app.use(require('morgan')('dev'));
    //   app.use(bodyParser.urlencoded({ extended: false }));
    app.listen(option.PORT, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Your server is ready ${option.PORT}!`);
      });

    return app;
}