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
import PdfclientShareIncrease from '../PDF/PdfClientShareIncrease';

export default function ClientContact({
  setContactDatass,
  setEditContactEditModalss,
  deleteRecordIncrease,
  increaseDetails,
  addContactToggless,
  addContactModalss,
  handleAddNewIncrease,
  newIncreaseData,
  AddNewIncrease,
  director,
}) {
  ClientContact.propTypes = {
    setContactDatass: PropTypes.func,
    setEditContactEditModalss: PropTypes.func,
    deleteRecordIncrease: PropTypes.func,
    increaseDetails: PropTypes.any,
    addContactToggless: PropTypes.func,
    addContactModalss: PropTypes.bool,
    handleAddNewIncrease: PropTypes.func,
    newIncreaseData: PropTypes.object,
    AddNewIncrease: PropTypes.func,
    director: PropTypes.any,
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
      name: 'No of shares increased',
      selector: 'no_of_shares_increased',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Consideration amount',
      selector: 'consideration_amount',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Directors ordinary shares',
      selector: 'directors_ordinary_shares',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Contact',
      selector: 'contact_id',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Print',
    },
  ];
  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button color="primary" className="shadow-none" onClick={addContactToggless.bind(null)}>
              Add New Share Increase{' '}
            </Button>
            <Modal size="lg" isOpen={addContactModalss} toggle={addContactToggless.bind(null)}>
              <ModalHeader toggle={addContactToggless.bind(null)}>New Share Increase</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              No of shares increased<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="no_of_shares_increased"
                              onChange={handleAddNewIncrease}
                              value={newIncreaseData && newIncreaseData.no_of_shares_increased}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Consideration amount<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="consideration_amount"
                              onChange={handleAddNewIncrease}
                              value={newIncreaseData && newIncreaseData.consideration_amount}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Directors ordinary shares<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="directors_ordinary_shares"
                              onChange={handleAddNewIncrease}
                              value={newIncreaseData && newIncreaseData.directors_ordinary_shares}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Date<span className="required"> *</span>
                            </Label>
                            <Input
                              type="date"
                              onChange={handleAddNewIncrease}
                              value={newIncreaseData && newIncreaseData.date}
                              name="date"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <Label>
                            Contact<span className="required"> *</span>
                          </Label>
                          <Input
                            type="select"
                            name="contact_id"
                            onChange={handleAddNewIncrease}
                            value={newIncreaseData && newIncreaseData.contact_id}
                          >
                            <option value="selected">Please Select</option>
                            {director &&
                              director.map((ele) => {
                                return (
                                  <option key={ele.contact_id} value={ele.contact_id}>
                                    {ele.first_name}
                                  </option>
                                );
                              })}
                          </Input>
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
                    AddNewIncrease();
                    //addContactModalss(false);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addContactToggless.bind(null)}
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
            {increaseDetails &&
              increaseDetails.map((element, i) => {
                return (
                  <tr key={element.contact_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setContactDatass(element);
                          setEditContactEditModalss(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => deleteRecordIncrease(element.company_share_increase_id)}
                      >
                        <Icon.Trash2 />
                      </span>
                    </td>
                    <td>{element.no_of_shares_increased}</td>
                    <td>{element.consideration_amount}</td>
                    <td>{element.directors_ordinary_shares}</td>
                    <td>{element.date}</td>
                    <td>{element.first_name}</td>
                    <td>
                      <PdfclientShareIncrease
                        increaseDetails={increaseDetails}
                        shareIncreaseId={element.company_share_increase_id}
                      ></PdfclientShareIncrease>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </Form>
  );
}
