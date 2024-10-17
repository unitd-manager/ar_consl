import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
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
import ComponentCard from '../ComponentCard';
import message from '../Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../views/form-editor/editor.scss';

import api from '../../constants/api';


const ContactEditModal = ({
  contactData,
  editContactEditModal,
  setEditContactEditModal,
  allNationality,
  allCountries,
  clientsDetails,
  contactsDetails
}) => {
  ContactEditModal.propTypes = {
    contactData: PropTypes.object,
    editContactEditModal: PropTypes.bool,
    setEditContactEditModal: PropTypes.func,
    allNationality: PropTypes.any,
    allCountries: PropTypes.any,
    clientsDetails: PropTypes.any,
    contactsDetails:PropTypes.array
  };

  const [contactinsert, setContactInsert] = useState();


  const handleChangess = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // const { position } = contactinsert;

    console.log(`${value} is ${checked}`);

    const { position } = contactinsert;
    // Case 1 : The user checks the box
    if (checked) {
      setContactInsert({
        ...contactinsert,
        position: [position, value],
        response: [position, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setContactInsert({
        ...contactinsert,
        position: String(position)
          .split(',')
          .filter((el) => el !== value),
        response: String(position)
          .split(',')
          .filter((el) => el !== value),
      });
    }
    console.log('rafi', contactinsert.position);
  };

  const handleInputs = (e) => {
    setContactInsert({ ...contactinsert, [e.target.name]: e.target.value });
  };
 
console.log('contctdetail',contactsDetails)
  //Logic for edit data in db
  const PaidUp = clientsDetails && clientsDetails.paidup_capital;
  const editContactsData = () => {
    contactinsert.position = contactinsert.position.toString();
    if (
      contactinsert.salutation !== '' &&
      contactinsert.first_name !== '' &&
      contactinsert.id_card_no !== '' &&
      contactinsert.id_card_type !== ''
    ) {
      let totalPaidUp=0;
      let single=0;
      let allshare=0;
if(contactsDetails){
contactsDetails.forEach((el)=>{
  if(el.contact_id === contactinsert.contact_id){
single +=parseFloat(contactinsert.issued_share_capital)
  }else{
totalPaidUp +=  parseFloat(el.issued_share_capital)
  }
})
allshare = parseFloat(totalPaidUp) + parseFloat(single)
}
      // Check if issued_share_capital exceeds paidup_capital
      const issuedShareCapital = parseFloat(allshare);
      const paidupCapital = parseFloat(PaidUp); // Assuming paidup_capital is a variable accessible in this scope
      
      console.log('paidup',paidupCapital)
      console.log('issuedShareCapital',issuedShareCapital)
      if (issuedShareCapital > paidupCapital) {
        message('Issued share capital cannot exceed paid-up capital', 'warning');
        return; // Stop execution if validation fails
      }
      
      api
        .post('/clients/editContact', contactinsert)
        .then(() => {
          message('Record editted successfully', 'success');
           window.location.reload();
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };
  useEffect(() => {
    setContactInsert(contactData);
  }, [contactData]);

  return (
    <>
      <Modal size="lg" isOpen={editContactEditModal}>
        <ModalHeader>
          Edit Contact Details
          <Button
            color="secondary"
            onClick={() => {
              setEditContactEditModal(false);
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
                <Label>Title </Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.salutation}
                  name="salutation"
                >
                  <option value="" selected="selected">
                    Please Select
                  </option>
                  <option value="Others">Others</option>
                  <option value="Ms">Ms</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.first_name}
                  name="first_name"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                {' '}
                <Label>Nationality</Label>
                <Input
                  type="select"
                  name="nationality"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.nationality}
                >
                  <option defaultValue="selected" value="">
                    Please Select
                  </option>
                  {allNationality &&
                    allNationality.map((country) => (
                      <option key={country.nationality_code} value={country.title}>
                        {country.title}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <Label>Position</Label>
                {/* <Input
                                  name="position"
                                  // onChange={handleAddNewContact}
                                  // value={newContactData && newContactData.position}
                                /> */}
                <br />
                <Input
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Manager') ? 1 : 0
                  }
                  value="Manager"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />{' '}
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Manager
                </Label>
                &nbsp; &nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Auditor') ? 1 : 0
                  }
                  value="Auditor"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Auditor
                </Label>
                &nbsp; &nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Director') ? 1 : 0
                  }
                  value="Director"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Director
                </Label>{' '}
                &nbsp; &nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Managing director') ? 1 : 0
                  }
                  value="Managing director"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />{' '}
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Managing Director
                </Label>{' '}
                &nbsp; &nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Secretary') ? 1 : 0
                  }
                  value="Secretary"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />{' '}
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Secretary
                </Label>{' '}
                &nbsp; &nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Share holder') ? 1 : 0
                  }
                  value="Share holder"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />{' '}
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Share Holder
                </Label>{' '}
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="position"
                  defaultChecked={
                    contactinsert && contactinsert.position.includes('Controller') ? 1 : 0
                  }
                  value="Controller"
                  id="flexCheckDefault"
                  onChange={handleChangess}
                />{' '}
                &nbsp;
                <Label className="form-check-label" htmlFor="flexCheckDefault">
                  Controller
                </Label>{' '}
                &nbsp; &nbsp;
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Date of appointment</Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.date_of_appointment}
                  name="date_of_appointment"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Issued share capital</Label>
                <Input
                  type="text"
                  name="issued_share_capital"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.issued_share_capital}
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label>Phone(Direct) </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.phone_direct}
                  name="phone_direct"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.email}
                  name="email"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Fax(Direct) </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.fax}
                  name="fax"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Mobile </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.mobile}
                  name="mobile"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>ID card type</Label>
                <Input
                  type="select"
                  onChange={(e) => {
                    handleInputs(e);
                  }}
                  value={contactinsert && contactinsert.id_card_type}
                  name="id_card_type"
                >
                  <option defaultValue="selected">Please Select</option>
                  <option value="Fin">Fin</option>
                  <option value="IC">IC</option>
                  <option value="others">others</option>
                  <option value="Passport">Passport</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>NRIC/FIN/PP</Label>
                <Input
                  type="text"
                  name="id_card_no"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.id_card_no}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Address 1</Label>
                <Input
                  type="text"
                  name="address_flat"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.address_flat}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Address 2</Label>
                <Input
                  type="text"
                  name="address_street"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.address_street}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Address 3</Label>
                <Input
                  type="text"
                  name="address_town"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.address_town}
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                {' '}
                <Label>Country</Label>
                <Input
                  type="select"
                  name="address_country"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.address_country}
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
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Sing pass</Label>
                <Input
                  type="text"
                  name="sing_pass"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.sing_pass}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Postal code</Label>
                <Input
                  type="text"
                  name="address_po_code"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.address_po_code}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Date in forms</Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.date_in_forms}
                  name="date_in_forms"
                />
              </FormGroup>
            </Col>
            <ComponentCard title="Appointment">
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>Appoint date</Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      value={contactinsert && contactinsert.appoint_date}
                      name="appoint_date"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Secretary Appoint date</Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      value={contactinsert && contactinsert.secretary_appoint_date}
                      name="secretary_appoint_date"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ComponentCard>
            <ComponentCard title="Resignation">
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>Resign date</Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      value={contactinsert && contactinsert.resign_date}
                      name="resign_date"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Secretary resign date</Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      value={contactinsert && contactinsert.secretary_resign_date}
                      name="secretary_resign_date"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ComponentCard>
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
                  setEditContactEditModal(false);
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
export default ContactEditModal;
