import React, { useEffect, useState } from 'react'
import Template from '../templates/Template';



function GalaryApi() {
    const [data, setData] = useState([])
    const [srch, setCrch] = useState('music');
    const [cat, setCat] = useState('cat')
    const [animals, setanimals] = useState('animals')
    const [nature, setnature] = useState('nature')
    const [fashion, setFashion] = useState('fashion')


    const LINK = `https://api.pexels.com/v1/search?query=${srch}`;
    const LINK_KEY = 'TJofvw42wkBG6ncBAsmWz7yubj8JCFFrCb7JSTReeh5aSw8XynyvNCZ8';

    useEffect( () => {
        try {  
            const dataApi = async () => {
                await fetch(LINK, {
                    method: 'get',
                    headers: {
                    Authorization: LINK_KEY
                }
                })
                .then(response => response.json())
                .then(json => setData(json.photos))
            }
            dataApi()
        } catch (error) {
            console.log('Error');
        }
    }, [LINK] )
    function searchPhotos(event) {
        const resultPhotos = event.target.value;
        console.log(resultPhotos);
        setCrch(resultPhotos)
    }
    function searchCat() {
        setCrch(cat)
    }
    function searchAnimals() {
        setCrch(animals)
    }
    function searchNature() {
        setCrch(nature)
    }
    function searchFashion() {
        setCrch(fashion)
    }

    const getData = data?.map( (el, i) => {
        return <Template src={el.src.medium} alt={el.alt}/>;
    })

  return (
    <div className='galary'>
        <div className='galary__btns-cntr'>
            <div className='galary__btns'>
                <button  className='galary__btn-cat btn' onClick={searchCat}>Cats</button>
                <button  className='galary__btn-animal btn' onClick={searchAnimals}>Animals</button>
                <button  className='galary__btn-nature btn' onClick={searchNature}>Nature</button>
                <button  className='galary__btn-fashion btn' onClick={searchFashion}>Fashion</button>
            </div>
        </div>
        <div className='galary__flex-inpt'>
            <input className='galary__input' placeholder='Music' type='text' onChange={searchPhotos}/>
        </div>
       <div className='galary__images'>{getData}</div> 
    </div>
  )
}

export default GalaryApi