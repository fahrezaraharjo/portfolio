import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {ImGithub} from "react-icons/im"
import {GrInstagram} from "react-icons/gr"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><ImGithub/></a>
        <a href="https://instagram.com" target="_blank"><GrInstagram/></a>

    </div>
  )
}

export default HeaderSocials