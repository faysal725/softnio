import { defineStore } from 'pinia';
// import {useNotificationStore} from '@/stores/notificationStore'
// import {useAddressStore} from '@/stores/userAddressStore';




export const useCartStore = defineStore('cartStore', {
  persist: true,
  state: () => ({
      shouldOpen: false,
      vendors: [],
      vendorId: null,
      subTotal: 0,
      total : 0,
      youSaved: 0,
      kmCharge: 0,
      weightCharge: 0,
      baseFare: 0,
      chargeReference: "",
      deliveryChargeLoaded: false,
      totalDeliveryCharge: 0,
      
  }),
  actions: {
    open(type, title, msg){
        this.shouldOpen = true
    },
    close(){
        this.shouldOpen =  false
    },
    getState(){
        return this.shouldOpen
    },
    setProduct(product){
        console.log(product.quantity)
        this.vendorId = product.product.vendor_id
        const {multipleShop} = useRuntimeConfig().public;
        // const notificationStore = useNotificationStore()
        // const {
        // showNotification,
        // hideNotification,
        // getNotificationState,
        // getNotificationData,
        // storeNotificationData
        // } = notificationStore
        let productInfo = {
            vendor: "",
            vendor_id: "",
            products: [],
            deliveryCharge:0,
        }
        if(this.vendors.length == 0) this.setCharge()
        if(this.vendors.length > 0){
            // console.log(multipleShop, product.product.vendor_id ,this.vendors[0].vendor_id)
            if (
                multipleShop == 'true'
            ) {
                // calculateDeliveyCharge({data: product.product , quantity :  product.quantity});

                let exists = this.vendors.find((vd)=>{
                    return vd.vendor.id == product.product.vendor_id
                })

                if(exists == undefined ){
                    this.setDistance()

                    productInfo = {
                        vendor: product.product.vendor,
                        vendor_id: product.product.vendor.id,
                        products: [productBody(product)],
                        deliveryCharge: 0
                    }
                    this.vendors.push(productInfo)

                }
                else{
                    this.vendors.map((vd)=>{
                        if (vd.vendor.id == product.product.vendor_id) {
                            let matched
                            vd.products.map((prd, index) => {
                                

                                if (prd.code == product.code) {
                                    matched = true
                                    prd.quantity = prd.quantity + product.quantity
                                }
                            })
                            if (!matched) {
                                vd.products.push(productBody(product))
                            }

                        }
                    })
                }


            } 
            else{
                // notificationStore.storeNotificationData("Products from different shop cannot be added", 'alert')
                // notificationStore.showNotification()
            }

            
        }else{
            // console.log(product.product, product.quantity)
            // calculateDeliveyCharge({data: product.product , quantity :  product.quantity});
            productInfo = {
                vendor: product.product.vendor,
                vendor_id: product.product.vendor.id,
                products: [productBody(product)],
                deliveryCharge: 0
            }
            this.vendors.push(productInfo)
        }
        
        localStorage.setItem("cart",JSON.stringify(this.vendors));
    },
    async setCharge() {
        const {apiVersion} = useRuntimeConfig().public;
         await networkGet({
        method : 'GET',
        heads : {
          'accept': 'application/json',
        },
        path : apiVersion+'/delivery-charge-setting'               
      }).then( (response) =>{
        this.kmCharge =response.res.per_km
        this.weightCharge =response.res.per_kg
        this.baseFare = response.res.base_fare
        console.log(this.kmCharge , this.weightCharge , this.baseFare);
      } )
    },
    async setDeliveryCharge(){
        // this.deliveryCharges = []
         this.vendors.map((dt , index) => {
            

            
            
            this.setDistance({vendor : dt.vendor}).then((response)=>{
                var kgCharge = 0;
                dt.products.map((prd) => {
                 kgCharge += parseFloat(prd.raw.product.weight) * parseFloat(this.weightCharge)
                 
                })
                var distanceCharge = parseFloat(response.res) * parseFloat(this.kmCharge)
                this.vendors[index].distance

                
                if (dt.vendor.free_delivery == 0) {

                    this.vendors[index].deliveryCharge =
                    {
                        'distance' :  response.res,
                        'vendor': dt.vendor.id,
                        'charge': parseFloat(this.baseFare) + kgCharge + distanceCharge

                    }
                }
                else{
                    this.vendors[index].deliveryCharge =
                    {
                        'distance' :  response.res,
                        'vendor': dt.vendor.id,
                        'charge': 0

                    }
                }

            
            
            })
            
        })

    },
     async setDistance({vendor}) {
        // const {apiVersion} = useRuntimeConfig().public;
        // var  destination = useAddressStore().getAddress().lat +","+useAddressStore().getAddress().lng;
        
        // var origin = vendor.latitude +"," + vendor.longitude
        // return  await networkGet({
        //     method : 'GET',
        //     heads : {
        //       'accept': 'application/json',
        //     },
        //     path : apiVersion+'/calculate-distance?origin='+origin+'&destination='+destination                
        //   })
    },
    removeProduct(vendorIndex, productIndex){
        // calculateDeliveyCharge({data: this.vendors[vendorIndex].products[productIndex].raw.product , quantity : this.vendors[vendorIndex].products[productIndex].quantity  , deduct : true});
        this.vendors[vendorIndex].products.splice(productIndex, 1);
        if (this.vendors[vendorIndex].products.length == 0) {
            this.vendors.splice(vendorIndex, 1);
        }
        this.checkCartStatus()
        this.setSubTotal()
        localStorage.setItem("cart",JSON.stringify(this.vendors));
    },
    emptyCart(){
        this.vendorId = null
        this.deliveryCharge = 0;
        this.kmCharge = 0
        this.weightCharge = 0
        this.baseFare = 0
        this.subTotal = 0;
        this.total =0;
        this.vendors.splice(0,this.vendors.length)
        localStorage.setItem("cart",JSON.stringify(this.vendors));
    },
    getProducts(){
        return this.vendors;
    },
    setProducts(products){
        return this.vendors = products ;
    },
    setChargeReference(crgRef){
        this.chargeReference = crgRef
    },
    getChargeReference(){
        return this.chargeReference 
    },
    setBaseFare(baseFare){
        this.baseFare = baseFare
    },
    getBaseFare(){
        return Math.ceil(this.baseFare)
    },
    getDeliveryCharge(){
        const deliveryCharges = this.vendors.map(item => item.deliveryCharge.charge);
        this.totalDeliveryCharge = deliveryCharges.reduce((acc, charge) => acc + charge, 0);
        return Math.ceil(this.totalDeliveryCharge)
    },
    getVendorId(){
        return this.vendorId
    },
    setWeightCharge(weightCharge){
        this.weightCharge = weightCharge
    },
    setkmCharge(kmCharge){
        this.kmCharge = kmCharge
    },
    getWeightCharge(){
        return this.weightCharge
    },
    getKmCharge(){
        return this.kmCharge
    },
    checkCartStatus(){
        if(this.vendors.length == 0){
            this.deliveryCharge =0;
            this.subTotal = 0;
        }
    },
    getTotal(){
        return Math.ceil(this.subTotal + this.totalDeliveryCharge)
    },
    setSubTotal(){
        this.subTotal = 0
        this.vendors.map((dt) => {
            dt.products.map((prd) => {
                this.subTotal += prd.quantity * prd.discountedPrice
                
            })
        })
       
    },
    getSubTotal(){
        return Math.ceil(this.subTotal)
    }

  }
})
const productBody = (product)=>{
    // console.log(product);
    if(product.product.has_variation){
        var discountedPrice = product.product.variations.map((dt)=>{
            if(dt.variation_code == product.code){
                return dt.discounted_price;
            }else{
                ''
            }
        }).join('')
        // console.log('discountedPrice set', discountedPrice);
        var price = product.product.variations.map((dt)=>{
                          if(dt.variation_code == product.code){
                              return dt.price;
                          }else{
                              ''
                          }
                      }).join('')
        return {
            'product_id': product.product.id,
            'vendor_id': product.product.vendor_id,
            'has_variation': 'true',
            'variationRaw': product.variationRaw,
            'raw': product,
            'name': product.product.name,
            'image' : networkImage(product.product.thumbnail_path),
            'quantity': product.quantity,
            'code': product.code,
            'variation': product.variationString,
            'price':  price,
            'discountedPrice': discountedPrice == '' ? price : discountedPrice,
          }
    }else{
        
        return {
            'product_id': product.product.id,
            'vendor_id': product.product.vendor_id,
            'has_variation': 'false',
            'variationRaw': '',
            'raw': product,
            'name': product.product.name,
            'image' : networkImage(product.product.thumbnail_path),
            'quantity': product.quantity,
            'code': product.code,
            'variation': '',
            'price':  product.product.price,
            'discountedPrice': product.product.discounted_price == null ? product.product.price : product.product.discounted_price
          }
    }
}
