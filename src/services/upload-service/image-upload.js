import S3 from 'aws-sdk/clients/s3';
// @ts-ignore
const key = require('../config/bucket');

var aid = key.AWSAccessKeyId;
var skey = key.AWSSecretKey;
var regn = key.region;
export class ImageserviceService {


  //function of uplozzad image to the server
  uploadfile = (file, fname) => {
    const bucket = new S3(
      {
        accessKeyId: this.aid,
        secretAccessKey: this.skey,
        region: this.regn
      }
    );

    const params = {
      Bucket: 'creative-red',
      Key: fname,
      Body: file
    };

    //get respond of the server
    bucket.upload(params, function (err, data) {
      if (err) {
        alert('There was an error uploading your file: ' + err);
        return false;
      }

      alert('Successfully uploaded file.');
      return true;
    });
  }
}
