import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import ComponentCard from '../ComponentCard';
import api from '../../constants/api';

export default function LoanDetailComp({ loanDetails, loanStatus, handleInputs }) {
  LoanDetailComp.propTypes = {
    loanDetails: PropTypes.object,
    handleInputs: PropTypes.func,
    loanStatus: PropTypes.string,
  };

  const [employee, setEmployee] = useState();

  const getEmployee = () => {
    api
      .get('/loan/TabEmployee')
      .then((res) => {
        setEmployee(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <Form>
      <FormGroup>
        <ComponentCard title="Loan Details" creationModificationDate={loanDetails}>
          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Employee Name <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={loanDetails && loanDetails.employee_id}
                  name="employee_id"
                >
                  <option defaultValue="selected">Please Select</option>
                  {employee &&
                    employee.map((e) => {
                      return (
                        <option key={e.employee_id} value={e.employee_id}>
                          {e.employee_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>

            {(loanStatus === 'Approved' ||
              loanStatus === 'Hold' ||
              loanStatus === 'Denied' ||
              loanStatus === 'Waiting for Approval' ||
              loanStatus === 'Applied') && (
              <Col md="3">
                <FormGroup>
                  <Label>Status</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={loanDetails && loanDetails.status}
                    name="status"
                  >
                    <option>Please Select</option>
                    <option value="Approved">Approved</option>
                    <option value="Active">Active</option>
                    <option value="Hold">Hold</option>
                    <option value="Closed">Closed</option>
                    <option value="Denied">Denied</option>
                    <option value="Waiting for Approval">Waiting for Approval</option>
                    <option defaultValue="selected" value="Applied">Applied</option>
                  </Input>
                </FormGroup>
              </Col>
            )}

            {(loanStatus === 'Active' || loanStatus === 'Closed') && (
              <Col md="3">
                <FormGroup>
                  <Label>Status<span style={{ color: 'red' }}>*</span></Label>
                  <Input
                    type="select"
                    disabled
                    value={loanDetails && loanDetails.status}
                    name="status"
                  >
                    <option>Please Select</option>
                    <option value="Approved">Approved</option>
                    <option value="Active">Active</option>
                    <option value="Hold">Hold</option>
                    <option value="Closed">Closed</option>
                    <option value="Denied">Denied</option>
                    <option value="Waiting for Approval">Waiting for Approval</option>
                    <option defaultValue="selected" value="Applied">Applied</option>
                  </Input>
                </FormGroup>
              </Col>
            )}

            <Col md="3">
              <FormGroup>
                <Label>Type of Loan <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={loanDetails && loanDetails.type}
                  name="type"
                >
                  <option>Please Select</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="other">Other</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Loan Application Date <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  value={loanDetails && loanDetails.date}
                  name="date"
                  type="date"
                  onChange={handleInputs}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            {loanStatus !== 'Active' && loanStatus !== 'Closed' && (
              <Col md="3">
                <FormGroup>
                  <Label>Total Loan Amount</Label>
                  <Input
                    value={loanDetails && loanDetails.amount}
                    name="amount"
                    type="number"
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
            )}
            {(loanStatus === 'Active' || loanStatus === 'Closed') && (
              <Col md="3">
                <FormGroup>
                  <Label>Total Loan Amount</Label>
                  <br />
                  <span>{loanDetails && loanDetails.amount}</span>
                </FormGroup>
              </Col>
            )}
            <Col md="3">
              <FormGroup>
                <Label>Amount Payable</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={loanDetails && loanDetails.month_amount}
                  name="month_amount"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Loan Start Date</Label>
                <br />
                {(loanStatus === 'Active' || loanDetails.loan_start_date) && (
                  <span>
                    {loanDetails.loan_start_date
                      ? moment(loanDetails.loan_start_date).format('DD-MM-YYYY')
                      : ''}
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Actual Loan Closing Date</Label>
                <br />
                {loanDetails && loanDetails.loan_closing_date && (
                  <span>
                    {moment(loanDetails.loan_closing_date).format('DD-MM-YYYY')}
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Amount Payable</Label>
                <br />
                <span>{loanDetails && loanDetails.amount_payable}</span>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Notes</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={loanDetails && loanDetails.notes}
                  name="notes"
                />
              </FormGroup>
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
    </Form>
  );
}
