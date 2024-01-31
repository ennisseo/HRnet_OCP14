import './index.css'
import CreateEmployeeForm from '../../components/Form';

function Home() {
    return (
        <main>
            <h1 className="title">HRnet</h1>
            <h2>Create employee</h2>
            <CreateEmployeeForm />
        </main>
    );
}

export default Home;
