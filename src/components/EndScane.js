import {useDispatch,useSelector} from 'react-redux'
import { initializeGame ,changeEndScane} from '../redux/game/memorySlice'

function EndScane() {
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score)
    const modalStatus = useSelector((state) => state.modalStatus)
    const gameStatus = useSelector((state) => state.gameStatus)
    const handleClick = () => {

        dispatch(initializeGame())
        dispatch(changeEndScane())
    }
  return (
   <>
   {
    modalStatus === true &&  <div className='endScane'>
        <h1>{gameStatus}</h1>
    <h1>score : {score}</h1>
    <button onClick={handleClick}>play again</button>
    </div>
   }
   </>
  )
}

export default EndScane