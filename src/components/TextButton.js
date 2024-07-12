import React from "react"
import Link from "next/link";

const TextButton = ({buttonText, url}) => {
  return (
		<Link href={url}>
			<button className="px-8 py-2 rounded-2xl border-2 border-purple-100 font-bold text-lg sm:text-2xl text-white hover:text-purple-100 hover:underline-offset-4 hover:underline">
				{buttonText}
			</button>
		</Link>
	);
}

export default TextButton
