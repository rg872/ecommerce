Vue.component('list-item', {
    template: 
    `
    <div id="item_shower">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-none d-sm-block" >
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" v-for="type in types">
                            {{type}}
                        </a>
                    </div>
                </div>
                <div class="col-9 d-flex flex-wrap">
                    <div class="card" style="width: 18rem;" v-for="item in items">
                        <img class="card-img-top" v-bind:src="item.item_image"
                            alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.item_name }}</h4>
                            <h6 class="card-title">{{ item.shop_name }}</h6>
                            <p class="card-text">{{ item.item_desc }}</p>
                            <p class="card-text">Harga : {{ toRp(item.item_price) }}</p>
                            <button class="btn btn-primary">Beli Barang</button>
                        </div>
                    </div>                           
                </div>
            </div>
        </div>
    `,
    data: function(){
        return {
            types: ['Gorengan', 'Jajanan', 'Minuman', 'Rokok', 'Yang lain'],
            items:[
                {    
                    item_id: 1,
                    item_name: 'Tahu Goreng',
                    shop_name: 'Warung Pak Doni',
                    item_type: 'Gorengan',
                    item_desc: 'Tahu terlezat di Kedoya',
                    item_price: 2000,
                    item_image: 'https://www.khasiat.co.id/wp-content/uploads/2017/04/Tahu-Goreng.jpg',
                    item_quantity: 1,
                    item_total_price: 2000

                
                },{
                    item_id: 2, 
                    item_name: 'Rokok MLD',
                    shop_name: 'Warung Mba Tina',
                    item_type: 'Rokok',
                    item_desc: 'Pria punya selera',
                    item_price: 21000,
                    item_image: 'https://4.bp.blogspot.com/-QynHKKeliiM/WL6VJlqcPZI/AAAAAAAABoc/vltmBQnAbj0Uhds29Srmfrb0UMQgzBswACLcB/s1600/20170306_161651.jpg',
                    item_quantity: 1,
                    item_total_price: 21000
                
                },{
                    item_id: 3,
                    item_name: 'Permen Milkita',
                    shop_name: 'Warung Mba Sinta',
                    item_type: 'Jajanan',
                    item_desc: '5 permen milkita sama dengan 1 gelas susu loh !!!',
                    item_price: 1500,
                    item_image: 'https://ecs7.tokopedia.net/img/cache/300/product-1/2015/9/11/595690/595690_a404e801-0993-4f49-a014-4658cd99e3c6.jpg',
                    item_quantity: 1,
                    item_total_price: 1500
                
                },{
                    item_id: 4,
                    item_name: 'Lem Aica-Aibon',
                    shop_name: 'Warung Mba Sinta',
                    item_type: 'Yang lain',
                    item_desc: 'Lekat selekat cinta aku ke kamu',
                    item_price: 2500,
                    item_image: 'https://ecs7.tokopedia.net/img/cache/300/product-1/2016/12/15/14555147/14555147_e096f2af-22e8-48be-be99-1249bd861247_612_816.jpg',
                    item_quantity: 1,
                    item_total_price: 2500
                
                },{
                    item_id: 5,
                    item_name: 'Cireng Ranjau',
                    shop_name: 'Warung Pak Toni',
                    item_type: 'Gorengan',
                    item_desc: 'KABOOOMMM !!!',
                    item_price: 2000,
                    item_image: 'https://img-global.cpcdn.com/003_recipes/d671adbe343a626d/1200x630cq70/photo.jpg',
                    item_quantity: 1,
                    item_total_price: 2000
                
                },{
                    item_id: 6,
                    item_name: 'Permen Nano-Nano',
                    shop_name: 'Warung Pak Dermawan',
                    item_type: 'Jajanan',
                    item_desc: 'Permen naon-naon, rame rasanya',
                    item_price: 2500,
                    item_image: 'http://2.bp.blogspot.com/-_kmNlD1WvNQ/Vbxvwir0JZI/AAAAAAAADPc/qNoNyUVWVBM/s1600/Nano%2BNao.jpg',
                    item_quantity: 1,
                    item_total_price: 2500
                
                },{
                    item_id: 7,
                    item_name: 'Sendal Swallow',
                    shop_name: 'Warung Pak Dermawan',
                    item_type: 'Yang lain',
                    item_desc: 'Sendal paling populer seantero indonesia',
                    item_price: 7500,
                    item_image: 'https://superherru.files.wordpress.com/2017/12/sandal.jpg?w=760',
                    item_quantity: 1,
                    item_total_price: 7500
                
                },{
                    item_id: 8,
                    item_name: 'Energen Cereal',
                    shop_name: 'Warung Mba Tirta',
                    item_type: 'Minuman',
                    item_desc: 'Sarapan enggak perlu ribet, kan udah ada energen',
                    item_price: 2000,
                    item_image: 'https://media.karousell.com/media/photos/products/2016/10/30/energen_cereal_drink_milk_1477808556_c57870bc.jpg',
                    item_quantity: 1,
                    item_total_price: 2000
                
                },
                ]
        }
    }, 
        methods: {
            toRp: function (item_price){
                return 'Rp ' + item_price;
            }
        }
    })