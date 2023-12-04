import React from 'react'

function FlashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-center animate-pulse">
        <h1 className="text-7xl font-bold text-blue-500">
          Mr. Cleansz
        </h1>
        <p className="text-gray-500 text-xl">Gass skuyy cuci sepatu kamu!</p>
      </div>
    </div>
  )
}

export default FlashScreen