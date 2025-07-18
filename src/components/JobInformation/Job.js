import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

export default function JobBank({ handleInputsJobInformation, job, allBank }) {
  JobBank.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    job: PropTypes.object,
    allBank: PropTypes.array,
  };

  return (
    <FormGroup>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Mode of Payment</Label>
            <Input
              type="select"
              value={job?.mode_of_payment || ''}
              name="mode_of_payment"
              onChange={handleInputsJobInformation}
            >
              <option value="">Please Select</option>
              <option value="cheque">Cheque</option>
              <option value="cash">Cash</option>
              <option value="giro payment transfer">GIRO Payment Transfer</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Account No</Label>
            <Input
              type="text"
              name="account_no"
              onChange={handleInputsJobInformation}
              value={job?.account_no || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Bank Name</Label>
            <Input
              type="select"
              name="bank_name"
              onChange={handleInputsJobInformation}
              value={job?.bank_name || ''}
            >
              <option value="">Please Select</option>
              {allBank &&
                allBank.map((bank) => (
                  <option key={bank.bank_name} value={bank.bank_name}>
                    {bank.bank_name}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Bank Code</Label>
            <Input
              type="text"
              name="bank_code"
              onChange={handleInputsJobInformation}
              value={job?.bank_code || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Branch Code</Label>
            <Input
              type="text"
              name="branch_code"
              onChange={handleInputsJobInformation}
              value={job?.branch_code || ''}
            />
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
}
