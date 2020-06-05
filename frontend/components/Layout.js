import Header from './Header';
import Footer from '../pages/footer/index'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <div> <Footer/></div>
           
        </React.Fragment>
    );
};

export default Layout;