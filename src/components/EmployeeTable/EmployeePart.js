import React, { useEffect, useState } from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import ComponentCard from '../ComponentCard';

function EmployeePart({ employeeDetails, handleInputChange, allCountries, companies }) {
  const initialProjectManagerValue = localStorage.getItem('project_manager') || '0';
  const initialTeamLeaderValue = localStorage.getItem('team_leader') || '0';

  const [projectManager, setProjectManager] = useState(initialProjectManagerValue);
  const [teamLeader, setTeamLeader] = useState(initialTeamLeaderValue);

  useEffect(() => {
    localStorage.setItem('project_manager', projectManager);
    localStorage.setItem('team_leader', teamLeader);
  }, [projectManager, teamLeader]);

  const calculateTotalExperience = (dateJoined) => {
    if (!dateJoined) return '';
    const joinDateTime = new Date(dateJoined);
    const currentDate = new Date();
    const difference = currentDate - joinDateTime;
    const totalYears = difference / (1000 * 60 * 60 * 24 * 365.25);
    const totalMonths = totalYears * 12;
    const years = Math.floor(totalYears);
    const months = Math.floor(totalMonths % 12);
    let experienceString = '';
    if (years > 0) experienceString += `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) experienceString += `${experienceString ? ' ' : ''}${months} month${months > 1 ? 's' : ''}`;
    return experienceString;
  };

  const totalExperience = calculateTotalExperience(employeeDetails.act_join_date);

  return (
    <div>
      <ComponentCard title="Personal Information" creationModificationDate={employeeDetails}>
        <FormGroup>
          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Code</Label>
                <Input
                  value={employeeDetails?.emp_code || ''}
                  name="emp_code"
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label><span style={{ color: 'red' }}>*</span> Full Name</Label>
                <Input
                  value={employeeDetails?.first_name || ''}
                  name="first_name"
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Salutation</Label>
                <Input
                  name="salutation"
                  value={employeeDetails?.salutation || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label><span style={{ color: 'red' }}>*</span> Gender</Label>
                <Input
                  name="gender"
                  value={employeeDetails?.gender || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Status</Label>
                <Input
                  name="status"
                  value={employeeDetails?.status || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option value="Current">Current</option>
                  <option value="Archive">Archive</option>
                  <option value="Cancel">Cancel</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label><span style={{ color: 'red' }}>*</span> Date of Birth</Label>
                <Input
                  type="date"
                  name="date_of_birth"
                  onChange={handleInputChange}
                  value={employeeDetails?.date_of_birth ? moment(employeeDetails.date_of_birth).format('YYYY-MM-DD') : ''}
                  max={moment().format('YYYY-MM-DD')}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Passport No</Label>
                <Input
                  name="passport"
                  value={employeeDetails?.passport || ''}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Passport Expiry</Label>
                <Input
                  type="date"
                  name="date_of_expiry"
                  onChange={handleInputChange}
                  value={employeeDetails?.date_of_expiry ? moment(employeeDetails.date_of_expiry).format('YYYY-MM-DD') : ''}
                  min={moment().format('YYYY-MM-DD')}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Marital Status</Label>
                <Input
                  name="marital_status"
                  value={employeeDetails?.marital_status || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label><span style={{ color: 'red' }}>*</span> Nationality</Label>
                <Input
                  name="nationality"
                  value={employeeDetails?.nationality || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option value="">Please Select</option>
                  {allCountries && allCountries.map((ele) => (
                    <option key={ele.country_code} value={ele.name}>
                      {ele.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Race</Label>
                <Input
                  name="race"
                  value={employeeDetails?.race || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="Singaporean">Singaporean</option>
                  <option value="Malaysian">Malaysian</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Indian">Indian</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Religion</Label>
                <Input
                  name="religion"
                  value={employeeDetails?.religion || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="BUDDHIST">BUDDHIST</option>
                  <option value="CHRISTIAN">CHRISTIAN</option>
                  <option value="HINDU">HINDU</option>
                  <option value="MUSLIM">MUSLIM</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <FormGroup>
                <Label>Project Designation</Label>
                <Input
                  name="project_designation"
                  value={employeeDetails?.project_designation || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Supervisor">Supervisor</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Pay</Label>
                <Input
                  name="pay"
                  value={employeeDetails?.pay || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  <option value="GroupPay">Group Pay</option>
                  <option value="HourlyPay">Hourly Pay</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Company</Label>
                <Input
                  name="company_id"
                  value={employeeDetails?.company_id || ''}
                  onChange={handleInputChange}
                  type="select"
                >
                  <option>Please Select</option>
                  {companies && companies.map((ele) => (
                    <option key={ele.company_id} value={ele.company_id}>
                      {ele.company_name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Experience</Label>
                <Input
                  name="totalexperience"
                  value={totalExperience}
                  type="text"
                  disabled
                />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Project Manager</Label><br />
                <Label>Yes</Label>
                <Input
                  name="project_manager"
                  value="1"
                  type="radio"
                  checked={projectManager === '1'}
                  onChange={(e) => setProjectManager(e.target.value)}
                />
                &nbsp;&nbsp;
                <Label>No</Label>
                <Input
                  name="project_manager"
                  value="0"
                  type="radio"
                  checked={projectManager === '0'}
                  onChange={(e) => setProjectManager(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label>Team Leader</Label><br />
                <Label>Yes</Label>
                <Input
                  name="team_leader"
                  value="1"
                  type="radio"
                  checked={teamLeader === '1'}
                  onChange={(e) => setTeamLeader(e.target.value)}
                />
                &nbsp;&nbsp;
                <Label>No</Label>
                <Input
                  name="team_leader"
                  value="0"
                  type="radio"
                  checked={teamLeader === '0'}
                  onChange={(e) => setTeamLeader(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>
      </ComponentCard>
    </div>
  );
}

EmployeePart.propTypes = {
  employeeDetails: PropTypes.object,
  handleInputChange: PropTypes.func,
  allCountries: PropTypes.array,
  companies: PropTypes.array,
};

export default EmployeePart;
