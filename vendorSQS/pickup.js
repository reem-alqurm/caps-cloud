

'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();
const faker = require('faker');

const topic = 'arn:aws:sqs:us-east-1:841146928289:vendor';
// const orderItem = process.env[2];

const order = {
  orderId: faker.random.uuid(),
  customer: faker.name.findName(),
  vendorId: 'https://sqs.us-east-1.amazonaws.com/841146928289/vendor'
}


const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

setInterval(() => {

  sns.publish(params).promise().then(console.log).catch(console.error);

}, 5000);