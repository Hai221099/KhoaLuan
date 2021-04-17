import { useState , useCallback } from 'react';
import {Button , Modal , Form} from 'react-bootstrap';  
import propTypes from 'prop-types';

DeleteStudent.propTypes = {
  deleteStudentStart: propTypes.func,
  
}



export default function  DeleteStudent(props) {
    const { deleteStudentStart } = props;
    const {id} = props;
    const [show, setShow] = useState (false);
    const handleShow = () => setShow(true);

    const closeModal = useCallback(() => {
        setShow(false);
    }, [] );

    const getID = () => {
    deleteStudentStart(id)
    closeModal()
}

    
    return (
        <div>
            <Button className="ButtonAdd" variant = "danger" onClick={handleShow}>
                Xoá
            </Button>
            <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa học viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có muốn xóa học viên này không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={getID}>
            Xác nhận
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Hủy
          </Button>         
        </Modal.Footer>
      </Modal>
        </div>
    )
}