import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from 'reactstrap';
import PropTypes from 'prop-types';

function ViewMontlyLeaveModal({ monthlyLeaveModal, setMonthlyLeaveModal, monthlyLeave }) {
  ViewMontlyLeaveModal.propTypes = {
    monthlyLeaveModal: PropTypes.bool,
    setMonthlyLeaveModal: PropTypes.func,
    monthlyLeave: PropTypes.array,
  };

  const alcolumns = [
    {
      name: 'From Date',
      selector: 'from_date',
      sortable: true,
      grow: 0,
      wrap: true,
    },

    {
      name: 'To Date',
      selector: 'to_date',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'No.of Days',
      selector: 'no_of_days',
      sortable: true,
      grow: 0,
    },
  ];

return (
    <>
      <Modal isOpen={monthlyLeaveModal}>
        <ModalHeader>Montly Leave History</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <Card className="shadow-none">
                <CardBody className="shadow-none">
                  <Table id="example" className="display border border-secondary rounded">
                    <thead>
                      <tr>
                        {alcolumns.map((cell) => {
                          return <td key={cell.name}>{cell.name}</td>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyLeave &&
                        monthlyLeave.map((element) => {
                          return (
                            <tr key={element.leave_id}>
                              <td>{element.from_date}</td>
                              <td>{element.to_date}</td>
                              <td>{element.no_of_days}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="dark"
            className="shadow-none"
            onClick={() => {
              setMonthlyLeaveModal(false);
            }}
          >
            {' '}
            Close{' '}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ViewMontlyLeaveModal;
