import { useState , useCallback } from 'react';
import {Button , Modal } from 'react-bootstrap';  
import propTypes from 'prop-types';

DeleteEducationalProgram.propTypes = {
  deleteEducationalProgramStart: propTypes.func,
  
}



export default function  DeleteEducationalProgram(props) {
    const { deleteEducationalProgramStart } = props;
    const {id} = props;
    const [show, setShow] = useState (false);
    const handleShow = () => setShow(true);

    const closeModal = useCallback(() => {
        setShow(false);
    }, [] );
   
    const getID = () => {
      deleteEducationalProgramStart(id)
    }

    
    return (
        <div>
            <Button className="ButtonAdd" variant = "danger" onClick={handleShow}>
                Xoá
            </Button>
            <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa chương trình đào tạo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có nuốn xóa chương trình đào tạo này không?
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