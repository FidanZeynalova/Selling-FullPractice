import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useGetDataByIdQuery } from '../app/selling/Selling'
import { NavLink, useNavigate, useParams } from 'react-router'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FcLike } from 'react-icons/fc'

function Detail() {
  let { id } = useParams()
  let { data, isLoading } = useGetDataByIdQuery(id)
  console.log(data);
  let navigate = useNavigate()

  useEffect(() => {

    if (!isLoading && !data) {
      navigate("/*")
    }
  }, [data])
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/oeYnR0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Detail page</title>
      </Helmet>
      <div className="Detail">
        <h1>Detail Page</h1>
        {
          data ? (
            <div className="card" key={data._id}>
              <div className="image">
                <img src={data.image} alt="" />
              </div>
              <div className="text">
                <p>{data.name}</p>
                <span>{data.desc}</span>
                <div className="btns">
                 
                  <button><FcLike /></button>
                  <button><NavLink to={`/`} style={{ color: "black" }}><RiArrowGoBackFill /></NavLink></button>
                </div>
              </div>
            </div>
          ) : (
            <h1>Data YoxDur</h1>
          )
        }
      </div>
    </>
  )
}

export default Detail
