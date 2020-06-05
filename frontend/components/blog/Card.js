import Link from 'next/link';
import moment from 'moment';
import { API } from '../../config';


var striptags = require('striptags');


const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className=" mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className=" mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <div className="lead pb-4">
              
            <header>
        
                <Link href={`/blogs/${blog.slug}`}>
               
                    <a>
                       
                        <h2  id="card-js-title" className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header>
            <section>
                <p className="mark ml-1 pt-2 pb-2">
                    Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
            <section>
                <div id="cat">
                    Categories: {showBlogCategories(blog)}
                </div>
                <br />
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        {/* <div className="pb-3">{renderHTML(blog.excerpt)}</div> */}
                        <div className="card-text">{striptags(blog.excerpt)}</div><br/>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-read pt-2 read-btn">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;