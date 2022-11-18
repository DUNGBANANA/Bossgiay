import './main.scss'
import {DataProduct} from './DataProduct'
function Product (){
    return (
        <div>
            <div className='wrapper-heading-home'>
                <h2><a href='/'>Sản Phẩm Mới</a></h2>
                <div className='view-all'>
                    <a href='/'>Xem thêm</a>
                </div>
            </div>

            <div className='row'>
                <div className='clearfix content-product-list '>
                    {DataProduct.map((item)=>(
                        <div className='col-md-3 col-sm-6 col-xs-6 pro-loop'>

                            <div className='product-block'>
                                <div className='product-img'>
                                    <div className='product-sale'><span>{item.sale}</span></div>
                                    <a href='/'><img src={item.src} alt=''/></a>
                                </div>

                               

                                
                                <div className='product-detail clearfix'>
                                    <div className='box-pro-detail'>
                                        <h3 className='pro-name'>{item.code} {item.name}</h3>
                                        <div className='box-pro-prices'>
                                            <p className='pro-price highlight'>
                                            {item.priceSale}
                                            <span className='pro-price-del'>
                                                <del className='compare-price'>{item.price}</del>
                                            </span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}

export default Product;