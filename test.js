const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [data, setData] = useState([]);

    const handleClick = (val) => {
        setShow(val);
    }

    const handleSubmit = (name, status) => {
        setData([...data, {name, status}]);
    }

    const filteredData = data.filter(item => {
        if (show === 'active') {
            return true;
        } else if(show === 'completed'){
            return true
        }
        else {
            return item.status === show;
        }
    });

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" ref={nameRef}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" ref={statusRef}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={() => handleSubmit(nameRef.current.value, statusRef.current.value)}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td
