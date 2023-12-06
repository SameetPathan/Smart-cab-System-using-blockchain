import React from 'react'
import '../service.css';
function OurService(props) {
  return (
    <>
    <div className="product-section mt-150 mb-150">
		<div className="container">
				<div className=" text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Welcome{props.to}</span>, Medi-chain</h3>
						<p> </p>
					</div>
			</div>
		</div>
	</div>
	
    </>
  )
}

export default OurService