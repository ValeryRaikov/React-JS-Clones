import Feed from '../feed/Feed';
import Sidebar from '../sidebar/Sidebar';
import './Home.css';

export default function Home({ sidebar }) {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                <Feed />
            </div>
        </>
    );
}