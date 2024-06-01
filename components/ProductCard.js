import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";

const ProductCard = ({ product, onClick }) => {
	const truncatedDescription =
		product.description.length > 100
			? `${product.description.substring(0, 100)}...`
			: product.description;

	return (
		<Card
			className="w-full rounded overflow-hidden shadow-lg cursor-pointer"
			onClick={onClick}
		>
			<div className="h-64 w-full p-6 overflow-hidden flex items-center justify-center">
				<Image
					width={200}
					height={300}
					className="object-contain h-full"
					src={product.image}
					alt={product.title}
				/>
			</div>
			<div className="px-6 py-4">
				<CardTitle className="font-bold text-lg mb-2">
					{product.title}
				</CardTitle>
				<CardDescription className="text-gray-700 text-sm">
					{truncatedDescription}
				</CardDescription>
			</div>
			<CardFooter className="px-6 py-4 flex justify-between items-center">
				<span className="text-xl font-semibold">${product.price}</span>
				<span className="text-sm text-gray-700">
					Rating: {product.rating.rate} ({product.rating.count})
				</span>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
