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
import PdfClientCompanyName from '../PDF/PdfClientCompanyName';

export default function CompanyNameChange({
  setCompanyNameData,
  setCompanyNameEditModal,
  addcompanynameToggle,
  companynameDetails,
  handleCompanyNameInputs,
  addCompanynameModal,
  newcompanynameDetails,
  insertnewcompanyname,
  allCountries,
  clientnameDetails,
  setSubmitting,
  submitting,
}) {
  CompanyNameChange.propTypes = {
    clientnameDetails: PropTypes.any,
    setCompanyNameData: PropTypes.func,
    setCompanyNameEditModal: PropTypes.func,
    companynameDetails: PropTypes.any,
    addcompanynameToggle: PropTypes.func,
    addCompanynameModal: PropTypes.bool,
    handleCompanyNameInputs: PropTypes.func,
    newcompanynameDetails: PropTypes.object,
    insertnewcompanyname: PropTypes.func,
    allCountries: PropTypes.any,
    setSubmitting:PropTypes.any,
    submitting:PropTypes.any
  };
  
console.log("name",companynameDetails)
  //  Table Contact
  const columns = [
    {
      name: '#',
      selector: '',
      grow: 0,
      wrap: true,
      width: '4%',
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
      name: 'Old Name 1',
      selector: 'previous_company_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'New Name 1',
      selector: 'current_company_name',
      sortable: true,
      grow: 2,
      wrap: true,
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
            <Button
              color="primary"
              className="shadow-none"
              onClick={addcompanynameToggle.bind(null)}
            >
              Add New Company Name
            </Button>
            <Modal size="lg" isOpen={addCompanynameModal} toggle={addcompanynameToggle.bind(null)}>
              <ModalHeader toggle={addcompanynameToggle.bind(null)}>New Company Name</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Current Company Name <span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="current_company_name"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails && newcompanynameDetails.current_company_name
                              }
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Meeting Address 1 <span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="meeting_address_flat"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails && newcompanynameDetails.meeting_address_flat
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Meeting Address 2</Label>
                            <Input
                              type="text"
                              name="meeting_address_street"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails &&
                                newcompanynameDetails.meeting_address_street
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Meeting Address 3</Label>
                            <Input
                              type="text"
                              name="meeting_address_town"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails && newcompanynameDetails.meeting_address_town
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Meeting Country <span className="required">*</span>
                            </Label>
                            <Input
                              type="select"
                              name="meeting_address_country"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails &&
                                newcompanynameDetails.meeting_address_country
                              }
                            >
                              <option defaultValue="selected" value="">
                                Please Select
                              </option>
                              {allCountries &&
                                allCountries.map((country) => (
                                  <option key={country.country_code} value={country.name}>
                                    {country.name}
                                  </option>
                                ))}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Meeting Postal Code <span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="meeting_address_po_code"
                              onChange={handleCompanyNameInputs}
                              value={
                                newcompanynameDetails &&
                                newcompanynameDetails.meeting_address_po_code
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <Label>Update Name</Label>
                          <FormGroup>
                            <Input
                              type="radio"
                              name="update_company_name"
                              value="1"
                              onChange={handleCompanyNameInputs}
                              defaultChecked={
                                newcompanynameDetails &&
                                newcompanynameDetails.update_company_name === 1 &&
                                true
                              }
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>Yes</Label>&nbsp;&nbsp;
                            <Input
                              type="radio"
                              name="update_company_name"
                              value="0"
                              onChange={handleCompanyNameInputs}
                              defaultChecked={
                                newcompanynameDetails &&
                                newcompanynameDetails.update_company_name === 0 &&
                                true
                              }
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>No</Label>
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Time <span className="required">*</span>
                            </Label>
                            <Input
                              type="time"
                              name="meeting_time"
                              onChange={handleCompanyNameInputs}
                              value={newcompanynameDetails && newcompanynameDetails.meeting_time}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Previous Company Name</Label>
                            <Input
                              type="text"
                              name="company_name"
                              onChange={handleCompanyNameInputs}
                              value={clientnameDetails && clientnameDetails.company_name}
                            >
                              {/* {nameDetails &&
                                nameDetails.map((ele) => (
                                  <option key={ele.previous_company_name} value={ele.company_name}>
                                    {ele.company_name}
                                  </option>
                                ))} */}
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
                    if (!submitting) {
                      setSubmitting(true);
                      insertnewcompanyname();
                    }
                  }}
                  disabled={submitting}
                  
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addcompanynameToggle.bind(null)}
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
            {companynameDetails &&
              companynameDetails.map((element, i) => {
                return (
                  <tr key={element.company_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setCompanyNameData(element);
                          setCompanyNameEditModal(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>{element.previous_company_name}</td>
                    <td>{element.current_company_name}</td>
                    <td>
                      {' '}
                      <PdfClientCompanyName
                        id={element.company_name_change_id}
                        companyId={element.company_id}
                      ></PdfClientCompanyName>
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
