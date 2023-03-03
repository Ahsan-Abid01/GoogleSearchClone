import React, { useContext ,useEffect} from 'react'
import styles from './Result.module.css'
import logo from '../assets/logo.png'
import {IoMdApps,IoMdSettings} from 'react-icons/io'
import {MdAccountCircle,MdKeyboardVoice,MdOndemandVideo} from 'react-icons/md'
import {BsFillCameraFill} from 'react-icons/bs'
import {GoSearch} from 'react-icons/go'
import {BiNews,BiDotsVerticalRounded} from 'react-icons/bi'
import { Con } from '../../context/Context'
const Result = () => {
  const state=useContext(Con);
  useEffect(() => {
    document.querySelector('input').value=state.query;
  }, [])
  
  return (
    <>
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href='/'><img src={logo} alt='logo'/></a>
      </div>
      <div className={styles.SearchField}>
        <form onSubmit={state.Fetch}>
        <input type={'search'} onChange={(e)=>state.Change(e)} />
        </form>
        <div>
        <MdKeyboardVoice/>
        <BsFillCameraFill/>
        <GoSearch/>
        </div>
      </div>
      <div className={styles.headerTabs}>
      <IoMdSettings/>
        <IoMdApps/>
        <MdAccountCircle/>
      </div>
      <div className={styles.featureBox}>
        <ul>
        <li > <GoSearch/> All</li>
        <li> <BsFillCameraFill/> Images</li>
        <li> <MdOndemandVideo/> Videos</li>
        <li> <BiNews/> News</li>
        <li> <BiDotsVerticalRounded/> More</li>
        </ul>
        <button>Tools</button>
      </div>
      </div>
      <div>
        <div className={styles.discover}>About {state.data?.searchInformation?.formattedTotalResults} results ({state.data?.searchInformation?.formattedSearchTime}) </div>
        <div className={styles.data}>
        {state.data?.items?.map((item,i)=>{
          return <div key={i} style={{paddingTop:'20px'}}>
            <span>
             <a href={item?.formattedUrl}>{item?.formattedUrl}</a>
             </span>
        <div className={styles.url}>
            <a href={item?.formattedUrl}> {item?.title} </a>
            </div> 
            <div className={styles.snippet}>{item?.snippet}</div>
            </div>
        })}
        </div>
      </div>
    </>
  )
}

export default Result;