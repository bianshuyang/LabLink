This project is developed by npm. You need to install npm with brew on mac, or use an installer following npm's best practices here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Once done, you should do: `npm install` by toggling to the downloaded GitHub package to get all dependencies. Without them you will get a bunch of errors.

If you would like to continue without a database, feel free to interact with the following features: 404 page, Home page, chatbot, and contact page might partially work without a database connection.

If you would like to setup a connection to the database, you must do so via mongodb. Either send an email using the contact page to our team, or you will have to set up the database as instructed in the database documentation. Once you set up a mongodb connection, you can deploy or run the entire application without concern. Note: to ensure that your application is connected to database, you must add an environment variable that is hidden. For best practices, I encourage you to use Vercel to add hidden secrets. We currently offer: LabLink database mongodb connection, LabLink email password, and LabLink jsonwebtoken upon request and review.

You can set up an appointment to use these data by sending an email to sbian8@emory.edu for more information on full cloning of the website. 

Once all set, you could locally preview our project at: `vercel dev`, which essentially is an npm start, albeit with more functions.
