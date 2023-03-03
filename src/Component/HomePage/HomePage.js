import React, { useContext } from 'react'
import styles from './HomePage.module.css'
import {GrApps} from 'react-icons/gr'
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdKeyboardVoice} from 'react-icons/md'
import {BsFillCameraFill} from 'react-icons/bs'
import logo from '../assets/google_logo.png'
import { Con } from '../../context/Context'

const HomePage = () => {
  const state=useContext(Con);
  return (
    <div className={styles.HomePage}>
      <div className={styles.UpperSection}>
      <li>Gmail</li>
      <li>Images</li>
      <li><GrApps/></li>
      <li><FaUserCircle/></li>
      </div>
      <div className={styles.MiddleSection}>
        <div className={styles.imgBox}>
          <img src={logo} alt='logo'/>
        </div>
        <div className={styles.searchBar}>
          <span><HiOutlineSearch/></span>
        <form onSubmit={(e)=>{state.Fetch(e)}}>
          <input type={'search'} onChange={(e)=>{state.Change(e)}}/>
          </form>
          <div>
            <li><MdKeyboardVoice/></li>
            <li><BsFillCameraFill/></li>
            </div>
           
        </div>
        <div className={styles.button}>
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.country}><label>Pakistan</label></div><br/>
        <ul>
          <div >
          <li>About</li>
          <li>Adevertising</li>
          <li>Business</li>
          <li>How Search Works</li>
          </div>
          <div>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </div>

        </ul>
      </div>
    </div>
  )
}

export default HomePage;