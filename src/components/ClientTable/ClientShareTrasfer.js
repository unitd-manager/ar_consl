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
import PdfClientTransferForm from '../PDF/PdfClientTransferForm';
import PdfClientShareTransfer from '../PDF/PdfClientShareTransfer';

export default function ClientContact({
  setContactDatas,
  setEditContactEditModals,
  deleteRecordTransfer,
  director,
  transferDetails,
  addContactToggles,
  addContactModals,
  handleAddNewTransfer,
  newTransferData,
  AddNewTransfer,
  contactsDetails,
}) {
  ClientContact.propTypes = {
    setContactDatas: PropTypes.func,
    setEditContactEditModals: PropTypes.func,
    director: PropTypes.any,
    deleteRecordTransfer: PropTypes.func,
    transferDetails: PropTypes.any,
    addContactToggles: PropTypes.func,
    addContactModals: PropTypes.bool,
    handleAddNewTransfer: PropTypes.func,
    newTransferData: PropTypes.object,
    AddNewTransfer: PropTypes.func,
    contactsDetails: PropTypes.any,
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
      name: 'Transferor',
      selector: 'name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Transferee',
      selector: 'to_name',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Transfer date',
      selector: 'transfer_date',
      sortable: true,
      grow: 0,
    },
    {
      name: 'No of shares',
      selector: 'no_of_shares',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Print Form',
    },
    {
      name: 'Print shares',
    },
  ];
  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button color="primary" className="shadow-none" onClick={addContactToggles.bind(null)}>
              Add New share Transfer{' '}
            </Button>
            <Modal size="lg" isOpen={addContactModals} toggle={addContactToggles.bind(null)}>
              <ModalHeader toggle={addContactToggles.bind(null)}>New Share Transfer</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Transferor<span className="required"> *</span>
                            </Label>
                            <Input
                              type="select"
                              name="from_contact_id"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.from_contact_id}
                            >
                              <option value="selected">Please Select</option>
                              {contactsDetails &&
                                contactsDetails.map((ele) => {
                                  return (
                                    <option key={ele.contact_id} value={ele.contact_id}>
                                      {ele.first_name}
                                    </option>
                                  );
                                })}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Transferee<span className="required"> *</span>
                            </Label>
                            <Input
                              type="select"
                              name="to_contact_id"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.to_contact_id}
                            >
                              <option value="selected">Please Select</option>
                              {contactsDetails &&
                                contactsDetails.map((ele) => {
                                  return (
                                    <option key={ele.contact_id} value={ele.contact_id}>
                                      {ele.first_name}
                                    </option>
                                  );
                                })}
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Transfer date<span className="required"> *</span>
                            </Label>
                            <Input
                              type="date"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.transfer_date}
                              name="transfer_date"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Description of shares<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="description_of_shares"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.description_of_shares}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              No of shares<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="no_of_shares"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.no_of_shares}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Consideration<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="consideration"
                              onChange={handleAddNewTransfer}
                              value={newTransferData && newTransferData.consideration}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <Label>
                            Director authorizing<span className="required"> *</span>
                          </Label>
                          <Input
                            type="select"
                            name="director_authorizing_id"
                            onChange={handleAddNewTransfer}
                            value={newTransferData && newTransferData.director_authorizing_id}
                          >
                            <option value="selected">Please Select</option>
                            {director &&
                              director.map((ele) => {
                                return (
                                  <option key={ele.contact_id} value={ele.first_name}>
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
                    AddNewTransfer();
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
            {transferDetails &&
              transferDetails.map((element, i) => {
                return (
                  <tr key={element.contact_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setContactDatas(element);
                          setEditContactEditModals(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => deleteRecordTransfer(element.company_share_transfer_id)}
                      >
                        <Icon.Trash2 />
                      </span>
                    </td>
                    <td>{element.name}</td>
                    <td>{element.to_name}</td>
                    <td>{element.transfer_date}</td>
                    <td>{element.no_of_shares}</td>
                    <td>
                      <PdfClientTransferForm
                        transferDetails={transferDetails}
                        transferIncreaseId={element.company_share_transfer_id}
                      ></PdfClientTransferForm>
                    </td>
                    <td>
                      <PdfClientShareTransfer
                        transferDetails={transferDetails}
                        transferId={element.company_share_transfer_id}
                      ></PdfClientShareTransfer>
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
