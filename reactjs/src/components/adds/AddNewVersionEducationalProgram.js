import { useCallback } from "react";
import { Button } from "react-bootstrap";

// AddEducationalProgram.propTypes = {
//   addEducationalProgramStart: propTypes.func,
// }

export default function AddNewVersionEducationalProgram(props) {
  const { id } = props;
  const openCreatePage = useCallback(() => {
    window.location.href = `/admin/educationalProgramCreate/${id}`;
  }, []);

  return (
    <div>
      <Button className="ButtonAdd" variant="success" onClick={openCreatePage}>
        Thêm mới phiên bản
      </Button>
    </div>
  );
}
