/* Alex Joshua (c) 2023 */

import { PiDotsThreeBold } from "react-icons/pi";

export const Settings = () => {
  return (
    <div className="fixed flex top-4 right-4 h-10 w-12 bg-tertiary rounded-md glassmorphism">
      <button className="h-full w-full flex center">
        <PiDotsThreeBold size={28} />
      </button>
    </div>
  )
}