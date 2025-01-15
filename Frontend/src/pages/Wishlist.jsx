import React from 'react'
import { useContext } from 'react'
import { favoritesContext } from '../context/WishlistContext'
import { useGetAllDataQuery } from '../app/selling/Selling'
import { Helmet } from 'react-helmet'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FcLike } from 'react-icons/fc'
import { FaInfoCircle } from 'react-icons/fa'
import { NavLink } from 'react-router'

function Wishlist() {
  let { favorites, setFavorites } = useContext(favoritesContext)
  let { data, isLoading } = useGetAllDataQuery()

  if (!favorites) {
    <h1>Data Yoxdur</h1>
  }

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/qzUWk2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wishlist page</title>
      </Helmet>
      <div className='Wishlist'>
        <div className="card-wrapper">
          <h1>Wishlist</h1>
          {
            isLoading ? (
              <h1> ...IsLoading</h1>
            ) : (
              favorites.map((item) => (
                <div className="card" key={item._id}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="text">
                    <p>{item.name}</p>
                    <span>{item.desc}</span>
                    <div className="btns">
                      <button onClick={() => handleDelete(item._id)}><MdOutlineDeleteOutline /></button>
                      <button><FcLike /></button>
                      <button><NavLink to={`/${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink></button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default Wishlist
