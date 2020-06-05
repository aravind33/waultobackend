import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import '../../static/css/styles.css'

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div id="container-fluid" >
                    <div className="row" >
                        <div className="col-md-12 pt-5 pb-5" style={{marginLeft:"39%"}}>
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4" style={{marginLeft:"33.5%"}}>
                            <ul class="list-group" >
                                <li className="list-group-item" style={{textAlign:"center"}}>
                                    <Link href="/admin/crud/category-tag" style={{width:"100%"}}>
                                        <a>Create Category and Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item" style={{textIndent:"25%"}}>
                                        <a href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item" style={{textIndent:"25%"}}>
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Admin>    
        </Layout>
    );
};

export default AdminIndex;