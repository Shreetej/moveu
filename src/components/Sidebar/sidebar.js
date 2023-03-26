import { React, useContext } from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import postContext from '../../context/posts/postContext';

const Sidebar = () => {

    const context = useContext(postContext);
    const { posts, setposts} = context;
    const categories = [...new Set(posts.map(data=>data.category.toUpperCase()))];
    const authors = [...new Set(posts.map(data=>data.publisher).filter(Boolean).map(data=>data.toUpperCase()))];
    const years = [...new Set(posts.map(data=>new Date(data.published_date).getFullYear()).filter(Boolean))];

    const filterAuthor = (author) => {
        setposts(posts.filter((data)=>data.publisher.toUpperCase()===author))
    }

    const filterCategory = (category) => {
        setposts(posts.filter((data)=>data.category.toUpperCase()===category))
    }

    const filterYear = (year) => {
        console.log("Hi"+year)
        setposts(posts.filter((data)=>data.published_date===year))
    }

    return (
        <>
            <Container>
                <div className="flex-shrink-0 p-3 mt-3 bg-white" style={{ "width": "280px" }}>
                    <Link to="#" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <svg className="bi me-2" width="30" height="24"></svg>
                        <span className="fs-5 fw-semibold">Filter</span>
                    </Link>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Categories</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                {categories.map((data) => (<li key={data}><Link to="#" className="link-dark rounded" onClick={()=>filterCategory(data)}>{data}</Link></li>))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Author</Accordion.Header>
                            <Accordion.Body>
                                <ul>{authors.map((data) => (<li key={data}><Link to="#" className="link-dark rounded" onClick={()=>filterAuthor(data)}>{data}</Link></li>))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Years</Accordion.Header>
                            <Accordion.Body>
                                <ul>{years.map((data) => (<li key={data}><Link to="#" className="link-dark rounded" onClick={()=>filterYear(data)}>{data}</Link></li>))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                </div>
            </Container>
        </>
    )
};

export default Sidebar

