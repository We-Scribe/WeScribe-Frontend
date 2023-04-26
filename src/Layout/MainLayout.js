import MyNavbar from '../components/MyNavbar.js' 
import '../static/MainLayout.css'
function MainLayout(props) {
  return (
    <div>
        <MyNavbar />
        {props.children}
    </div>
  );
}

export default MainLayout;