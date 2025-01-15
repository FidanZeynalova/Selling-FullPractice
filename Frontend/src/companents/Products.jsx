import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { FaInfoCircle } from 'react-icons/fa';
import { useDeleteDataMutation, useGetAllDataQuery } from '../app/selling/Selling';
import { NavLink } from 'react-router';
import { favoritesContext } from '../context/WishlistContext';

function Products() {
  let { data, isLoading, refetch } = useGetAllDataQuery()
  let [deleteData] = useDeleteDataMutation()
  let [allData, setAllData] = useState([])
  let { favorites, setFavorites } = useContext(favoritesContext)

  async function handleDelete(id) {
    await deleteData(id)
    refetch()
  }
  useEffect(() => {
    if (!isLoading) {
      setAllData(data)
    }
  }, [data])

  function handleSearch(inpValue) {
    if (inpValue.trim().toLowerCase() == "") {
      setAllData(data)
    } else {
      let filter = allData.filter((item) => item.name.toLowerCase().includes(inpValue.trim().toLowerCase()))
      setAllData(filter)
    }
  }
  function handleSort(sortValue) {
    let sortedValue = [...allData]
    console.log(sortedValue)
    switch (sortValue) {
      case "az":
        sortedValue.sort((a, b) => a.name.localeCompare(b.name))
        break;
      case "za":
        sortedValue.sort((a, b) => b.name.localeCompare(a.name))
        break;
      case "default":
        sortedValue = [...data]
        break;
      default:
        break;
    }
    setAllData(sortedValue)
  }
  function handleFav(item) {
    let fav = favorites.find((product)  => product._id == item._id)
    console.log(favorites);
    if (fav) {
      alert("Bu mehsul daha once elave olunub")
    } else {
      setFavorites([...favorites,item] )
    }
  }
  return (
    <div className='Products'>
      <div className="container">
        <div className="content">
          <p>Popular Products</p>
          <h2>Our Products</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</span>
        </div>
        <div className="sort-search">
          <div className="search">
            <input type="text" placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="sort" onClick={(e) => handleSort(e.target.value)}>
            <select >
              <option value="default">Default</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">
          {
            isLoading ? (
              <h1> ...IsLoading</h1>
            ) : (
              allData.map((item) => (
                <div className="card" key={item._id}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="text">
                    <p>{item.name}</p>
                    <span>{item.desc}</span>
                    <div className="btns">
                      <button onClick={() => handleDelete(item._id)}><MdOutlineDeleteOutline /></button>
                      <button onClick={() => handleFav(item)} ><FcLike /></button>
                      <button><NavLink to={`/${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink></button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Products
