import { connect } from "react-redux";
import { login } from "../../actions/user";
import Login from "../../contents/public/login";

const mapStateToProps = (state) => ({
  userInfor: state.userInfor,
});

const mapDispatchToProps = {
  loginStart: login.start,
  loginSucceed: login.succeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
