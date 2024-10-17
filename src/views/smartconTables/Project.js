import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
// import Swal from 'sweetalert2'
import {
  Button,
  Input,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  FormGroup,
  Label
  
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link} from 'react-router-dom';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import message from '../../components/Message';

const Project = () => {
  //const { id } = useParams();
    //navigate
    //const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(null);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [stockChangeId, setStockChangeId] = useState();
  const [projectDetail, setProjectDetail] = useState({
    project_id: '',
  });

  const handleInputs = (e, element) => {
    setProjectDetail({...projectDetail,
      project_id: element.project_id, [e.target.name]:e.target.value
    });
  }
 
  
  const UpdateData = () => {
    api
      .post('/project/editProjects', projectDetail)
      .then(() => {
        //console.log('edit Line Item', res.data.data);
        message('Project Updated Successfully.', 'success');
        window.location.reload()
      })
      .catch(() => {
        message('Unable to edit quote. please fill all fields', 'error');
      });
  };

  const getProject = () => {
    api
      .get('project/getProject')
      .then((res) => {
        setProject(res.data.data);
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
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getProject();
    //getProjectById();
    //setProjectDetail();
  }, []);

  const columns = [
    {
      name: 'id',
      selector: 'opportunity_id',
      grow: 0,
      wrap: true,
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
      name: 'Code',
      selector: 'project_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'company',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },
    {
      name: 'contact',
      selector: 'contact_name',
      sortable: true,
      width: 'auto',
      grow: 3,
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: 'Category',
      selector: 'category',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Start Date',
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Value',
    },
    {
      name: 'Still to Bill',
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
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        <CommonTable
          loading={loading}
          title="Project List"
          Button={
            <Link to="/ProjectDetails">
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
            {project &&
              project.map((element, i) => {
                const balanceAmountClass = element.balanceAmount < 0 ? 'text-danger' : '';
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Link to={`/projectEdit/${element.project_id}?tab=1`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.project_code}</td>
                    <td>{element.title}</td>
                    <td>{element.company_name}</td>
                    <td>{element.contact_name}</td>
                    <td>{element.category}</td>
                    <td>{element.start_date}</td>
                    <td>{element.status}</td>
                    <td>{element.project_value}</td>
                    <td className={balanceAmountClass}>{element.balanceAmount}</td>
                    {editProjectModal && stockChangeId === element.project_id ? (
                      
                      <td>
                        <span
                            onClick={() => {
                              setStockChangeId(element.project_id);
                              setEditProjectModal(true);
                            }}
                          >
                            <Icon.Edit />
                          </span>
                        {' '}
                        <Modal isOpen={editProjectModal}>
                        <ModalHeader>Title</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Row>
                              <Label sm="2">Estimated Finish Date</Label>
                              <Col sm="10">
                              <Input
                          type="date"
                          name="estimated_finish_date"
                          defaultValue={element.estimated_finish_date}
                          onChange={(e) => handleInputs(e, element)}
                        />
                                {/* <Input
                                  type="date"
                                  name="estimated_finish_date"
                                  defaultValue={
                                    projectDetail && projectDetail.estimated_finish_date
                                  }
                                  onChange={handleInputs}
                                /> */}
                              </Col>
                            </Row>
                          </FormGroup>
                          <FormGroup>
                            <Row>
                              <Label sm="2">Per Completed</Label>
                              <Col sm="10">
                              <Input
                          type="select"
                          name="per_completed"
                          defaultValue={element.per_completed}
                          onChange={(e) => handleInputs(e, element)}
                        >
                                {/* <Input
                                  type="select"
                                  name="per_completed"
                                  defaultValue={projectDetail && projectDetail.per_completed}
                                  onChange={handleInputs}
                                > */}
                                  <option defaultValue="selected">Please Select</option>
                                  <option value="0">0</option>
                                  <option value="20">20</option>
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="30">30</option>
                                  <option value="50">50</option>
                                  <option value="75">75</option>
                                  <option value="55">55</option>
                                  <option value="60">60</option>
                                  <option value="90">90</option>
                                  <option value="95">95</option>
                                  <option value="40">40</option>
                                  <option value="100">100</option>
                                  <option value="Others">Others</option>
                                </Input>
                              </Col>
                            </Row>
                          </FormGroup>

                          <FormGroup>
                            <Row>
                              <Label sm="2">Work Status</Label>
                              <Col sm="10">
                              <Input
                          type="select"
                          name="status"
                          defaultValue={element.status}
                          onChange={(e) => handleInputs(e, element)}
                        >
                                {/* <Input
                                  type="select"
                                  name="status"
                                  defaultValue={projectDetail && projectDetail.status}
                                  onChange={handleInputs}
                                > */}
                                  <option defaultValue="selected" value="WIP">
                                    WIP
                                  </option>
                                  <option value=" C/O PARA THAI ADDICTION ">
                                    {' '}
                                    C/O PARA THAI ADDICTION{' '}
                                  </option>
                                  <option value="Cancelled">Cancelled</option>
                                  <option value="Complete">Complete</option>
                                  <option value="Others">Others</option>
                                  <option value="To Be Started">To Be Started</option>
                                  <option value="Latest">Latest</option>
                                </Input>
                              </Col>
                            </Row>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button
                          color="primary"
                          className="shadow-none"
                          onClick={() => {
                            //adjuststock(element);
                            UpdateData();
                            setEditProjectModal(false);
                          }}
                        >
                          save
                        </Button>
                        <Button
                            color="secondary"
                            className="shadow-none"
                            onClick={() => {
                              setEditProjectModal(false);
                            }}
                          >
                            {' '}
                            Cancel{' '}
                          </Button>
                        </ModalFooter>
                        </Modal>
                      </td>
                    ) : (
                      <td>
                         <span
                            onClick={() => {
                              setStockChangeId(element.project_id);
                              setEditProjectModal(true);
                            }}
                          >
                            <Icon.Edit />
                          </span>
                      </td>
                    )}
                                        
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default Project;
