import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const disptach = useDispatch();  
  const {data, status} = useSelector(state => state.ProductSlice)
  //  console.log(status)
  // const [fetchProducts, setFetchProducts] = useState();
  const [result, setResult] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchKey, setSearchKey] = useState([]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const searchFilter = (e) => {
    const filterProducts = data.filter((prd) => {
      return prd.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchKey(filterProducts);
    setResult(true)
    if(e.target.value == '' || e.target.value == null){
      setSearchKey([]);
      setResult(false)
      return
    }


  };


  // async function fetchData() {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     const transformedData = data.map((prd) => {
  //       return {
  //         id: prd.id,
  //         title: prd.title,
  //         image: prd.image,
  //       };
  //     });
  //     setFetchProducts(transformedData);
  //    } catch (err) {
  //     console.log(err);
  //   }
  // }



  // useEffect(() => {
    // fetchData();

  // }, []);

  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-between">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none col-lg-6"
        >
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            className="logo"
            alt="Main Logo"
          />
          <span className="fs-4">Double header</span>
        </Link>
        <form
          className={`col-12 col-lg-auto mb-3 mb-lg-0 col-lg-6 position-relative ${
            isFocused ? "large-width" : "small-width"
          }`}
        >
          <div>
            <input
              type="text"
              className="form-control search-input"
              // value={searchKey}
              placeholder="Search..."
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={searchFilter}
            />
            <button className="search-btn position-absolute" type="submit">
              <svg
                width="24"
                height="24"
                className=""
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="#717478"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 16L21 21"
                  stroke="#717478"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

      {result &&
          <ul className="prd-list">
            {searchKey.map((prd) => {
              return (
                <li key={prd.id}>
                  <Link id={prd.id} to={`/ProductDetail/${prd.id}`}>
                    <p>
                      <img src={prd.image} alt="prd.title" title={prd.title} />
                    </p>
                    <div className="prd-title">{prd.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
            } 
        </form>
      </div>
    </header>
  );
};

export default Header;
