import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

export default function JobSalary({ handleInputsJobInformation, job }) {
  JobSalary.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    job: PropTypes.object,
  };

  return (
    <FormGroup>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>CPF Applicable</Label>
            <br />
            <Label>Yes</Label>
            <Input
              name="cpf_applicable"
              value="1"
              type="radio"
              checked={job?.cpf_applicable === 1}
              onChange={handleInputsJobInformation}
            />
            &nbsp;&nbsp;
            <Label>No</Label>
            <Input
              name="cpf_applicable"
              value="0"
              type="radio"
              checked={job?.cpf_applicable === 0}
              onChange={handleInputsJobInformation}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>
              <span className="required">*</span> Govt Donation
            </Label>
            <Input
              type="select"
              value={job?.govt_donation || ''}
              name="govt_donation"
              onChange={handleInputsJobInformation}
            >
              <option value="">Please Select</option>
              <option value="pay_cdac">CDAC</option>
              <option value="pay_sinda">SINDA</option>
              <option value="pay_mbmf">MBMF</option>
              <option value="pay_eucf">EUCF</option>
            </Input>
          </FormGroup>
        </Col>

        {job?.govt_donation === 'pay_cdac' && (
          <Col md="4">
            <FormGroup>
              <Label>Pay CDAC</Label>
              <Input
                type="number"
                name="pay_cdac"
                onChange={handleInputsJobInformation}
                value={job?.pay_cdac || ''}
              />
            </FormGroup>
          </Col>
        )}
        {job?.govt_donation === 'pay_sinda' && (
          <Col md="4">
            <FormGroup>
              <Label>Pay SINDA</Label>
              <Input
                type="number"
                name="pay_sinda"
                onChange={handleInputsJobInformation}
                value={job?.pay_sinda || ''}
              />
            </FormGroup>
          </Col>
        )}
        {job?.govt_donation === 'pay_mbmf' && (
          <Col md="4">
            <FormGroup>
              <Label>Pay MBMF</Label>
              <Input
                type="number"
                name="pay_mbmf"
                onChange={handleInputsJobInformation}
                value={job?.pay_mbmf || ''}
              />
            </FormGroup>
          </Col>
        )}
        {job?.govt_donation === 'pay_eucf' && (
          <Col md="4">
            <FormGroup>
              <Label>Pay EUCF</Label>
              <Input
                type="number"
                name="pay_eucf"
                onChange={handleInputsJobInformation}
                value={job?.pay_eucf || ''}
              />
            </FormGroup>
          </Col>
        )}

        <Col md="4">
          <FormGroup>
            <Label>Income Tax No</Label>
            <Input
              type="text"
              name="income_tax_id"
              onChange={handleInputsJobInformation}
              value={job?.income_tax_id || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Income Tax Amount</Label>
            <Input
              type="text"
              name="income_tax_amount"
              onChange={handleInputsJobInformation}
              value={job?.income_tax_amount || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>CPF No</Label>
            <Input
              type="text"
              name="cpf_account_no"
              onChange={handleInputsJobInformation}
              value={job?.cpf_account_no || ''}
            />
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
}
