import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import bookPhoto from './home_components/BookPhoto'


const LogoutPage = () => {

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    return(
        <div>
            <div>
                <br />
                <div>
                    <p>Thanks for stopping by!</p>
                    <p>You have successfully logged out.</p>
                    <p>Please click below to return to the home page.</p>
                </div>
                <br /><br />
                <div className="cardPosition">
                    <Card style={layout.card} color='olive'>
                        <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200" />
                            <Card.Content>
                                <Link to={"/"}>Home</Link>
                        </Card.Content>
                    </Card>  
                </div>
                            
                     
              
            </div>
        </div>
    )

   

}

export default LogoutPage