import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';

export default function TrainingCompany({ trainingDetails, handleInputs }) {
  TrainingCompany.propTypes = {
    trainingDetails: PropTypes.object,
    handleInputs: PropTypes.func,
  };

  return (
    <Form>
      <FormGroup>
        <ComponentCard title="Training Company Details">
          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Training Company Name</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={trainingDetails?.training_company_name || ''}
                  name="training_company_name"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Training Company Address</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={trainingDetails?.training_company_address || ''}
                  name="training_company_address"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Training Company Email</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={trainingDetails?.training_company_email || ''}
                  name="training_company_email"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Training Company Phone</Label>
                <Input
                  type="text"
                  pattern="\d{10}"
                  onChange={handleInputs}
                  value={trainingDetails?.training_company_phone || ''}
                  name="training_company_phone"
                />
              </FormGroup>
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
    </Form>
  );
}
