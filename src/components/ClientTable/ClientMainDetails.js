import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import ComponentCard from '../ComponentCard';

export default function ClientMainDetails({ handleInputs, clientsDetails, allCountries }) {
  ClientMainDetails.propTypes = {
    handleInputs: PropTypes.func,
    clientsDetails: PropTypes.any,
    allCountries: PropTypes.any,
  };
  return (
    <Form>
      <FormGroup>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>
                {' '}
                Choose Category <span className="required"> *</span>
              </Label>
              <Input
                type="select"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.category}
                name="category"
              >
                <option value="">Please Select</option>
                <option value="Client">Client</option>
                <option value="Supplier">Supplier</option>
                <option value="Contact">Contact</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>
                Name <span className="required"> *</span>
              </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.company_name}
                name="company_name"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>
                Reg No <span className="required"> *</span>
              </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.reg_no}
                name="reg_no"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>
                Incorporation Date<span className="required"> *</span>
              </Label>
              <Input
                type="date"
                onChange={handleInputs}
                value={
                  clientsDetails &&
                  moment(clientsDetails.date_of_incorporation).format('YYYY-MM-DD')
                }
                name="date_of_incorporation"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Access Code</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.access_code}
                name="access_code"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Corp Pass</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.corp_pass}
                name="corp_pass"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>
                Group Name<span className="required"> *</span>
              </Label>
              <Input
                type="select"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.group_name}
                name="group_name"
              >
                <option value="">Please Select</option>
                <option value="January Year End">January Year End</option>
                <option value="February Year End">February Year End</option>
                <option value="March Year End">March Year End</option>
                <option value="April Year End">April Year End</option>
                <option value="May Year End">May Year End</option>
                <option value="June Year End">June Year End</option>
                <option value="July Year End">July Year End</option>
                <option value="August Year End">August Year End</option>
                <option value="September Year End">September Year End</option>
                <option value="October Year End">October Year End</option>
                <option value="November Year End">November Year End</option>
                <option value="December Year End">December Year End</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.phone}
                name="phone"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Website </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.website}
                name="website"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.email}
                name="email"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Fax</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.fax}
                name="fax"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Address 1 </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.address_flat}
                name="address_flat"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Address 2 </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.address_street}
                name="address_street"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Address 3 </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.address_state}
                name="address_state"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              {' '}
              <Label>Country</Label>
              <Input
                type="select"
                name="address_country"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.address_country}
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
          <Col md="3">
            <FormGroup>
              <Label>Postal Code</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.address_po_code}
                name="address_po_code"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <Label>Audit</Label>
            <FormGroup>
              <Input
                type="radio"
                name="audit"
                value="1"
                onChange={handleInputs}
                defaultChecked={clientsDetails && clientsDetails.audit === 1 && true}
              ></Input>
              &nbsp;&nbsp;
              <Label>Yes</Label>&nbsp;&nbsp;
              <Input
                type="radio"
                name="audit"
                value="0"
                onChange={handleInputs}
                defaultChecked={clientsDetails && clientsDetails.audit === 0 && true}
              ></Input>
              &nbsp;&nbsp;
              <Label>No</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <ComponentCard title="Principal Activities">
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Share Capital Currency</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                }}
                value={clientsDetails && clientsDetails.capital_currency}
                name="capital_currency"
              >
                <option defaultValue="selected">Please Select</option>
                <option value="others">others</option>
                <option value="SGD">SGD</option>
                <option value="USD">USD</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Share Type</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                }}
                value={clientsDetails && clientsDetails.share_type}
                name="share_type"
              >
                <option defaultValue="selected">Please Select</option>
                <option value="ORDINARY">ORDINARY</option>
                <option value="others">others</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Paidup Capital</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.paidup_capital}
                name="paidup_capital"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Activity 1 </Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.activity_1}
                name="activity_1"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Description 1</Label>
              <Input
                type="textarea"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.activity_description_1}
                name="activity_description_1"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Activity 2</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.activity_2}
                name="activity_2"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Description 2 </Label>
              <Input
                type="textarea"
                onChange={handleInputs}
                value={clientsDetails && clientsDetails.activity_description_2}
                name="activity_description_2"
              />
            </FormGroup>
          </Col>
        </Row>
      </ComponentCard>
      <ComponentCard title="More Details">
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Status</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                }}
                value={clientsDetails && clientsDetails.status}
                name="status"
              >
                <option defaultValue="selected">Please Select</option>
                <option value="Dorment">Dorment</option>
                <option value="Live">Live</option>
                <option value="New">New</option>
                <option value="others">others</option>
                <option value="strike Off">strike Off</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Industry</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                }}
                value={clientsDetails && clientsDetails.industry}
                name="industry"
              >
                <option defaultValue="selected">Please Select</option>
                <option value="Construction">Construction</option>
                <option value="Consulting">Consulting</option>
                <option value="Creative">Creative</option>
                <option value="Education">Eduction</option>
                <option value="Engineering">Engineering</option>
                <option value="F&B">F&B</option>
                <option value="Financial">Financial</option>
                <option value="Legal">Legal</option>
                <option value="Marketing / PR">Markating / PR</option>
                <option value="Media">Media</option>
                <option value="Medical">madical</option>
                <option value="Organisation">Organisation</option>
                <option value="Porperty">Porperty</option>
                <option value="Recuritment">Recurtment</option>
                <option value="Retail B2B">Retail B2B</option>
                <option value="Reatil B2C">Reatil B2C</option>
                <option value="others">others</option>
                <option value="Service Others">Service Others</option>
                <option value="Software">Software</option>
                <option value="Trading">Trading</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </ComponentCard>
    </Form>
  );
}
