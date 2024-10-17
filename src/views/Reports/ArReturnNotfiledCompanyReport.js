import React, { useEffect, useState } from 'react';
import { Row, Button, Col, Input, Table, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { ToastContainer } from 'react-toastify';
import api from '../../constants/api';
import message from '../../components/Message';
import ExportReport from '../../components/Report/ExportReport';

function ArReturnNotfiledCompanyReport() {
  const [arReturnNotfiledCompanyReport, setArReturnNotfiledCompanyReport] = useState([]);


  const [period, setPeriod] = useState({
    month: null,
    year: null,
  });

  const handleInputs = (e) => {
    setPeriod({ ...period, [e.target.name]: e.target.value });
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
  const getArReturnNotfiledCompanyReport = () => {
    const selectedMonth = period.month;

    api
      .get('/project/getArReturnNotfiledCompanyReport',{ params: { month: selectedMonth } })
      .then((res) => {
        setArReturnNotfiledCompanyReport(res.data.data);
      })
      .catch(() => {
        message('Project Data Not Found', 'info');
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
    setTimeout(() => {
      $('#example').DataTable({
        pagingType: 'full_numbers',
        pageLength: 20,
        processing: true,
        dom: 'Bfrtip',
        buttons: [
          {
            extend: 'csv',
            text: 'CSV',
            className: 'shadow-none btn btn-primary',
          },
          {
            extend: 'print',
            text: 'Print',
            className: 'shadow-none btn btn-primary',
          },
        ],
      });
    }, 1000);
  }, []);

  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <div className="card p-2 shadow-none">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Input type="select" name="month" onChange={handleInputs}>
              <option value="">Select Month</option>
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
              onClick={() => {
                getArReturnNotfiledCompanyReport();
              }}
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
          <Col>
            <b>Month:</b> &nbsp; <span>{period.month}</span>
          </Col>
        
        </Row>
      </div>

      <Card>
        <CardBody>
          <Row>
            <Col>
              <ExportReport columns={columns} data={arReturnNotfiledCompanyReport} />
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
              {arReturnNotfiledCompanyReport &&
                arReturnNotfiledCompanyReport.map((res, index) => {
                  return (
                    <tr key={res.company_id}>
                      <td>{index + 1}</td>
                      <td>{res.company_name}</td>
                      <td>{res.project_title}</td>
                      <td>{res.task_title}</td>
                      <td>{res.due_date}</td>
                      
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
        </CardBody>
      </Card>
    </div>
  );
}

export default ArReturnNotfiledCompanyReport;
