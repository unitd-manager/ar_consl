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
import PdfClientForm45 from '../PDF/PdfClientForm45';
import PdfClientDirectorAppoint from '../PDF/PdfClientDirectorAppoint';
import PdfClientDirectorResign from '../PDF/PdfClientDirectorResign';
import PdfClientResignLetter from '../PDF/PdfClientResignLetter';
import PdfClientForm45B from '../PDF/PdfClientForm45B';
import PdfClientSecrectoryAppoint from '../PDF/PdfCientSecretaryAppoint';
import PdfClientSecretaryResignation from '../PDF/PdfClientSecretaryResignation';
import PdfController from '../PDF/PdfController';

export default function ClientContactGetAndInsert({
  setContactData,
  setEditContactEditModal,
  deleteRecord,
  contactsDetails,
  addContactToggle,
  addContactModal,
  handleAddNewContact,
  newContactData,
  AddNewContact,
  allNationality,
  allCountries,
  handleChanges,
}) {
  ClientContactGetAndInsert.propTypes = {
    setContactData: PropTypes.func,
    setEditContactEditModal: PropTypes.func,
    deleteRecord: PropTypes.func,
    contactsDetails: PropTypes.any,
    addContactToggle: PropTypes.func,
    addContactModal: PropTypes.bool,
    handleAddNewContact: PropTypes.func,
    newContactData: PropTypes.object,
    AddNewContact: PropTypes.func,
    allNationality: PropTypes.any,
    allCountries: PropTypes.any,
    handleChanges: PropTypes.func,
  };
  //  Table Contact
  const columns = [
    {
      name: 'id',
      selector: 'contact_id',
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
      name: 'Del',
      selector: 'delete',
      cell: () => <Icon.Trash />,
      grow: 0,
      width: 'auto',
      wrap: true,
    },
    {
      name: 'Name',
      selector: 'first_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Phone(Direct)',
      selector: 'phone_direct',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Mobile',
      selector: 'mobile',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Position',
      selector: 'position',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Link',
    },
  ];
  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button color="primary" className="shadow-none" onClick={addContactToggle.bind(null)}>
              Add New Contact{' '}
            </Button>
            <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle.bind(null)}>
              <ModalHeader toggle={addContactToggle.bind(null)}>New Contact</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Form>
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
                              value="Manager"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                              value="Auditor"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                              value="Director"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                              value="Managing director"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                              value="Secretary"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                              value="Share holder"
                              id="flexCheckDefault"
                              onChange={handleChanges}
                            />{' '}
                            &nbsp;
                            <Label className="form-check-label" htmlFor="flexCheckDefault">
                              Share Holder
                            </Label>{' '}
                            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              name="position"
                              value="Controller"
                              id="flexCheckDefault"
                              onChange={handleChanges}
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
                            <Label>
                              Title<span className="required"> *</span>
                            </Label>
                            <Input
                              type="select"
                              name="salutation"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.salutation}
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
                            <Label>
                              Name<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.first_name}
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
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.nationality}
                            >
                              <option defaultValue="selected" value="">
                                Please Select
                              </option>
                              {allNationality &&
                                allNationality.map((ele) => (
                                  <option key={ele.nationality_code} value={ele.title}>
                                    {ele.title}
                                  </option>
                                ))}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Date of appointment</Label>
                            <Input
                              type="date"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.date_of_appointment}
                              name="date_of_appointment"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Secretary appoint date</Label>
                            <Input
                              type="date"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.secretary_appoint_date}
                              name="secretary_appoint_date"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Secretary resign date</Label>
                            <Input
                              type="date"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.secretary_resign_date}
                              name="secretary_resign_date"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Issued share capital</Label>
                            <Input
                              type="text"
                              name="issued_share_capital"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.issued_share_capital}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Phone (Direct)</Label>
                            <Input
                              type="number"
                              name="phone_direct"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.phone_direct}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="text"
                              name="email"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.email}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <Label>Fax (Direct)</Label>
                            <Input
                              type="number"
                              name="fax"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.fax}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <Label>Mobile</Label>
                            <Input
                              type="number"
                              name="mobile"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.mobile}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <Label>
                              ID card type<span className="required"> *</span>
                            </Label>
                            <Input
                              type="select"
                              onChange={(e) => {
                                handleAddNewContact(e);
                              }}
                              value={newContactData && newContactData.id_card_type}
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
                        <Col md="3">
                          <FormGroup>
                            <Label>
                              NRIC/FIN/PP<span className="required"> *</span>
                            </Label>
                            <Input
                              type="text"
                              name="id_card_no"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.id_card_no}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Address 1</Label>
                            <Input
                              type="text"
                              name="address_flat"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.address_flat}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Address 2</Label>
                            <Input
                              type="text"
                              name="address_street"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.address_street}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Address 3</Label>
                            <Input
                              type="text"
                              name="address_town"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.address_town}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            {' '}
                            <Label>Country</Label>
                            <Input
                              type="select"
                              name="address_country"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.address_country}
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
                            <Label>Sing pass</Label>
                            <Input
                              type="text"
                              name="sing_pass"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.sing_pass}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Postal code</Label>
                            <Input
                              type="text"
                              name="address_po_code"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.address_po_code}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Date in forms</Label>
                            <Input
                              type="date"
                              onChange={handleAddNewContact}
                              value={newContactData && newContactData.date_in_forms}
                              name="date_in_forms"
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
                    AddNewContact();
                    //addContactModal(false);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addContactToggle.bind(null)}
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
            {contactsDetails &&
              contactsDetails.map((element, i) => {
                return (
                  <tr key={element.contact_id}>
                    <td>{i + 1}</td>
                    <td>
                      <span
                        className="addline"
                        onClick={() => {
                          setContactData(element);
                          setEditContactEditModal(true);
                        }}
                      >
                        <Icon.Edit2 />
                      </span>
                    </td>
                    <td>
                      <span className="addline" onClick={() => deleteRecord(element.contact_id)}>
                        <Icon.Trash2 />
                      </span>
                    </td>
                    <td>{element.first_name}</td>
                    <td>{element.email}</td>
                    <td>{element.phone_direct}</td>
                    <td>{element.mobile}</td>
                    <td>{element.position}</td>
                    <td>
                      {element.position && element.position.includes('Director') && (
                        <p>
                          <span style={{ color: 'red' }}>
                            <PdfClientForm45 form45Id={element.contact_id}></PdfClientForm45>
                          </span>
                          /{' '}
                          <span style={{ color: 'SlatebBlue' }}>
                            <PdfClientDirectorAppoint
                              companyId={element.company_id}
                              directorResignId={element.contact_id}
                            ></PdfClientDirectorAppoint>
                          </span>
                          /{' '}
                          <span style={{ color: 'brown' }}>
                            <PdfClientDirectorResign
                              companyId={element.company_id}
                              directorResignId={element.contact_id}
                            ></PdfClientDirectorResign>
                          </span>
                          /{' '}
                          <span style={{ color: 'green' }}>
                            <PdfClientResignLetter
                              letterId={element.contact_id}
                            ></PdfClientResignLetter>
                          </span>
                        </p>
                      )}
                      {element.position && element.position.includes('Controller') && (
                        <p>
                          <span style={{ color: 'Violet' }}>
                            <PdfController ControllerId={element.contact_id}></PdfController>
                          </span>
                        </p>
                      )}
                      {element.position && element.position.includes('Secretary') && (
                        <p>
                          {' '}
                          <span style={{ color: 'Tomato' }}>
                            <PdfClientForm45B form45BId={element.contact_id}></PdfClientForm45B>
                          </span>
                          /{' '}
                          <span style={{ color: 'Gray' }}>
                            <PdfClientSecrectoryAppoint
                              companyId={element.company_id}
                              directorResignId={element.contact_id}
                            ></PdfClientSecrectoryAppoint>
                          </span>
                          /{' '}
                          <span style={{ color: 'Orange' }}>
                            <PdfClientSecretaryResignation
                              letterId={element.contact_id}
                            ></PdfClientSecretaryResignation>
                          </span>
                        </p>
                      )}
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
