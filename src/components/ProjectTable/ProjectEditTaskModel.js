import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  ModalBody,
  ModalFooter,
  Modal,
  ModalHeader,
} from 'reactstrap';
import PropTypes from 'prop-types';
import message from '../Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../views/form-editor/editor.scss';
import api from '../../constants/api';

const ProjectEditTaskModel = ({
  contactData,
  editTaskEditModals,
  setEditTaskEditModals,
  contact,
  employeeDetails,
}) => {
  ProjectEditTaskModel.propTypes = {
    contactData: PropTypes.object,
    editTaskEditModals: PropTypes.bool,
    setEditTaskEditModals: PropTypes.func,
    contact: PropTypes.any,
    employeeDetails: PropTypes.any,
  };

  const [taskinsert, setTaskInsert] = useState();
  const handleInputs = (e) => {
    setTaskInsert({ ...taskinsert, [e.target.name]: e.target.value });
  };

  //Logic for edit data in db

  const editContactsData = () => {
    if (
      taskinsert.title !== '' &&
      taskinsert.category !== '' &&
      taskinsert.status !== '' &&
      taskinsert.due_date !== ''
    ) {
      api
        .post('/project/editTask', taskinsert)
        .then(() => {
          message('Record editted successfully', 'success');
          //          window.location.reload();
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'warning');
    }
  };

  useEffect(() => {
    setTaskInsert(contactData);
    console.log('rafi', contactData);
  }, [contactData]);

  return (
    <>
      <Modal size="lg" isOpen={editTaskEditModals}>
        <ModalHeader>
          Edit Task
          <Button
            color="secondary"
            onClick={() => {
              setEditTaskEditModals(false);
            }}
          >
            X
          </Button>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col md="3" className="mb-4 d-flex justify-content-between"></Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  Title<span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="title"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.title}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  Status<span className="required">*</span>
                </Label>
                <Input
                  type="select"
                  onChange={(e) => {
                    handleInputs(e);
                  }}
                  value={taskinsert && taskinsert.status}
                  name="status"
                >
                  <option defaultValue="selected">Please Select</option>
                  <option value="Others">Others</option>
                  <option value="Due">Due</option>
                  <option value="Late">Late</option>
                  <option value="Complete">Complete</option>
                  <option value="Cancelled">Cancelled</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  Category<span className="required">*</span>
                </Label>
                <Input
                  type="select"
                  onChange={(e) => {
                    handleInputs(e);
                  }}
                  value={taskinsert && taskinsert.category}
                  name="category"
                >
                  <option defaultValue="selected">Please Select</option>
                  <option value="Immigration & Manpower">Immigration & Manpower</option>
                  <option value="Incorporation">Incorporation</option>
                  <option value="Others">Others</option>
                  <option value="GST">GST</option>
                  <option value="Opportunity Related">Opportunity Related</option>
                  <option value="Tax">Tax</option>
                  <option value="Accounts">Accounts</option>
                  <option value="AR Filing">AR Filing</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  Due Date<span className="required">*</span>
                </Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.due_date}
                  name="due_date"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Completed Date</Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.select_date}
                  name="select_date"
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label>Project Manager</Label>
                <Input
                  type="select"
                  name="project_manager_id"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.project_manager_id}
                >
                  <option value="selected">Please Select</option>
                  {contact &&
                    contact.map((ele) => {
                      return (
                        <option key={ele.contact_id} value={ele.first_name}>
                          {ele.first_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.description}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <Label>Alert Staff by email</Label>
              <FormGroup>
                <Input
                  type="radio"
                  name="staff_alert"
                  value="1"
                  onChange={handleInputs}
                  defaultChecked={taskinsert && taskinsert.staff_alert === 1 && true}
                ></Input>
                &nbsp;&nbsp;
                <Label>Yes</Label>&nbsp;&nbsp;
                <Input
                  type="radio"
                  name="staff_alert"
                  value="0"
                  onChange={handleInputs}
                  defaultChecked={taskinsert && taskinsert.staff_alert === 0 && true}
                ></Input>
                &nbsp;&nbsp;
                <Label>No</Label>
              </FormGroup>
            </Col>
            <Col md="4">
              <Label>Alert Project Manager when complete</Label>
              <FormGroup>
                <Input
                  type="radio"
                  name="project_manager_alert"
                  value="1"
                  onChange={handleInputs}
                  defaultChecked={taskinsert && taskinsert.project_manager_alert === 1 && true}
                ></Input>
                &nbsp;&nbsp;
                <Label>Yes</Label>&nbsp;&nbsp;
                <Input
                  type="radio"
                  name="project_manager_alert"
                  value="0"
                  onChange={handleInputs}
                  defaultChecked={taskinsert && taskinsert.project_manager_alert === 0 && true}
                ></Input>
                &nbsp;&nbsp;
                <Label>No</Label>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Employee Linked</Label>
                <Input
                  type="select"
                  name="employee_id"
                  onChange={handleInputs}
                  value={taskinsert && taskinsert.employee_id}
                >
                  <option value="selected">Please Select</option>
                  {employeeDetails &&
                    employeeDetails.map((ele) => {
                      return (
                        <option key={ele.employee_id} value={ele.first_name}>
                          {ele.first_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Row>
            <div className="pt-3 mt-3 d-flex align-items-center gap-2">
              <Button
                color="primary"
                onClick={() => {
                  editContactsData();
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setEditTaskEditModals(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ProjectEditTaskModel;
