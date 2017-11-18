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

  onImageRemovedFromList = (file) => {
    this.setState(({ fileList }) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList,
      };
    });
  }

  beforeImageUpload = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    else {
      this.setState(({ fileList }) => ({
        fileList: [...fileList, file],
      }));
    }
    return false;
  }

  handleImageChange = (info) => {
    let fileList = info.fileList;
    //allowing only one file per upload...
    fileList = fileList.slice(-1);
    const isLt2M = fileList[0].size / 1024 / 1024 < 2;
    if (isLt2M) {
      this.setState({ fileList });
    }
  }

  render() {
    const { uploading } = this.state;
    const uploadImageProps = {
      accept: "image/*",
      action: 'http://13.126.41.88/applicants/profile/picture',
      onRemove: this.onImageRemovedFromList,
      beforeUpload: this.beforeImageUpload,
      onChange: this.handleImageChange,
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
          <Upload {...uploadImageProps}>
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
