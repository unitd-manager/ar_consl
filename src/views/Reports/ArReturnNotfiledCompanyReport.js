import React, { useEffect, useState } from 'react';
import { Row, Button, Col, Input, Table, Card, CardBody, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { ToastContainer } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import api from '../../constants/api';
import message from '../../components/Message';
import ExportReport from '../../components/Report/ExportReport';

function ArReturnNotfiledCompanyReport() {
  const [groupName, setGroupName] = useState(null);
  const [userSearchData, setUserSearchData] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSearch = () => {
    const newData = groupName
        .filter((y) => y.group_name === (y.group_name === '' ? y.group_name : companyName))
    setUserSearchData(newData);

  };


  //const [selectedMonth, setSelectedMonth] = useState('');
  
  //GET MONTH NAME
    /*const handleMonthChange = (event) => {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const selectedLabel = selectedOption.textContent;
      const selectedValue = selectedOption.value;
  
      setSelectedMonth({
        label: selectedLabel,
        value: selectedValue,
      });
    };*/

    //Get data from Training table
  // const getArReturnNotfiledCompanyReport = () => {
  //   const selectedMonth = period.month;
 
  //   api
  //     .get('/project/getArReturnNotfiledCompanyReport',{ params: { month: selectedMonth } })
  //     .then((res) => {
  //       setArReturnNotfiledCompanyReport(res.data.data);
  //       console.log('selectedMonth', selectedMonth);
  //     })
  //     .catch(() => {
  //       message('Project Data Not Found', 'info');
  //     });
  // };

  const getArReturnNotfiledCompanyReport = () => {
    api
      .get('/project/getArReturnNotfiledCompanyReport')
      .then((res) => {
        setGroupName(res.data.data);
        setUserSearchData(res.data.data);
      })
      .catch(() => {
        message('Company Data Not Found', 'info');
      });
  };
  const columns = [
    {
      name: 'S.No',
      selector: 's_no',
    },
    {
      name: 'Company Name',
      selector: 'company_name',
    },
    {
      name: 'Project Title',
      selector: 'project_title',
    },
    {
      name: 'Task Title',
      selector: 'task_title',
    },
    {
      name: 'Due Date',
      selector: 'due_date',
    },
    
  ];

  useEffect(() => {
    getArReturnNotfiledCompanyReport();
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

  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <div className="card p-2 shadow-none">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
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
          </Col>
         
          <Col md="2">
            <Button
              color="primary"
              className="shadow-none"
              onClick={() => handleSearch()}
            >
              Go
            </Button>
          </Col>
        </Row>
      </div>

      <div className="card p-2 text-center shadow-none mt-0">
        <b>Ar Return Notfiled Company Report</b>
      </div>
      <div className="card p-2 shadow-none mt-0">
        <Row>
        <Col md="3">
              <Label><b> Group Name:</b> {companyName}</Label>
            </Col>
        
        </Row>
      </div>

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
              <tr>
                <td>
                  <b></b>
                </td>
                <td>
                  <b></b>
                </td>
               
              </tr>
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
    </div>
  );
}

export default ArReturnNotfiledCompanyReport;
