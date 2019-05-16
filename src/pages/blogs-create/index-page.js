import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import EmailEditor from '../../../node_modules/react-email-editor';
import { HeaderComponent } from '../../components';
import Editor from './cropper';
import { styles } from './styles';
const Blogservice = require('../../services/blog-service/blog-service');
const HTMLDecoderEncoder = require("html-encoder-decoder");
const generator = require('generate-password');
const sample = require('../../assets/sample.json');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #cfd8dc;
  color: #FFF;
  display: flex;
  max-height: 100px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 0px;
    max-width: 250px;
    cursor: pointer;
  }
  `
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');


class BlogCreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      file: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.recieveData = this.recieveData.bind(this);

  }
  // recieveData = (file )=> {
  //   console.log('image file :'+file);
  //   const imageName = file[0].name
  //   console.log(imageName)
  //   this.setState({ file })
  // }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = (e) => event => {
    this.setState({
      [e]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Create Blog' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            <Bar>
              <h1> </h1>
              <Button variant="contained" size="medium" color="primary" className={classes.buttons} onClick={this.saveDesign}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save Design
              </Button>
              <Button variant="contained" size="medium" color="primary" className={classes.buttons} onClick={this.openModal}>
                Publish Blog
                <CloudUploadIcon className={classes.rightIcon} />
              </Button>
            </Bar>
            <Container>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                closeTimeoutMS={2000}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div
                  className="inner-container"
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                  <React.Fragment>
                    <Editor />
                  </React.Fragment>

                  <TextField
                    id="outlined-name"
                    label="Title"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('Title')}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Summary"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('Summary')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-name"
                    label="keyword"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('Keyword')}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div id="parent-div-button">
                  <Button variant="contained" color="primary" id="modal-button-save" className="button-container" onClick={this.submitButtonHandler}>
                    Submit
                  </Button>
                </div>
              </Modal>
              <EmailEditor
                ref={editor => this.editor = editor}
                minHeight='820px'
              />
            </Container>
          </Typography>
        </main>
      </div>
    );
  }

  toggleModal = () => {
    this.setState({
      modelIsOpen: false
    });
  }

  submitButtonHandler = () => {
    this.exportHtml();
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      var details = JSON.parse(localStorage.getItem('auth'));
      var imagename = localStorage.getItem('imageName')
      const HTML = HTMLDecoderEncoder.encode(html);
      const jsonob = {
        "topic": this.state.Title,
        "author": 'Shaliya',
        "image_url": imagename,
        "summary": this.state.Summary,
        "jsonfile": design,
        "keywords": this.state.Keyword,
        "htmlcode": HTML
      }
      this.saveblog(jsonob);
    })
  }
  saveDesign = () => {
    this.editor.saveDesign(design => {
      localStorage.getItem('imageName')
      // var details = JSON.parse(localStorage.getItem('auth'));
      // this.openModal();
    })
  }
  onLoad = () => {
    this.editor.loadDesign(sample)
  }
  onDesignLoad = (data) => {
    console.log('onDesignLoad', data)

  }

  saveblog = (jsonob) => {
    axios.post('http://52.14.12.67:8080/api/blog/save', jsonob
    ).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
    console.log(jsonob);
  }
}


export const BlogCreatePage = withStyles(styles)(BlogCreateIndex);
