const total = document.querySelector(".result__total p span")
const value__1 = document.querySelector(".value__1")
const value__2 = document.querySelector(".value__2")
const value__3 = document.querySelector(".value__3")
const roll__value = document.querySelector(".roll__value")

roll__value.addEventListener("click",() => {

const sum1 = value__1.innerHTML = Math.floor(Math.random() * 10 + 1)
const sum2 =  value__2.innerHTML = Math.floor(Math.random() * 10 + 1)
const sum3 =  value__3.innerHTML = Math.floor(Math.random() * 10+ 1)
total.innerHTML = sum1 + sum2 + sum3
})
