import './header.css'
import { TfiAlignRight } from "react-icons/tfi";
const Header=({setCategory})=>{
  return <>
  

<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom head">
      <div className="content">
    <div className="container d-flex flex-wrap justify-content-center firstdiv">
      <div href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="3"><use xlink:href="#bootstrap"></use></svg>
        <span className="fs-4 just">Just <span className="con">Connect</span></span>
      </div>
    </div>
    </div>
      <ul class="nav col-10 col-md-auto mb-2 justify-content-center mb-md-0  contents">     
      <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
    
    
  
  
  </>

}
 export default Header; 