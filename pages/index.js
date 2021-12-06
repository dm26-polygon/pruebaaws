import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {




  useEffect(() => {

    console.log("Get AWS")

    axios.get('http://massemailvenv.eba-hpjmmthz.us-east-1.elasticbeanstalk.com/sendEmail/')
    .then(res => console.log(res))
    .catch(error => console.log(error))
       
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
