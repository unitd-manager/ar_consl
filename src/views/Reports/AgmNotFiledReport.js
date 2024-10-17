import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Button, Card, CardBody, Col, Input, FormGroup, Label, Row, Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import api from '../../constants/api';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ExportReport from '../../components/Report/ExportReport';

const AgmNotFiledReport = () => {
  //All state variable
  const [groupName, setGroupName] = useState(null);
  const [userSearchData, setUserSearchData] = useState('');
  const [companyName, setCompanyName] = useState('');

  //Get data from Company table
  const getProject = () => {
    api
      .get('/project/getAgmNotFiledReport')
      .then((res) => {
        setGroupName(res.data.data);
        setUserSearchData(res.data.data);
      })
      .catch(() => {
        message('Company Data Not Found', 'info');
      });
  };

  const handleSearch = () => {
    const newData = groupName
        .filter((y) => y.group_name === (y.group_name === '' ? y.group_name : companyName))
    setUserSearchData(newData);

  };
  useEffect(() => {
    getProject();
  }, []);
  const [page, setPage] = useState(0);

  const employeesPerPage = 20;
  const numberOfEmployeesVistited = page * employeesPerPage;
  const displayEmployees = userSearchData.slice(
    numberOfEmployeesVistited,
    numberOfEmployeesVistited + employeesPerPage,
  );
  const totalPages = Math.ceil(userSearchData.length / employeesPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  //structure of Training list view
  const columns = [
    {
      name: 'S.No',
      selector:'s_no',
    },
    {
      name: 'Company Name',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },   
    {
      name: 'Project Title',
      selector: 'project_title',
      sortable: true,
      grow: 0,
    },   
    {
      name: 'Task Title',
      selector: 'task_title',
      sortable: true,
      grow: 0,
    },   
    {
      name: 'Due Date',
      selector: 'due_date',
      sortable: true,
      grow: 0,
    },   
  ];
  return (
    <>
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <Card>
          <CardBody>
            <Row>
            <Col>
              <FormGroup>
                <Label>Select Group Name</Label>
                <Input
                  type="select"
                  name="group_name"
                  onChange={(e) => setCompanyName(e.target.value)}
                >
                  <option defaultValue="selected">Select Group Name</option>
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

              <Col md="1" className='mt-3'>
              <Button color="primary" className="shadow-none" onClick={() => handleSearch()}>Go</Button>
            </Col>
            </Row>
          </CardBody>
        </Card>

        <Card>
        <CardBody>
          <Row>
            <Col md="3">
              <Label><b> Group Name:</b> {companyName}</Label>
            </Col>
          </Row>
        </CardBody>
      </Card>

         <Card>
        <CardBody>
          <Row>
            <Col>
              <ExportReport columns={columns} data={userSearchData} /> 
            </Col>
          </Row>
        </CardBody>
      
        <CardBody>
          <Table>
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {displayEmployees &&
              displayEmployees.map((element, index) => {
                return (
                  <tr key={element.company_id}>
                    <td>{index + 1}</td>
                    <td>{element.company_name}</td>
                    <td>{element.project_title}</td>
                    <td>{element.task_title}</td>
                    <td>{element.due_date}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName="navigationButtons"
            previousLinkClassName="previousButton"
            nextLinkClassName="nextButton"
            disabledClassName="navigationDisabled"
            activeClassName="navigationActive"
          />
       </CardBody>
      </Card>
    </>
  );
};
export default AgmNotFiledReport;