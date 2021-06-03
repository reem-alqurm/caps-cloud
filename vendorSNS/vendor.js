'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/841146928289/pickup',
  handleMessage: handler
});

function handler(message) {
  console.log(message);
}

app.on('error', (err) => {
  console.error(err.message);
});
app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();