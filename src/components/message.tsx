
type User = {
  id: string
  username: string
  color: string
}

type Message = {
  id: string
  userId: string
  user: User
  content: string
  timestamp: Date
}

export const Message = ({ msg, className, ...props }: { msg: Message, className?: String }) => {

  return (
    <div className={`grid grid-cols-msg grid-rows-msg gap-2 center ${className}`} {...props}>
      <div className={`w-5 h-5 rounded-full bg-${msg.user.color}-500 glassmorphism`} />
      <h2 className="text-secondary">
        {msg.user.username}
      </h2>

      <div className="col-start-2">{msg.content}</div>
    </div>
  )
}