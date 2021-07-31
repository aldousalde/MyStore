import React, {useState, useEffect, useContext} from 'react'
import {Card, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UserContext from '../userContext'
import '../App.css'
// import Detail from '../components/Detail'


export default function Product({productProp}){

	return(
		
			<Card className="my-2 cardProduct">
				<Card.Img variant="top" className="cardImage" src={productProp.picture} />
				<Card.Body>
					<Card.Title>
					<h2>{productProp.name}</h2>
					</Card.Title>
					<Card.Text>
						{productProp.description}
					</Card.Text>
					<Card.Text>
						Price: {productProp.price} PHP
					</Card.Text>
					
				</Card.Body>
					<Link to={`/products/${productProp._id}`} onClick={()=> localStorage.setItem('productId', productProp._id)} className="btn btn-primary">Details
					</Link>
			</Card>
		
		)
}