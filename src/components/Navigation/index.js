import { Link } from "react-router-dom";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Input, Modal } from "antd";
import "./main.scss";

import { searchProduct } from "../../api/serviceApi";
import { useQuery } from "@tanstack/react-query";

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState();
  console.log(input);
  const { data } = useQuery({
    queryKey: ["Search Product"],
    queryFn: () => searchProduct(input),
  });
  console.log(data);
  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     </div>
  //   );
  // }
  // if (data?.data?.length === 0) {
  //   return (
  //     <div>
  //       <h3>Không có sản phẩm phù hợp</h3>
  //     </div>
  //   );
  // }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="promo-bar">
        <a href="/">
          <span>SNEAKER & CLOTHING AUTHENTIC 100%</span>
        </a>
      </div>
      <header className="main-header border">
        <div className="container">
          <div className="row row-flex">
            <div className="col-md-2 col-sm-5 col-xs-5">
              <div className="logo">
                <Link to="/">
                  <h1>BOSS GIÀY</h1>
                </Link>
              </div>
            </div>
            <div className="col-md-8 hidden-sm hidden-xs">
              <div className="main-header-menu">
                <nav className="desk-menu">
                  <ul>
                    <li>
                      <Link to="/Sneaker">SNEAKER</Link>
                    </li>
                    <li>
                      <Link to="/Bag">BAG</Link>
                    </li>
                    <li>
                      <a href="/">SLIDE/SANDAL</a>
                    </li>
                    <li>
                      <a href="/">CLOTHING</a>
                    </li>
                    <li>
                      <a href="/">SNEAKER SPA</a>
                    </li>
                    <li>
                      <a href="/">ACCESSORIES</a>
                    </li>
                    <li>
                      <Link to="/Contact">LIÊN HỆ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-2 col-sm-7 col-xs-7">
              <div className="main-header-action row-flex">
                <Link to="/Login">
                  <AiOutlineUser className="icon" />
                </Link>
                <Link>
                  <AiOutlineShoppingCart className="icon" />
                </Link>
                <AiOutlineSearch onClick={showModal} className="icon" />

                <Modal
                  title="TÌM KIẾM"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Input
                    placeholder="Tìm kiếm sản phẩm..."
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                  />
                  {/* <AiOutlineSearch className="icon-search" /> */}
                  {data?.data?.map((data, index) => {
                    return (
                      <div className="resultsContent" key={index}>
                        <div className="item-ult">
                          <div className="thumbs">
                            <Link to="">
                              <img src={data.src} alt="" />
                            </Link>
                          </div>
                          <div className="title">
                            <Link className="search-item-name" to="">{data.name}</Link>
                            <p>
                            {data.price}
                            <del>{data.priceSale}</del>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
