import React from "react"
import ReactDom from 'react-dom/client'
import './index.css'
const BookList = () => {
    return <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>

}


const Book = () => {
    return (
        <article className="book">

            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <img alt="LEARNING AMAZON WEB SERVICES" src="https://m.media-amazon.com/images/I/51LpEQxoa1L._SY445_SX342_.jpg" />
const Title = () => {
    return <h2>LEARNING AMAZON WEB SERVICES</h2>
}
const Author = () => {
    return <h4>Mark Wilkins</h4>
}
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<BookList />)
