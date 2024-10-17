import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import api from '../../constants/api';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ExportReport from '../../components/Report/ExportReport';

const ProjectReport = () => {
  //All state variable
  const [projectReport, setProjectReport] = useState(null);
  const [userSearchData, setUserSearchData] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  //Get data from Training table
  const getProject = () => {
    api
      .get('/project/getProjectReport')
      .then((res) => {
        setProjectReport(res.data.data);
        setUserSearchData(res.data.data);
      })
      .catch(() => {
        message('Project Data Not Found', 'info');
      });
  };

  const handleSearch = () => {
    const newData = projectReport
      .filter(
        (x) => endDate && startDate  ? (x.actual_finish_date <= (endDate === '' ? x.actual_finish_date : endDate) &&
        x.start_date >= (startDate === '' ? x.start_date : startDate) ): startDate ? x.start_date === (startDate === '' ? x.start_date : startDate) :
        x.actual_finish_date === (endDate === '' ? x.actual_finish_date : endDate ) 
      );
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
      name: 'SN',
      selector:'s_no',
    },
    {
      name: 'Company Name',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },
   
    {
      name: 'Reg No',
      selector: 'project_code',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Project Name',
      selector: 'Project_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Start Date',
      selector: 'start_date',
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
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="start_date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>End Date</Label>
                <Input type="date" name="actual_finish_date" onChange={(e) => setEndDate(e.target.value)} />
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
              <Label><b>Start Date:</b> {startDate}</Label>
            </Col>
            <Col md="3">
              <Label><b> End Date:</b> {endDate}</Label>
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
                  <tr key={element.project_id}>
                    <td>{index + 1}</td>
                    <td>{element.company_name}</td>
                    <td>{element.project_code}</td>
                    <td>{element.Project_name}</td>
                    <td>{moment(element.start_date).format('YYYY-MM-DD')}</td>
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
export default ProjectReport;