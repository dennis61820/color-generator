import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import {ToastContainer, toast} from 'react-toastify'

const App = () => {
  const [colorList, setColorList] = useState(new Values('#123456').all(10))

  const addList = (color) => {
    try {
      const newColorList = new Values(color).all(10)
    setColorList(newColorList)
    } catch (error) {
      toast.error(error.message)
    }
    
  }

  return (
    <section>
      <Form addList={addList} />
      <ColorList colorList={colorList} />
      <ToastContainer position='top-center' />
    </section>
  )
}
export default App
