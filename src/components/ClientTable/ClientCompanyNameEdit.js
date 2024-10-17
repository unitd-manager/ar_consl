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
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import message from '../Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../views/form-editor/editor.scss';
import api from '../../constants/api';

const ClientCompanyNameEdit = ({
  companyNameData,
  companynameEditModal,
  setCompanyNameEditModal,
  allCountries,
  id,
}) => {
  ClientCompanyNameEdit.propTypes = {
    companyNameData: PropTypes.object,
    companynameEditModal: PropTypes.bool,
    setCompanyNameEditModal: PropTypes.func,
    allCountries:PropTypes.any,
    id:PropTypes.any,
  };

  

  const [companynameEditDetails, setCompanyNameEditDetails] = useState();

  const handlenameInputs = (e) => {
    setCompanyNameEditDetails({ ...companynameEditDetails, [e.target.name]: e.target.value });
  };

  //Logic for edit data in db

  const editCompanyNameChange = () => {
    if (
      companynameEditDetails.meeting_time !== '' &&
      companynameEditDetails.current_company_name !== ''
    ) {
      api
        .post('/clients/editCompanyName', companynameEditDetails)
        .then(() => {
          if (companynameEditDetails.update_company_name === '1') {
            api
              .post('/clients/editClientname', {
                company_id: id,
                company_name: companynameEditDetails.current_company_name,
              })
              .then(() => {
                message('new name inserted successfully.', 'success');
                //getCompanyNameById();
                 window.location.reload();
              })
              .catch(() => {
                message('Network connection error.', 'error');
              });
          }
        })
          message('Record editted successfully', 'success');
          //window.location.reload();
      }
        
     else {
      message('Please fill all required fields', 'warning');
    }
  };

  useEffect(() => {
    // editContactById();
    setCompanyNameEditDetails(companyNameData);
  }, [companyNameData]);

  return (
    <>
      <Modal size="lg" isOpen={companynameEditModal}>
        <ModalHeader>
          Edit Company Name
          <Button
            color="secondary"
            onClick={() => {
              setCompanyNameEditModal(false);
            }}
          >
            X
          </Button>
        </ModalHeader>
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
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.current_company_name
                        }
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>
                        Meeting Address 1 *
                      </Label>
                      <Input
                        type="text"
                        name="meeting_address_flat"
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.meeting_address_flat
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
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.meeting_address_street
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
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.meeting_address_town
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      {' '}
                      <Label>Country *</Label>
                      <Input
                        type="select"
                        name="meeting_address_country"
                        onChange={handlenameInputs}
                        value={companynameEditDetails && companynameEditDetails.meeting_address_country}
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
                        Meeting Postal Code *
                      </Label>
                      <Input
                        type="text"
                        name="meeting_address_po_code"
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.meeting_address_po_code
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
                        onChange={handlenameInputs}
                        defaultChecked={
                          companynameEditDetails &&
                          companynameEditDetails.update_company_name === 1 &&
                          true
                        }
                      ></Input>
                       &nbsp;&nbsp;
                      <Label>Yes</Label>&nbsp;&nbsp;
                      <Input
                        type="radio"
                        name="update_company_name"
                        value="0"
                        onChange={handlenameInputs}
                        defaultChecked={
                          companynameEditDetails &&
                          companynameEditDetails.update_company_name === 0 &&
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
                        onChange={handlenameInputs}
                        value={companynameEditDetails && companynameEditDetails.meeting_time}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Previous Company Name</Label>
                      <Input
                        type="text"
                        name="previous_company_name"
                        onChange={handlenameInputs}
                        value={
                          companynameEditDetails && companynameEditDetails.previous_company_name
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Row>
            <Col>
              <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                <Button
                  color="primary"
                  onClick={() => {
                    editCompanyNameChange();
                    //setCompanyNameEditModal(false);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setCompanyNameEditModal(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ClientCompanyNameEdit;
