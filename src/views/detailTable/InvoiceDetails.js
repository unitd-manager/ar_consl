import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label,  Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';


const GetNew = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const navigate = useNavigate();

  //  insertClient
  const [clientForms, setClientForms] = useState({
    project_id: '',
  });

  //Client Functions/Methods
  const handleClientForms = (e) => {
    setClientForms({ ...clientForms, [e.target.name]: e.target.value });
  };
console.log(handleClientForms)
  // Client Insert
  const insertClient = () => {
    if (selectedProject !== '') {
      const requestBody = {
        project_id: selectedProject, // Use the selected project ID
        creation_date: creationdatetime,
      };
  
      api
        .post('/invoice/insertInvoice', requestBody) // Adjust the endpoint to match the invoice table
        .then((res) => {
          const insertedInvoiceId = res.data.data.insertId;
          console.log(insertedInvoiceId);
          message('Invoice created successfully.', 'success');
          setTimeout(() => {
            navigate(`/InvoiceEdit/${insertedInvoiceId}`); // Redirect to edit page with the inserted invoice ID
          }, 300);
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please select a project.', 'warning');
    }
  };
  

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/invoice/getClientsProject");
        const data = response.data?.data?.map((project) => ({
          id: project.project_id,
          name: project.project_title,
          companyName: project.company_name,
        })) || [];
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  // Group projects by company name
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.companyName]) {
      acc[project.companyName] = [];
    }
    acc[project.companyName].push(project);
    return acc;
  }, {});

  return (

    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6" xs="12">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>
                      Project Name <span className="required"> *</span>{' '}
                    </Label>

                    <select
    id="project"
    value={selectedProject}
    onChange={handleProjectChange}
  >
    <option value="">-- Select a Project --</option>
    {Object.entries(groupedProjects).map(([companyName, projectss]) => (
      <optgroup key={companyName} label={companyName}>
        {projectss.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </optgroup>
    ))}
  </select>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      color="primary"
                      onClick={() => {
                        insertClient();
                      }}
                      type="button"
                      className="btn mr-2 shadow-none"
                    >
                      Save & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to cancel  \n  \n You will lose any changes made',
                          )
                        ) {
                          navigate(-1);
                        }
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
                    >
                      Cancel
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

export default GetNew;
