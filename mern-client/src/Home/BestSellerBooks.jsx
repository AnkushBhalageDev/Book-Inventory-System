import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,7)))
    }, [])
    return (
        <div>
            <BookCard books={books} headline="Best Seller Books"/>
        </div>
    )
}

export default BestSellerBooks