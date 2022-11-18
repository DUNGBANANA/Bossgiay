
import {DataProduct} from './DataProduct.js'

import './main.scss'
function Section (){
    return (
        <section className='section section-gallery'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='wrapper-heading-home'>
                        <div className='site-animation heading'>
                            <h2>Khách hàng và Boss Giày</h2>
                        </div>
                    </div>
                    <div className='list-gallery clearfix'>
                    <ul>
                            {DataProduct.map((item) =>(
                                <li>
                                    <div className='gallery_item'>
                                        <img src={item.src} alt='' />
                                    </div>
                                </li>
                            ))}
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;