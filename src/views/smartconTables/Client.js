import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import Flag from '../../components/Flag';
import message from '../../components/Message';
import PdfClientListView from '../../components/PDF/PdfClientListView';

const Clients = () => {
  //Const Variables
  const [clients, setClients] = useState(null);

  // get Clients
  const getClients = () => {
    api.get('/clients/getClients').then((res) => {
      setClients(res.data.data);
      /* eslint-disable */
      // $(document).ready(function () {
      //   $('#myInput').on('keyup', function () {
      //     var value = $(this).val().toLowerCase();

      //     $('#myTable tr').filter(function () {
      //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      //     });
      //   });
      // });

      /* eslint-disable */
    });
  };
  // update publish
  const updateFlag = (obj) => {
    obj.flag = !obj.flag;
    api
      .post('/clients/update-flag', obj)
      .then(() => {
        getClients();
        message('Flag updated successfully', 'success');
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
  };

  useEffect(() => {
    setTimeout(() => {
      $('#example').DataTable({
        pagingType: 'full_numbers',
        pageLength: 20,
        processing: true,
        dom: 'Bfrtip',
        buttons: [
          {
            extend: 'print',
            text: 'Print',
            className: 'shadow-none btn btn-primary',
          },
        ],
      });
    }, 1000);

    getClients();
  }, []);
  //  stucture of client list view
  const columns = [
    {
      name: 'id',
    
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Flag',
      selector: 'flag',
      cell: () => <Icon.Flag />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Name',
      
    },
    {
      name: 'Reg No',
      
    },
    {
      name: 'Phone',
      
    },
    {
      name: 'Incorporation Date',
      
    },
    {
      name: 'Status',
    
    },
    {
      name: 'Category',
    
    },
    {
      name: 'Website',
     
    },
    {
      name: 'Industry',
      
    },
    {
      name: 'Print',
     
    },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        {/* ClientDetailsn Add Button */}
        {/* <ToastContainer></ToastContainer> */}
        <CommonTable
          title="Client List"
          Button={
            <Link to="/ClientDetails">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
          }
        >
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((element, i) => {
                return (
                  <tr key={element.company_id}>
                    <td>{i + 1}</td>
                    <td>
                      <Link to={`/ClientEdit/${element.company_id}?tab=1`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          updateFlag(element);
                        }}
                      >
                        <Flag value={element.flag ? 1 : 0} />
                      </span>
                    </td>
                    <td>{element.company_name}</td>
                    <td>{element.reg_no}</td>
                    <td>{element.phone}</td>
                    <td>{element.date_of_incorporation}</td>
                    <td>{element.status}</td>
                    <td>{element.category}</td>
                    <td>{element.website}</td>
                    <td>{element.industry}</td>
                    <td><PdfClientListView companyId={element.company_id}></PdfClientListView></td>
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>

        {/* company or Client table list */}
        {/* <table id="example" className="display border border-secondary rounded">
          
        </table> */}
      </div>
    </div>
  );
};

export default Clients;
