'use client'

export const InputBar = () => {
  return (
    <div className="fixed bottom-0 w-full flex items-center h-16 px-2 pb-3 bg-tertiary glassmorphism">
      <div className="flex-1 px-2">
        <input type="text"
          className="w-full px-3 py-1 rounded-full
                    bg-input glassmorphism focus:outline-none focus:ring-2 ring-teal-600
                    text-primary"
        />
      </div>
      <div className="px-2">
        <button>Search</button>
      </div>
    </div>
  )
}