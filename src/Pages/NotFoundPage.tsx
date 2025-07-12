import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

function NotFoundPage() {
    return (
        <Layout title="">
            <div className="notFound">
                <h1 className="notFound__title">404 - Page Not Found</h1>
                <p className="notfound__Text">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="notFound__link">Return</Link>
            </div>
        </Layout>

    );
}

export default NotFoundPage;
