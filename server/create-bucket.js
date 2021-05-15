// Load the AWS SDK for Node.js, which allows the application to communicate
// with the web service.
const AWS = require('aws-sdk');

// Import the UUIDV4 package so we can create a unique S3 bucket name
const { v4: uuidv4 } = require('uuid');

// Configure the region (the region must be updated to communicate with the 
// web service).
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the object that assigns metadata for the bucket. 
var bucketParams = {
    Bucket : "user-images-" + uuidv4()
  };

  // call S3 to create the bucket, using the parameters just set.
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success");
    }
  });