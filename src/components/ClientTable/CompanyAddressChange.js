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
import PdfClientCompanyAddress from '../PDF/PdfClientCompanyAddress';

export default function CompanyAddressChange({
  setCompanyAddressData,
  setCompanyAddressEditModal,
  addcompanyaddressToggle,
  companyaddressDetails,
  handleCompanyAddressInputs,
  addCompanyaddressModal,
  newcompanyaddressDetails,
 
  insertnewcompanyaddress,
  allCountries,
  clientaddressDetails,
  setSubmittings,
  submittings,
}) {
  CompanyAddressChange.propTypes = {
    clientaddressDetails:PropTypes.func,
    setCompanyAddressData: PropTypes.func,
    setCompanyAddressEditModal: PropTypes.func,
    companyaddressDetails: PropTypes.object,
    addcompanyaddressToggle: PropTypes.func,
    addCompanyaddressModal: PropTypes.bool,
    
    handleCompanyAddressInputs: PropTypes.func,
    newcompanyaddressDetails: PropTypes.object,
    insertnewcompanyaddress: PropTypes.func,
    allCountries: PropTypes.func,
    setSubmittings:PropTypes.any,
    submittings:PropTypes.any
  };

  console.log('companyaddressDetails', companyaddressDetails);
  //console.log('addressDetails', addressDetails);
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
      name: 'Old Address 1',
      selector: 'first_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'New Address 1',
      selector: 'email',
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
              onClick={addcompanyaddressToggle.bind(null)}
            >
              Add New Company Address{' '}
            </Button>
            <Modal
              size="lg"
              isOpen={addCompanyaddressModal}
              toggle={addcompanyaddressToggle.bind(null)}
            >
              <ModalHeader toggle={addcompanyaddressToggle.bind(null)}>
                New Company Address
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Current Address 1 <span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="current_address_flat"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.current_address_flat
                              }
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Current Address 2</Label>
                            <Input
                              type="text"
                              name="current_address_street"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.current_address_street
                              }
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <Label>Current Address 3</Label>
                            <Input
                              type="text"
                              name="current_address_town"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.current_address_town
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <Label>
                              Current Country <span className="required">*</span>
                            </Label>
                            <Input
                              type="select"
                              name="current_address_country"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.current_address_country
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
                              Current Postal Code <span className="required">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="current_address_po_code"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.current_address_po_code
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <Label>Update Address</Label>
                          <FormGroup>
                            <Input
                              type="radio"
                              name="update_address"
                              value="1"
                              onChange={handleCompanyAddressInputs}
                              defaultChecked={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.update_address === 1 &&
                                true
                              }
                            ></Input>
                            &nbsp;&nbsp;
                            <Label>Yes</Label>&nbsp;&nbsp;
                            <Input
                              type="radio"
                              name="update_address"
                              value="0"
                              onChange={handleCompanyAddressInputs}
                              defaultChecked={
                                newcompanyaddressDetails &&
                                newcompanyaddressDetails.update_address === 0 &&
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
                              Date <span className="required">*</span>
                            </Label>
                            <Input
                              type="date"
                              name="change_date"
                              onChange={handleCompanyAddressInputs}
                              value={
                                newcompanyaddressDetails && newcompanyaddressDetails.change_date
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <Label>Previous Address 1</Label>
                          <FormGroup>
                            <Input
                              type="text"
                              name="address_flat"
                              onChange={handleCompanyAddressInputs}
                              value={clientaddressDetails && clientaddressDetails.address_flat}
                            >
                              {/* {nameDetails &&
                                nameDetails.map((ele) => (
                                  <option key={ele.company_id} value={ele.previous_address_flat}>
                                    {ele.previous_address_flat}
                                  </option>
                                ))} */}
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <Label>Previous Address 2</Label>
                            <Input
                              type="text"
                              name="address_street"
                              onChange={handleCompanyAddressInputs}
                              value={clientaddressDetails && clientaddressDetails.address_street}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Previous Address 3</Label>
                            <Input
                              type="text"
                              name="address_state"
                              onChange={handleCompanyAddressInputs}
                              value={clientaddressDetails && clientaddressDetails.address_state}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <Label>Previous Country</Label>
                            <Input
                              type="select"
                              name="address_country"
                              onChange={handleCompanyAddressInputs}
                              value={clientaddressDetails && clientaddressDetails.address_country}
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
                            <Label>Previous Postal Code</Label>
                            <Input
                              type="text"
                              name="previous_address_po_code"
                              onChange={handleCompanyAddressInputs}
                              value={clientaddressDetails && clientaddressDetails.address_po_code}
                            />
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
                  
                    if (!submittings) {
                      setSubmittings(true);
                      insertnewcompanyaddress();
                    }
                  }}
                  disabled={submittings}
                >
                  Submit
                </Button> 
                <Button  
                  color="secondary"
                  className="shadow-none"
                  onClick={addcompanyaddressToggle.bind(null)}
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
            {companyaddressDetails &&
              companyaddressDetails.map((element, i) => {
                return (
                  <tr key={element.company_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setCompanyAddressData(element);
                          setCompanyAddressEditModal(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>{element.previous_address_flat}</td>
                    <td>{element.current_address_flat}</td>
                    <td>
                      <PdfClientCompanyAddress
                        id={element.company_address_change_id}
                        companyId={element.company_id}
                      ></PdfClientCompanyAddress>
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
