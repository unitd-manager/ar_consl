import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import ComponentCard from '../ComponentCard';

export default function LeaveMainDetails({ handleInputs, leavesDetails, difference }) {
  LeaveMainDetails.propTypes = {
    handleInputs: PropTypes.func,
    leavesDetails: PropTypes.object,
    difference: PropTypes.any,
  };

  return (
    <>
      <ComponentCard title="Leave Edit" creationModificationDate={leavesDetails}>
        <Form>
          <FormGroup>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Employee Name</Label>
                  <br />
                  <span>{leavesDetails && leavesDetails.employee_name}</span>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Designation</Label>
                  <br />
                  <span>{leavesDetails && leavesDetails.position}</span>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Applied Date</Label>
                  <Input
                    type="date"
                    onChange={handleInputs}
                    value={leavesDetails && moment(leavesDetails.date).format('YYYY-MM-DD')}
                    name="date"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Label>Status <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={leavesDetails && leavesDetails.status}
                  name="status"
                >
                  <option defaultValue="selected">Applied</option>
                  <option value="Approved">Approved</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="HR Approved">HR Approved</option>
                  <option value="Denied">Denied</option>
                  <option value="Hold">Hold</option>
                  <option value="Waiting for Approval">Waiting for Approval</option>
                </Input>
              </Col>
              <Col md="4">
                <Label>Type of Leave</Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={leavesDetails && leavesDetails.leave_type}
                  name="leave_type"
                >
                  <option defaultValue="selected">Please Select</option>
                  <option value="Absent">Absent</option>
                  <option value="Annual Leave">Annual Leave</option>
                  <option value="Hospitalization Leave">Hospitalization Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                </Input>
              </Col>

              {leavesDetails?.leave_type === 'Annual Leave' && (
                <Col md="4">
                  <Label>Went Overseas</Label>
                  <FormGroup>
                    <Input
                      type="radio"
                      name="went_overseas"
                      value="1"
                      onChange={handleInputs}
                      defaultChecked={leavesDetails?.went_overseas === 1}
                    />
                    <Label>Yes</Label>
                    <br />
                    <Input
                      type="radio"
                      name="went_overseas"
                      value="0"
                      onChange={handleInputs}
                      defaultChecked={leavesDetails?.went_overseas === 0}
                    />
                    <Label>No</Label>
                  </FormGroup>
                </Col>
              )}
            </Row>
          </FormGroup>
        </Form>
      </ComponentCard>

      <ComponentCard title="More Details">
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>From Date <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={leavesDetails && moment(leavesDetails.from_date).format('YYYY-MM-DD')}
                  name="from_date"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>To Date <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  min={leavesDetails && moment(leavesDetails.from_date).format('YYYY-MM-DD')}
                  value={leavesDetails && moment(leavesDetails.to_date).format('YYYY-MM-DD')}
                  name="to_date"
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>No of Days (Current Month) <span style={{ color: 'red' }}>*</span></Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={leavesDetails?.no_of_days}
                  name="no_of_days"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md="4">
  {difference && leavesDetails?.no_of_days_next_month > 0 ? (
    <FormGroup>
      <Label>No of Days (Next Month)</Label>
      <Input
        type="text"
        onChange={handleInputs}
        value={leavesDetails?.no_of_days_next_month}
        name="no_of_days_next_month"
        disabled
      />
    </FormGroup>
  ) : null}
</Col>
<Col md="4">
  <FormGroup>
    <Label>Reason</Label>
    <Input
      type="textarea"
      onChange={handleInputs}
      value={leavesDetails?.reason}
      name="reason"
    />
  </FormGroup>
</Col>

          </Row>
        </Form>
      </ComponentCard>
    </>
  );
}
