// import Footer from "../../components/Footer"
// import './main.scss'
// import Navigation from "../../components/Navigation"
// import Section from "../../components/Section"
// import { Link, useParams } from 'react-router-dom'
// import {useState, useEffect} from 'react'

// // import { getProductById } from '../../utils';

// function ProductDetails (){
//     let { id } = useParams();
//     const [item, setItem] = useState('');
//     const [productQuantity, setProductQuantity] = useState(1);
//     // function handleAddToCart() {
//     //     alert('Đã thêm vào giỏ hàng');
//     //     let cart = [];
//     //     cart = JSON.parse(localStorage.getItem('cart'));
//     //     if (!cart) {
//     //         cart = [{ product, productQuantity }];
//     //     } else {
//     //         let check = true;
//     //         for (let item of cart) {
//     //             if (item.product.id === product.id) {
//     //                 let d = Number(item.productQuantity) + Number(productQuantity);
//     //                 check = false;
//     //                 item.productQuantity = d;
//     //                 localStorage.setItem('cart', JSON.stringify(cart));
//     //                 break;
//     //             }
//     //         }
//     //         if (check) cart.push({ product, productQuantity });
//     //     }
//     //     localStorage.setItem('cart', JSON.stringify(cart));
//     // }

//     useEffect(() => {
//         getProductById(id)
//             .then(function (response) {
//                 // console.log(response);
//                 setItem(response);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             });
//         // eslint-disable-next-line
//     }, []);
//     return (
//         <div>
//             <Navigation></Navigation>
            
//             <div id="product">
//             <div className="container">

//                 <div className="breadcrumb-shop">
//                     <div className="row">
//                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
//                             <ol className="breadcrumb breadcrumb-arrows">
//                             <li><Link to='/'>Trang chủ</Link></li>
//                             <li><Link to='/Sneaker'>SNEAKER</Link></li>
//                             </ol>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//                 <div className="container">
//                 <div className="row product-detail-wrapper">
//                     <div className="col-md-12 col-sm-12 col-xs-12">
//                         <div className="row product-detail-main pr_style_03">
//                             <div className="col-md-7 col-sm-12 col-xs-12 product-content-img">
//                                 <div className="product-gallery">
//                                     <div className="product-gallery__thumbs-container hidden-sm hidden-xs">

//                                     </div>
//                                     <div className="product-image-detail box__product-gallery scroll">
//                                     <img src={'../' + item.src} alt={item.src} />
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="list-productRelated clearfix">
//                             <div className="heading-title text-center"></div>
//                             <div className="content-product-list row"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             <Section/>
//             <Footer></Footer>
//         </div>
//     )
        
// }

// export default ProductDetails