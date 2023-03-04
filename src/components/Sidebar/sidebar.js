import { React } from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = (posts) => {
    const categories = [...new Set(posts.posts.map(data=>data.category.toUpperCase()))];
    const authors = [...new Set(posts.posts.map(data=>data.publisher).filter(Boolean).map(data=>data.toUpperCase()))];
    const years = [...new Set(posts.posts.map(data=>new Date(data.published_date).getFullYear()).filter(Boolean))];
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
                                {categories.map((data) => (<li><Link to="#" className="link-dark rounded">{data}</Link></li>))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Author</Accordion.Header>
                            <Accordion.Body>
                                <ul>                                {authors.map((data) => (<li><Link to="#" key='{data}' className="link-dark rounded">{data}</Link></li>))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Years</Accordion.Header>
                            <Accordion.Body>
                                <ul>{years.map((data) => (<li><Link to="#" key='{data}' className="link-dark rounded">{data}</Link></li>))}
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

