import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';
import AppContext from '../../context/AppContext';

const LeaveDetails = () => {
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);

  // const getSelectedLocationFromLocalStorage = () => {
  //   return localStorage.getItem('selectedLocation') || '';
  // };

  const getSelectedLocationFromLocalStorage = () => {
    const locations = localStorage.getItem('selectedLocation');
    const loc=JSON.parse(locations);
    return locations ? Number(loc) : null;
  };

  const selectedLocation = getSelectedLocationFromLocalStorage();

  console.log('Leavesite',selectedLocation)

  const getSelected = () => {
    return localStorage.getItem('selectedBranch') || '';
  };
  
 const branchId = getSelected()

  const [employee, setEmployee] = useState([]);
  const [leaveInsertData, setLeaveInsertData] = useState({
    employee_id: '',
    from_date: '',
    to_date: '',
    leave_type: '',
  });

  const handleInputs = (e) => {
    setLeaveInsertData({ ...leaveInsertData, [e.target.name]: e.target.value });
  };

 function isDateRangeOverlapping(newFrom, newTo, existingFromArray, existingToArray) {
  for (let i = 0; i < existingFromArray.length; i++) {
    const existingFrom = new Date(existingFromArray[i]);
    const existingTo = new Date(existingToArray[i]);

    // Overlap check: startA <= endB && endA >= startB
    if (newFrom <= existingTo && newTo >= existingFrom) {
      return true;
    }
  }
  return false;
}


  const calculateLeaveDays = (fromDate, toDate) => {
    const fromMoment = moment(fromDate);
    const toMoment = moment(toDate);

    const endOfMonth = fromMoment.clone().endOf('month');
    const startOfNextMonth = fromMoment.clone().add(1, 'month').startOf('month');

    const daysInCurrentMonth = toMoment.isAfter(endOfMonth)
      ? endOfMonth.diff(fromMoment, 'days') + 1
      : toMoment.diff(fromMoment, 'days') + 1;

    const daysInNextMonth = toMoment.isSameOrAfter(startOfNextMonth)
      ? toMoment.diff(startOfNextMonth, 'days') + 1
      : 0;

    return { daysInCurrentMonth, daysInNextMonth };
  };

  const insertLeave = () => {
  // Step 1: Check required fields first
  if (
    !leaveInsertData.employee_id ||
    !leaveInsertData.from_date ||
    !leaveInsertData.to_date ||
    !leaveInsertData.leave_type ||
    leaveInsertData.employee_id === 'selected' ||
    leaveInsertData.leave_type === 'selected'
  ) {
    message('Please fill all required fields', 'warning', 10000); // 10 sec
    return;
  }

  // Step 2: Validate from_date <= to_date
  if (new Date(leaveInsertData.to_date) < new Date(leaveInsertData.from_date)) {
    message('The To date should be the future date of From date', 'warning', 10000);
    return;
  }

  // Step 3: Check for overlapping leaves
 const emp = employee.find((a) => a.employee_id === Number(leaveInsertData.employee_id));
 console.log(emp);
const dateToCheckFromDate = new Date(leaveInsertData.from_date);
const dateToCheckToDate = new Date(leaveInsertData.to_date);

// Fix here 👇
if (
  isDateRangeOverlapping(
    dateToCheckFromDate,
    dateToCheckToDate,
    emp.from_date,
    emp.to_date
  )
) {
  message('You already applied for that day', 'warning', 10000);
  return;
}
  // Step 4: All good – prepare leave data and submit
  const { daysInCurrentMonth, daysInNextMonth } = calculateLeaveDays(
    leaveInsertData.from_date,
    leaveInsertData.to_date
  );

  leaveInsertData.no_of_days = daysInCurrentMonth;
  leaveInsertData.no_of_days_next_month = daysInNextMonth;
  leaveInsertData.creation_date = creationdatetime;
  leaveInsertData.created_by = loggedInuser.first_name;
  leaveInsertData.site_id = selectedLocation;
  leaveInsertData.branch_id = branchId;

  api
    .post('/leave/insertLeave', leaveInsertData)
    .then((res) => {
      const insertedDataId = res.data.data.insertId;
      message('Leave inserted successfully.', 'success');
      setTimeout(() => {
        navigate(`/LeavesEdit/${insertedDataId}?tab=1`);
      }, 300);
    })
    .catch(() => {
      message('Network connection error.', 'error');
    });
};


 const getEmployee = () => {
  api.post('/leave/getEmployeesite', { site_id: selectedLocation }).then((res) => {
    const fixed = res.data.data.map((el) => ({
      ...el,
      from_date: el.from_date ? String(el.from_date).split(',') : [],
      to_date: el.to_date ? String(el.to_date).split(',') : [],
    }));
    console.log('Employee Leave Data:', fixed); // DEBUG
    setEmployee(fixed);
  });
};


  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer />
      <Row>
        <Col md="12">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="6">
                    <Label>
                      Employee Name<span className="required"> *</span>
                    </Label>
                    <Input
                      type="select"
                      name="employee_id"
                      onChange={handleInputs}
                      value={leaveInsertData && leaveInsertData.employee_id}
                    >
                      <option value="selected">Please Select</option>
                      {employee &&
                        employee.map((ele) => (
                          <option key={ele.employee_id} value={ele.employee_id}>
                            {ele.employee_name}
                          </option>
                        ))}
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label>
                      From date<span className="required"> *</span>
                    </Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      value={leaveInsertData && moment(leaveInsertData.from_date).format('YYYY-MM-DD')}
                      name="from_date"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md="6">
                    <Label>
                      To date <span className="required"> *</span>
                    </Label>
                    <Input
                      type="date"
                      onChange={handleInputs}
                      min={leaveInsertData && moment(leaveInsertData.from_date).format('YYYY-MM-DD')}
                      value={leaveInsertData && moment(leaveInsertData.to_date).format('YYYY-MM-DD')}
                      name="to_date"
                    />
                  </Col>
                  <Col md="6">
                    <Label>
                      Type of Leave <span className="required"> *</span>
                    </Label>
                    <Input
                      type="select"
                      onChange={handleInputs}
                      value={leaveInsertData && leaveInsertData.leave_type}
                      name="leave_type"
                    >
                      <option value="selected">Please Select</option>
                      <option value="Absent">Absent</option>
                      <option value="Annual Leave">Annual Leave</option>
                      <option value="Hospitalization Leave">Hospitalization Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      color="primary"
                      onClick={() => {
                        insertLeave();
                      }}
                      type="button"
                      className="btn mr-2 shadow-none"
                    >
                      Save & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        navigate(-1);
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
                    >
                      Go to List
                    </Button>
                  </div>
                </Row>
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};

export default LeaveDetails;