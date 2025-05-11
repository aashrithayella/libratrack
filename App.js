import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
}from "react-router-dom";
//imported pages
import Login from "./pages/login";
import BookStatus from "./pages/bookstatus";
import StudentFaculty from "./pages/studentfaculty";
import StudentFaculty2 from "./pages/studentfaculty2";
import AddBooks from "./pages/addbooks";
import History from "./pages/history";
import Logout from "./logout";
import StudentDetails from "./pages/studentdetails";
import Bid1 from "./pages/bid1";
import Bid2 from "./pages/bid2";
import Bid3 from "./pages/bid3";
import Bid4 from "./pages/bid4";
import Bid5 from "./pages/bid5";
import IssueSuccess from "./pages/issuesuccess";
import FacultyDetails from "./pages/facultydetails";
import StudentDetails2 from "./pages/studentdetails2";
import Brd1 from "./pages/brd1";
import Brd2 from "./pages/brd2";
import Brd3 from "./pages/brd3";
import Brd4 from "./pages/brd4";
import Brd5 from "./pages/brd5";
import ReturnSuccess from "./pages/returnsuccess";
import FacultyDetails2 from "./pages/facultydetails2";
import StudentHistory from "./pages/studenthistory";
import FacultyHistory from "./pages/facultyhistory";
import BookHistory from "./pages/bookhistory";

//Routing 
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login/>} />
      <Route path="/bookstatus" element={<BookStatus/>} />
      <Route path="/studentfaculty" element={<StudentFaculty/>} />
      <Route path="/studentfaculty2" element={<StudentFaculty2/>} />
      <Route path='/addbooks' element={<AddBooks/>} />
      <Route path='/history' element={<History/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/studentdetails' element={<StudentDetails/>} />
      <Route path='/bid1' element={<Bid1/>} />
      <Route path='/bid2' element={<Bid2/>} />
      <Route path='/bid3' element={<Bid3/>} />
      <Route path='/bid4' element={<Bid4/>} />
      <Route path='/bid5' element={<Bid5/>} />
      <Route path='/issuesuccess' element={<IssueSuccess/>} />
      <Route path='/facultydetails' element={<FacultyDetails/>} />
      <Route path='/studentdetails2' element={<StudentDetails2/>} />
      <Route path='/brd1' element={<Brd1/>} />
      <Route path='/brd2' element={<Brd2/>} />
      <Route path='/brd3' element={<Brd3/>} />
      <Route path='/brd4' element={<Brd4/>} />
      <Route path='/brd5' element={<Brd5/>} />
      <Route path='/returnsuccess' element={<ReturnSuccess/>} />
      <Route path='/facultydetails2' element={<FacultyDetails2/>} />
      <Route path='/studenthistory' element={<StudentHistory/>} />
      <Route path='/facultyhistory' element={<FacultyHistory/>} />
      <Route path='/bookhistory' element={<BookHistory/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}/>;
}
export default App;
