import { Button } from "react-bootstrap";

export default function EducationalProgramDetailButton(props) {
  const { id } = props;

  return (
    <div>
      <Button href={`/admin/student/${id}`} className="btn btn-info">
        Chương trình đào tạo
      </Button>
    </div>
  );
}
