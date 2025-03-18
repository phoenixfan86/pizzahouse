const OrderBadge = () => {
  return (
    <div className="badge relative min-w-20 min-h-12 md:min-w-30 flex-box">
      <div className="w-full flex-box-btw gap-2 p-1">
        <span className="ml-3">60$</span>
        <div className="size-10 bg-amber-100 rounded-full">
          <img src="./assets/icons/pizza.png" alt="pizza" className="" />
        </div>
        <div className="order-ring base-gradient absolute top-0 right-0">
          <span className="">3</span>
        </div>
      </div>
    </div>
  )
}

export default OrderBadge