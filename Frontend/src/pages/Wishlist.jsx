import React from 'react'
import { useContext } from 'react'
import { favoritesContext } from '../context/WishlistContext'
import { useGetAllDataQuery } from '../app/selling/Selling'

function Wishlist() {
  let { favorites, setFavorites } = useContext(favoritesContext)
  let { data, isLoading } = useGetAllDataQuery()

  if (!favorites) {
    <h1>Data Yoxdur</h1>
  }

  return (
    <div className='Wishlist'>
      <div className="card-wrapper">
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
  )
}

export default Wishlist
