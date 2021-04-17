import { Button } from "react-bootstrap";

export default function ClassListButton(props) {
  const { id } = props;

  return (
    <div>
      <Button href={`/admin/faculty/${id}`} className="btn btn-info">
        Danh sách lớp học
      </Button>
    </div>
  );
}
