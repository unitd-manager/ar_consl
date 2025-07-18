import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';

function ContactInformationTab({ contactInformationDetails, handleCiInputs }) {
  ContactInformationTab.propTypes = {
    contactInformationDetails: PropTypes.object,
    handleCiInputs: PropTypes.func,
  };

  return (
    <div>
      <ComponentCard title="Contact Information (For Citizen)">
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Address 1</Label>
              <Input
                name="address_area"
                value={contactInformationDetails?.address_area || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Address 2</Label>
              <Input
                name="address_street"
                value={contactInformationDetails?.address_street || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Postal Code</Label>
              <Input
                name="address_po_code"
                value={contactInformationDetails?.address_po_code || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Country</Label>
              <Input
                name="address_country1"
                value={contactInformationDetails?.address_country1 || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>HP/Mobile No.</Label>
              <Input
                name="mobile"
                value={contactInformationDetails?.mobile || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Alternate Contact Number</Label>
              <Input
                name="phone"
                value={contactInformationDetails?.phone || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                value={contactInformationDetails?.email || ''}
                onChange={handleCiInputs}
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label></Label>
            </FormGroup>
          </Col>
        </Row>
      </ComponentCard>

      <ComponentCard title="Contact Information (Overseas, For Non-Citizen Or Permanent Resident)">
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Address 1</Label>
              <Input
                name="foreign_addrs_area"
                value={contactInformationDetails?.foreign_addrs_area || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Address 2</Label>
              <Input
                name="foreign_addrs_street"
                value={contactInformationDetails?.foreign_addrs_street || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Postal Code</Label>
              <Input
                name="foreign_addrs_postal_code"
                value={contactInformationDetails?.foreign_addrs_postal_code || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Country</Label>
              <Input
                name="foreign_addrs_country"
                value={contactInformationDetails?.foreign_addrs_country || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>HP/Mobile No.</Label>
              <Input
                name="foreign_mobile"
                value={contactInformationDetails?.foreign_mobile || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Alternate Contact Number</Label>
              <Input
                name="phone_direct"
                value={contactInformationDetails?.phone_direct || ''}
                onChange={handleCiInputs}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="foreign_email"
                value={contactInformationDetails?.foreign_email || ''}
                onChange={handleCiInputs}
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label></Label>
            </FormGroup>
          </Col>
        </Row>
      </ComponentCard>
    </div>
  );
}

export default ContactInformationTab;
