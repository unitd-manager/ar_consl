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

const ClientCompanyAddressEdit = ({
  companyAddressData,
  companyaddressEditModal,
  getCompanyAddressById,
  setCompanyAddressEditModal,
  allCountries,
  id,
}) => {
  ClientCompanyAddressEdit.propTypes = {
    companyAddressData: PropTypes.object,
    companyaddressEditModal: PropTypes.bool,
    setCompanyAddressEditModal: PropTypes.func,
    getCompanyAddressById: PropTypes.func,
    allCountries:PropTypes.func,
    id:PropTypes.func,
  };

  const [companyaddressEditDetails, setCompanyAddressEditDetails] = useState();

  const handleInputs = (e) => {
    setCompanyAddressEditDetails({ ...companyaddressEditDetails, [e.target.name]: e.target.value });
  };

  //Logic for edit data in db

  const editCompanyAddressChange = () => {
    if (
      companyaddressEditDetails.current_address_flat !== '' &&
      companyaddressEditDetails.current_address_country !== '' &&
      companyaddressEditDetails.current_address_po_code !== '' &&
      companyaddressEditDetails.change_date !== ''
    ) {
      api
        .post('/clients/editCompanyAddress', companyaddressEditDetails)
        .then(() => {
          if (companyaddressEditDetails.update_address === '1') {
            api
              .post('/clients/editClientaddress', {
                company_id: id,
                address_flat: companyaddressEditDetails.current_address_flat,
                address_street: companyaddressEditDetails.current_address_street,
                address_state: companyaddressEditDetails.current_address_town,
                address_country: companyaddressEditDetails.current_address_country,
                address_po_code: companyaddressEditDetails.current_address_po_code,
              })
              .then(() => {
                message('new address inserted successfully.', 'success');
                //addcompanyaddressToggle(false);
                getCompanyAddressById();
                //setAddressDetails(res.data.data[res.data.data.length - 1]);
                 window.location.reload();
              })
              .catch(() => {
                message('Network connection error.', 'error');
              });
          }
          message('Record editted successfully', 'success');
          getCompanyAddressById();
          //window.location.reload();
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  useEffect(() => {
    // editContactById();
    setCompanyAddressEditDetails(companyAddressData);
  }, [companyAddressData]);

  return (
    <>
      <Modal size="lg" isOpen={companyaddressEditModal}>
        <ModalHeader>
          Edit Company Address
          <Button
            color="secondary"
            onClick={() => {
              setCompanyAddressEditModal(false);
            }}
          >
            X
          </Button>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  Current Address 1 <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="current_address_flat"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.current_address_flat
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
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.current_address_street
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
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.current_address_town
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
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.current_address_country
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
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.current_address_po_code
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
                  onChange={handleInputs}
                  defaultChecked={
                    companyaddressEditDetails &&
                    companyaddressEditDetails.update_address === 1 &&
                    true
                  }
                ></Input>
                &nbsp;&nbsp;
                <Label>Yes</Label>&nbsp;&nbsp;
                <Input
                  type="radio"
                  name="update_address"
                  value="0"
                  onChange={handleInputs}
                  defaultChecked={
                    companyaddressEditDetails &&
                    companyaddressEditDetails.update_address === 0 &&
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
                  onChange={handleInputs}
                  value={companyaddressEditDetails && companyaddressEditDetails.change_date}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Previous Address 1</Label>
                <Input
                  type="text"
                  name="previous_address_flat"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.previous_address_flat
                  }
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Previous Address 2</Label>
                <Input
                  type="text"
                  name="previous_address_street"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.previous_address_street
                  }
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Previous Address 3</Label>
                <Input
                  type="text"
                  name="previous_address_town"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.previous_address_town
                  }
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
                  name="previous_address_country"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.previous_address_country
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
                <Label>Previous Postal Code</Label>
                <Input
                  type="text"
                  name="previous_address_po_code"
                  onChange={handleInputs}
                  value={
                    companyaddressEditDetails && companyaddressEditDetails.previous_address_po_code
                  }
                />
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
                  editCompanyAddressChange();
                  //companyaddressEditModal();
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setCompanyAddressEditModal(false);
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
export default ClientCompanyAddressEdit;
