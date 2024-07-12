import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

// button can either redirect to external site or just for displaying icon/png
const IconButton = ({isToExternal, url, iconName}) => {
  // button that redirects to external site
  if (isToExternal && url !== null) {
    return (
      <Link href={url}>
        <button>
          {(iconName === "linkedin") ? <FaLinkedin className="text-white text-3xl sm:text-4xl" /> : <FaGithub className="text-white text-3xl sm:text-4xl" />}
        </button>
      </Link>
    )}

  // button that only show icon/png for tech stacks
  else {
    return (
      <div className="-ml-2">
        <img src={`/icon/${iconName}`} alt={iconName} className="bg-white border-2 border-purple-100 rounded-full w-12 h-12 sm:w-16 sm:h-16"/>
      </div>
    )}
}

export default IconButton
