export const Login = props => {
  const Users = () => {
    const [users, setUsers] = useState([]);
    
  }
  return (
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-title">
                
            </div>

            <div class="">
                <div class="col-lg-12 login-form">
                    <form>
                        <div class="form-group">
                            <label class="form-control-label">EMAIL</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" class="form-control" i />
                        </div>

                        <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                
                            </div>
                            <div class="col-lg-6 login-btm login-button">
                                <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
  )
}

  
  export default Login