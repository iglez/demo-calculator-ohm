import axios from 'axios'

const apiUrl = 'http://localhost:3001/'

const headers = { 'Content-Type': 'application/json' }

// Create a request to ohm value calculator project
const getResults = async (data, setResults) => {
    try {

        const response = await axios.post(apiUrl, 
          {
            'band-a': data.firstDigit,
            'band-b': data.secondDigit,
            'band-c': data.multiplier,
            'band-d': data.tolerance,
          }, 
          { headers }
        )
        
        setResults({
          ...response.data
        })

        return response

      } catch (error) {

        if(error.response) {

          const { message, field } = error.response.data.message[0]

          const fieldMap = {
            "band-a": "1st Digit",
            "band-b": "2nd Digit",
            "band-c": "multiplier",
            "band-d": "tolerance",
          }

          alert (`Error: The ${fieldMap[field]} is a ${message}`)

        } else {

          alert('Server connection error')

        }
      }
}

export { getResults }