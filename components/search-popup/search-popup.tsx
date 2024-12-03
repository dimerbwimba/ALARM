const SearchPopup = ()=>{
    return (
        <div className="td-search-popup" id="td-search-popup">
        {/* <!-- search popup start--> */}
        <form action="https://solverwp.com/demo/html/charite/index.html" className="search-form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search....."/>
            </div>
            <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
        </form>
    {/* <!-- search popup end--> */}
    </div>
    );
}

export default SearchPopup;