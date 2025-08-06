import React from 'react';
import {
  Row,
  Form,
  ModalFooter,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Label,
  Input,
  Col,
  FormGroup,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

export default function ProjectTaskTab({
  setContactDatas,
  setEditTaskEditModals,
  taskDetails,
  addContactToggles,
  addContactModals,
  handleAddNewTask,
  newTaskData,
  AddNewTask,
  incharge,
  deleteRecordTask,
  employeeDetails,
}) {
  ProjectTaskTab.propTypes = {
    setContactDatas: PropTypes.func,
    setEditTaskEditModals: PropTypes.func,
    taskDetails: PropTypes.any,
    addContactToggles: PropTypes.func,
    addContactModals: PropTypes.bool,
    handleAddNewTask: PropTypes.func,
    newTaskData: PropTypes.object,
    AddNewTask: PropTypes.func,
    incharge: PropTypes.any,
    deleteRecordTask: PropTypes.any,
    employeeDetails: PropTypes.any,
  };
  //  Table Contact
  const columns = [
    {
      name: '#',
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Del',
      selector: 'delete',
      cell: () => <Icon.Trash />,
      grow: 0,
      width: 'auto',
      wrap: true,
    },
    {
      name: 'Title',
    },
    {
      name: 'Status',
    },
    {
      name: ' Due Date',
    },
    {
      name: 'Completed date',
    },
    {
      name: 'Employee Linked',
    },
  ];
  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button color="primary" className="shadow-none" onClick={addContactToggles.bind(null)}>
              Add New Task{' '}
            </Button>
            <Modal size="xl" isOpen={addContactModals} toggle={addContactToggles.bind(null)}>
              <ModalHeader toggle={addContactToggles.bind(null)}>New Task</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Title<span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="title"
                              onChange={handleAddNewTask}
                              value={newTaskData && newTaskData.title}
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
                                handleAddNewTask(e);
                              }}
                              value={newTaskData && newTaskData.status}
                              name="status"
                            >
                              <option defaultValue="selected">Please Select</option>

                              <option value="Not Started">Not Started</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Pending">Pending</option>
                              <option value="Completed">Completed</option>
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
                                handleAddNewTask(e);
                              }}
                              value={newTaskData && newTaskData.category}
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
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Due Date<span className="required">*</span>
                            </Label>
                            <Input
                              type="date"
                              onChange={handleAddNewTask}
                              value={newTaskData && newTaskData.due_date}
                              name="due_date"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Project Manager</Label>
                            <Input
                              type="select"
                              name="project_manager_id"
                              onChange={handleAddNewTask}
                              value={newTaskData && newTaskData.project_manager_id}
                            >
                              <option value="selected">Please Select</option>
                             {incharge &&
                      incharge.map((ele) => {
                        return (
                          <option value={ele.employee_id} key={ele.first_name}>
                          {ele.first_name}
                        </option>
                        );
                      })}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Description</Label>
                            <Input
                              type="textarea"
                              name="description"
                              onChange={handleAddNewTask}
                              value={newTaskData && newTaskData.description}
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
                              onChange={handleAddNewTask}
                              defaultChecked={newTaskData && newTaskData.staff_alert === 1 && true}
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>Yes</Label>&nbsp;&nbsp;
                            <Input
                              type="radio"
                              name="staff_alert"
                              value="0"
                              onChange={handleAddNewTask}
                              defaultChecked={newTaskData && newTaskData.staff_alert === 0 && true}
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
                              onChange={handleAddNewTask}
                              defaultChecked={
                                newTaskData && newTaskData.project_manager_alert === 1 && true
                              }
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>Yes</Label>&nbsp;&nbsp;
                            <Input
                              type="radio"
                              name="project_manager_alert"
                              value="0"
                              onChange={handleAddNewTask}
                              defaultChecked={
                                newTaskData && newTaskData.project_manager_alert === 0 && true
                              }
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>No</Label>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Employee Linked<span className="required"> *</span>
                            </Label>
                            <Input
                              type="select"
                              name="employee_id"
                              onChange={handleAddNewTask}
                              value={newTaskData && newTaskData.employee_id}
                            >
                              <option value="selected">Please Select</option>
                              {employeeDetails &&
                                employeeDetails.map((ele) => {
                                  return (
                                    <option key={ele.employee_id} value={ele.employee_id}>
                                      {ele.first_name}
                                    </option>
                                  );
                                })}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    AddNewTask();
                    //addContactModals(false);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addContactToggles.bind(null)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Table id="example" className="display border border-secondary rounded">
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {taskDetails &&
              taskDetails.map((element, i) => {
                return (
                  <tr key={element.task_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setContactDatas(element);
                          setEditTaskEditModals(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>
                      <span className="addline" onClick={() => deleteRecordTask(element.task_id)}>
                        <Icon.Trash2 />
                      </span>
                    </td>
                    <td>{element.title}</td>
                    <td>{element.status}</td>
                    <td>{element.due_date}</td>
                    <td>{element.select_date}</td>
                    <td>{element.employee_id}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </Form>
  );
}
