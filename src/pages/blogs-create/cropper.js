import S3 from 'aws-sdk/clients/s3';
import React from 'react';
import '../../pages/blogs-create/style.css';
const key = require('../../config/bucket');
import Swal from 'sweetalert2'

var aid = key.AWSAccessKeyId;
var skey = key.AWSSecretKey;
var regn = key.region;

const generator = require('generate-password');
const img = <img src={require('../../assets/blog.png')} />

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: img,
            imagePreviewUrl: '',
            isVisible: false,
        }
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            console.log('handle uploading: ', this.state.file);
            // this.props.recieveData(this.state.file);
            this.cahngename(this.state.file);
        }
        reader.readAsDataURL(file);

        if (file !== null) {
            e.preventDefault();
            // TODO: do something with -> this.state.file
        }
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            // eslint-disable-next-line jsx-a11y/alt-text
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">{this.state.file}</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <label className="fileContainer">
                        <input
                            className="custom-file-input"
                            type="file"
                            onChange={(e) => this._handleImageChange(e) }
                        />
                    </label>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        );
    }

    cahngename = (file) => {
        console.log(file.name)
        var name = generator.generate({
            length: 10,
            numbers: true
        });
        console.log(aid + " {} " + skey + " {} " + regn);
        this.uploadfile(file, name + file.name);
    }

    uploadfile = (file, fname) => {
        const bucket = new S3(
            {
                accessKeyId: aid,
                secretAccessKey: skey,
                region: regn
            }
        );

        const params = {
            Bucket: 'inhalo-media',
            Key: fname,
            Body: file
        };

        //get respond of the server
        bucket.upload(params, function (err, data) {

            if (err) {
                const error = console.log('print error : ' + err);
                Swal.fire({
                    title: 'Error',
                    text: error,
                    type: 'error',
                    confirmButtonText: 'Cool'
                })
                // alert('There was an error uploading your file: ' + err);
                return false;
            }
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
            //alert('Successfully uploaded file.');
            console.log('Successfully uploaded file.');
            // eslint-disable-next-line jsx-a11y/alt-text
            console.log(data.key);
            localStorage.setItem('imageName', data.key);
            return true;
        });
    }
}

export default Editor;