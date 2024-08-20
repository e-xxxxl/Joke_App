import React, { useState, useEffect } from 'react'
import firstNavimg from '../../assets/Nav1.png'
import secondNavimg from '../../assets/bug.png'

const Joke = () => {

    let apiUrl = `https://v2.jokeapi.dev/joke/Any`
    const [joke, setJoke] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3500)

       

       
    }, [])

    const getJoke = () => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            setJoke(data)
            console.log(joke);
            

        })
        .catch((error) => {

        })
    }

    // if (joke.type === "single") {
    //     return (
    //         <div className='joke'>
    //             <div className='joke__header'>
    //                 <img src={firstNavimg} alt="navimg" />
    //                 <img src={secondNavimg} alt="navimg" />
    //             </div>
    //             <div className='joke__body'>
    //                 <h1>{joke.joke}</h1>
    //             </div>
    //         </div>
    //     )
    //  }






    return (

        <>
            {isLoading ? (
                <center>
                    <div class="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </center>

            ) : (
                <div>
                    <div className='Main-nav'>
                        <img className='nav-img' src={firstNavimg} alt="" />

                        <div className='nav-links'>


                            <span>Products</span>
                            <span>Events</span>
                            <span>Partners</span>
                            <span>Contact</span>

                        </div>
                        <img className='bug' src={secondNavimg} alt="" />
                    </div>


                    <div className='Main-content'>
                        <h1 className='joke-text'>Jokes</h1>
                        <span className='joke-span'>E-xxxl is very funny hahahah</span>
                        <div id='show'>
                            {
                                joke!==""?
                            joke.type === "twopart"?(
                             <div className='normal-txt'>
                                {joke.setup} <br />
                                {joke.delivery}
                             </div>
                             
                                
                            ):
                            <div className='normal-txt'>
                            {joke.joke}
                            </div>
                            :
                            <div className='clck-txt'>
                                Click the button
                            </div>
                            }
                        </div>
                        <button onClick={getJoke} className='joke-button'>Get joke</button>
                    </div>
                </div>
            
                


            )
            
            
            
            
            
            
            
            
            
            
            
            }







        </>
    )
}

export default Joke