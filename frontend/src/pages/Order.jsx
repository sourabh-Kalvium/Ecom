import React, { useState,useEffect } from 'react';
import axios from "axios"
function Order() {
    const [address,setaAddress]=useState([])
    const [cartData,setCartData]=useState([])
    const [selectedAddress,setSelectedAddress]=useState(null)
    
 
  
    const totalPrice=cartData.reduce((acc,cur)=>acc+(cur.quantity*cur.productId.price),0)
    const deliveryFee=0
    console.log(totalPrice)

    const handleClick=async()=>{

        let products=cartData.map((ele)=>{
            return {quantity:ele.quantity,product:ele.productId._id,price:ele.productId.price}
        })
        
        let shippingAddreess=address.filter((ele)=>ele._id==selectedAddress)
        if(shippingAddreess.length==0){
            alert("please select one shipping address")
        }
       
        try {
            let response=await axios.post("http://localhost:8080/user/order",{
                orderItems:products,
                shippingAddress:shippingAddreess[0],
                totalAmount:totalPrice,
            },{
                withCredentials:true
            }
           
        )

            if(response.status==201){
                console.log(response.data.messgae)
                alert("order placed successfully")
            }
        } catch (error) {
             console.log(error)
        }
       
    }

  useEffect(()=>{
       const fetchData=async()=>{
             try {
                let response=await axios.get("http://localhost:8080/product/cart",{
                    
                    withCredentials: true   
                    
                })

                if(response.status==200){
                    console.log(response.data.message)
                    setCartData(response.data.message.cart)
                    setaAddress(response.data.message.address)
                }
             } catch (error) {
                console.log(error)
             } 
       }

       fetchData()
  },[])

  

   
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 max-w-4xl mx-auto">
         Address Section
      <div className="w-full md:w-1/2 p-4 border rounded-lg overflow-auto max-h-64">
        <h2 className="text-lg font-semibold mb-2">Select Address</h2>
        <div className="space-y-2">
          {address.map((addr) => (
            <div 
              key={addr._id}
             
              className={`p-2 border rounded-lg cursor-pointer ${selectedAddress === addr._id ? 'border-blue-500 bg-amber-50' : 'border-gray-300'}`} 
              onClick={() =>setSelectedAddress(addr._id) }
            >
              <p className="font-semibold">{addr.city}</p>
              <p className="text-sm">{addr.address}, {addr.pincode}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-full md:w-1/2 p-4 border rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
        <div className="overflow-auto max-h-64 space-y-2">
          {cartData.map((item) => (
            <div key={item.id} className="p-2 border-b flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.productId.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold">Total: ₹{totalPrice}</p>
          <p className="text-sm text-gray-600">Delivery Fee: ₹{deliveryFee}</p>
          <p className="font-semibold mt-2">Grand Total: ₹{totalPrice + deliveryFee}</p>
        </div>
        <button onClick={handleClick} className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Order;




