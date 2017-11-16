import React, { Component } from 'react';
import { Form, Input, Select, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const registeredTeacherPayload = [
    {
      'value': 'no',
      'text':'No'
    },
    {
      'value':'yes',
      'text':'Yes'
    }
]
const registeredTeacherOptions = registeredTeacherPayload.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>);

class ExtraInfoBasicForm extends Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    const { registered_teacher='no', total_relevant_experience=1, can_coach_activities='',
              interests='', skills='', other_experiences='', comments=''  } = this.props.extraInfoDetails;

    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="Are you a registered teacher in your home country?"
          >
            {getFieldDecorator('registered_teacher', { initialValue: registered_teacher ? 'yes' : 'no' })(
              <Select style={{ width: 220 }}>
                {registeredTeacherOptions}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Total number of years of full-time relevant/teaching experience"
          >
            {getFieldDecorator('total_relevant_experience', { initialValue: total_relevant_experience })(
              <InputNumber min={1} max={10} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Activities you can lead or coach"
          >
            {getFieldDecorator('can_coach_activities', { initialValue: can_coach_activities })(
              <Input.TextArea rows={4} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Interests"
          >
            {getFieldDecorator('interests', { initialValue: interests })(
              <Input.TextArea rows={4} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Skills"
          >
            {getFieldDecorator('skills', { initialValue: skills })(
              <Input.TextArea rows={4} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Experiences"
          >
            {getFieldDecorator('other_experiences', { initialValue: other_experiences })(
              <Input.TextArea rows={4} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Comments"
          >
            {getFieldDecorator('comments', { initialValue: comments })(
              <Input.TextArea rows={4} />
            )}
          </FormItem>

        </Form>
    );
  }
}

export default Form.create()(ExtraInfoBasicForm);
