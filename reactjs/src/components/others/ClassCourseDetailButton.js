import { Button } from "react-bootstrap";

export default function EducationalProgramDetailButton(props) {
  const { id } = props;

  return (
    <div>
      <Button href={`/class/${id}`} className="btn btn-info">
        Thông tin lớp học
      </Button>
    </div>
  );
}
