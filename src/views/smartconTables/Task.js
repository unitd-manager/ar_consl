import React, { useState, useEffect } from 'react';
import { Button, Input, Table, Row, Col } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import api from '../../constants/api';

const TaskList = () => {
  const [filters, setFilters] = useState({
    staff: '',
    due: '',
    company: '',
    project: '',
    team: '',
    specialSearch: '',
    keyword: ''
  });

  const [taskData, setTaskData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [employees, setEmployees] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  console.log('teamList',teamList);
   // Fetch dropdowns
  const getDropdowns = () => {
    api.get('/task/getProjects').then((res) =>{ setProjectList(res.data.data);
console.log('projectres',res.data.data);}).catch(() => {
       
      })
      ;
    api.get('/task/getEmployees').then((res) =>{ setEmployees(res.data.data);
console.log('projectres',res.data.data);}).catch(() => {
        
       
      });
      api.get('/project/getCompany').then((res) =>{ setCompanyList(res.data.data);
console.log('companyres',res.data.data);}).catch(() => {
       
      })
      ;
    api.get('/task/getTeams').then((res) =>{ setTeamList(res.data.data);
console.log('teamres',res.data.data);}).catch(() => {

      });
  };

  useEffect(() => {
    getDropdowns();
  }, []);

  // Fetch filtered task data
  const fetchData = async () => {
    try {
      const res = await api.get('/task/getFilteredTasks', {
        params: {
          ...filters,
          page: currentPage,
        },
      });
      setTaskData(res.data.data);
      setTotalRecords(res.data.total);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="p-4 bg-light">
      <h4 className="mb-4">Task Management</h4>

      <Row className="mb-3">
        <Col md={2}>
          <Input type="select" name="staff" value={filters.staff} onChange={handleFilterChange}>
            <option value="">Select Staff</option>
            {employees.map((s) => (
              <option key={s.employee_id} value={s.employee_id}>{s.first_name}</option>
            ))}
          </Input>
        </Col>
        <Col md={2}>
          <Input type="select" name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="">Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </Input>
        </Col>
        <Col md={2}>
          <Input type="select" name="company" value={filters.company} onChange={handleFilterChange}>
            <option value="">Select Company</option>
            {companyList.map((c) => (
              <option key={c.company_id} value={c.company_id}>{c.company_name}</option>
            ))}
          </Input>
        </Col>
        <Col md={2}>
          <Input type="select" name="project" value={filters.project} onChange={handleFilterChange}>
            <option value="">Select Project</option>
            {projectList.map((p) => (
              <option key={p.project_id} value={p.project_id}>{p.title}</option>
            ))}
          </Input>
        </Col>
        {/* <Col md={2}>
          <Input type="select" name="team" value={filters.team} onChange={handleFilterChange}>
            <option value="">Select Team</option>
            {teamList.map((t) => (
              <option key={t.team_id} value={t.team_id}>{t.name}</option>
            ))}
          </Input>
        </Col> */}
        {/* <Col md={2}>
          <Input type="select" name="specialSearch" value={filters.specialSearch} onChange={handleFilterChange}>
            <option value="">Special</option>
            <option value="my_tasks">My Tasks</option>
            <option value="high_priority">High Priority</option>
          </Input>
        </Col> */}
        <Col md={4}>
          <Input
            name="keyword"
            placeholder="Search by task title, code..."
            value={filters.keyword}
            onChange={handleFilterChange}
          />
        </Col>
        </Row>
        <Row className="mt-2">
        <Col md={8}>
          <Button color="primary" onClick={handleSearch}><i className="fa fa-search" /></Button>{' '}
          {/* <Button color="secondary"><i className="fa fa-print" /></Button>{' '}
          <Button color="danger"><i className="fa fa-trash" /></Button> */}
        </Col>
      </Row>
<Row>
      <Table bordered hover size="sm" className="bg-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Edit</th>
            <th>Flag</th>
            <th>Code</th>
            <th>Company Name</th>
            <th>Project</th>
            <th>Type</th>
            <th>Task Title</th>
            <th>Staff</th>
            <th>Team</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Est. Hours</th>
            <th>Total Hours</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {taskData.length > 0 ? taskData.map((task, index) => (
            <tr key={task.task_id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/TaskEdit/${task.task_id}`}>
                <Button color="link" onClick={() => console.log('Edit', task.task_id)}>
                  <i className="fa fa-edit" />
                </Button>
                </Link>
              </td>
              <td>
                <i
                  className="fa fa-flag"
                  style={{ color: task.flagged ? 'red' : '#ccc', cursor: 'pointer' }}
                  onClick={() => console.log('Flag clicked', task.task_id)}
                />
              </td>
              <td>{task.task_code}</td>
<td>{task.company_name}</td>
<td>{task.title}</td>
<td>{task.type}</td>
<td>{task.task_title}</td>
<td>{task.staff_name}</td>
<td>{task.team}</td>
<td>{task.due_date?moment(task.due_date).format('YYYY-MM-DD'):''}</td>
<td>{task.status}</td>
<td>{task.estimated_hours}</td>
<td>{task.total_hours}</td>
<td>{task.time}</td>

            </tr>
          )) : (
            <tr>
              <td colSpan="15" className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
</Row>
      <div className="d-flex justify-content-between px-2">
        <span>Total Records : {totalRecords}</span>
        <div>
          <Button size="sm" disabled={currentPage === 1} onClick={handlePrev}>Previous</Button>{' '}
          <Button size="sm" onClick={handleNext}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
