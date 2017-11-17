import React, { Component } from 'react';
import { Upload, Button, Icon, message, Modal } from 'antd';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateProfileImageDispatch } from "../../../../actions";

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      fileList: [],
      uploading: false,
      visibleImageUploadModal: false
    }
  }

  handleUpload = () => {
    const self = this;
    var resolvePromise = {};
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      console.log(file);
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    if (fileList.length > 0);
    {
      var fileToLoad = fileList[0];
      var fileReader = new FileReader();

      this.setState({
        fileList: [],
        uploading: false,
        visibleImageUploadModal: false,
      });
      fileReader.onload = function(fileLoadedEvent)
      {
        const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
        const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
        resolvePromise = self.props.updateProfileImageDispatch(logoutPayloadHeader, fileReader.result);
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  showUploadModal = (props) => {
    this.setState({
      visibleImageUploadModal: true
    });
  }

  handleCancelUpload = () => {
    this.setState({
      visibleImageUploadModal: false,
    });
  }

  render() {
    const { uploading } = this.state;
    const props = {
      accept: "image/*",
      action: 'http://13.126.41.88/applicants/profile/picture',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    return (
      <div className="profile-pic-uploadButton" >
        <Modal className="card-header-background"
            title="Profile Pic"
            visible={this.state.visibleImageUploadModal}
            confirmLoading={this.state.confirmLoading}
            footer={[
              <Button key="back" size="large" onClick={this.handleCancelUpload}>Cancel</Button>,
              <Button
                className="upload-demo-start"
                type="primary"
                onClick={this.handleUpload}
                disabled={this.state.fileList.length === 0}
                loading={this.state.uploading}
              >
                {this.state.uploading ? 'Uploading' : 'Start Upload' }
              </Button>
            ]}
            width={'70%'}
          >
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload your Profile Pic
            </Button>
          </Upload>
        </Modal>
        <Button type="primary" id="upload_profile_pic" onClick={this.showUploadModal}> Upload Image </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { applicantsProfilePayload: state.applicants};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateProfileImageDispatch:updateProfileImageDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(ImageUpload);
